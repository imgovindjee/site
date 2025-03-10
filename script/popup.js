(function () {
	let bs4pop = {};
	bs4pop.dialog = function (opts) {

		opts = $.extend(true, {
			id: '',
			title: '',
			content: '',
			className: '',
			width: 500,
			height: '',
			target: 'body',
			closeBtn: true,
			hideRemove: true,
			escape: true,
			autoFocus: true,
			show: true,
			backdrop: true,
			btns: [],
			drag: true,

			onShowStart() { },
			onShowEnd() { },
			onHideStart() { },
			onHideEnd() { },
			onClose() { },
			onDragStart() { },
			onDragEnd() { },
			onDrag() { }
		}, opts);


		let $el = opts.id !== '' ? $('#' + opts.id) : undefined;
		if (!$el || !$el.length) {
			$el = $(`
				<div class="modal fade" tabindex="-1" role="dialog" data-backdrop="${opts.backdrop}">
					<div class="modal-dialog ">
						<div class="modal-content">
							<div class="modal-body"></div>
						</div>
					</div>
				</div>
			`);
		}

		let $body = $el.find('.modal-body');

		if (opts.closeBtn || opts.title) {

			let $header = $('<div class="modal-header"></div>');

			if (opts.title) {
				$header.append(`<h5 class="modal-title"> ${opts.title} </h5>`);
			}

			if (opts.closeBtn) {
				$header.append(`
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				`);
			}

			$body.before($header);

		}

		if (opts.btns.length) {

			let $footer = $('<div class="modal-footer"></div>');
			opts.btns.forEach(btn => {

				btn = $.extend(true, {
					label: 'Button',
					className: 'btn-primary',
					onClick(cb) { },
				}, btn);

				let $btn = $('<button type="button" class="btn ' + btn.className + ' pl-5 pr-5">' + btn.label + '</button>');

				$btn.on('click', evt => {


					evt.hide = () => {
						$el.modal('hide');
					};


					if (btn.onClick(evt) !== false) {
						$el.modal('hide');
					}

				});

				$footer.append($btn);

			});

			$body.after($footer);

		}

		if (typeof opts.content === 'string') {
			$body.html(opts.content);
		} else if (typeof opts.content === 'object') {
			$body.empty();
			$(opts.content).contents().appendTo($body);
		}


		opts.id && $el.attr('id', opts.id);
		opts.className && $el.addClass(opts.className);
		opts.width && $el.find('.modal-dialog').width(opts.width).css('max-width', opts.width);
		opts.height && $el.find('.modal-dialog').height(opts.height);
		opts.isCenter && $el.find('.modal-dialog').addClass('modal-dialog-centered');

		opts.hideRemove && $el.on('hidden.bs.modal', function () {
			$el.modal('dispose').remove();
		});

		$el.on('show.bs.modal', opts.onShowStart);
		$el.on('shown.bs.modal', opts.onShowEnd);
		$el.on('hide.bs.modal', opts.onHideStart);
		$el.on('hidden.bs.modal', opts.onHideEnd);

		opts.closeBtn && $el.find('.close').on('click', function () {
			console.log('close');
			return opts.onClose();
		});

		if (opts.drag) {
			$el.attr('data-drag', 'drag');
			drag({
				el: $el.find('.modal-content'),
				handle: $el.find('.modal-header'),
				onDragStart() {
					$el.attr('data-drag', 'draged');
					opts.onDragStart();
				},
				onDragEnd() {
					opts.onDragEnd();
				},
				onDraging() {
					opts.onDrag();
				}
			});
		}

		$(opts.target).append($el);

		$el.modal({
			backdrop: opts.backdrop,
			keyboard: opts.escape,
			focus: opts.autoFocus,
			show: opts.show
		});

		let result = {
			$el: $el,
			show() {
				$el.modal('show');
			},
			hide() {
				$el.modal('hide');
			},
			toggle() {
				$el.modal('toggle');
			},
			destory() {
				$el.modal('dispose');
			}
		};

		return result;

	};

	bs4pop.removeAll = function () {
		$('[role="dialog"],.modal-backdrop').remove();
	};

	function drag(opts) {

		opts = $.extend(true, {
			el: '',
			handle: '',
			onDragStart() { },
			onDraging() { },
			onDragEnd() { }

		}, opts);

		opts.el = $(opts.el);
		opts.handle = $(opts.handle);
		let $root = $(document);
		let isFirstDrag = true;

		$(opts.handle).on('touchstart mousedown', startEvt => {

			let pointEvt = startEvt;
			if (startEvt.type === 'touchstart') {
				pointEvt = startEvt.touches[0];
			}

			let startData = {
				pageX: pointEvt.pageX,
				pageY: pointEvt.pageY,
				targetPageX: opts.el.offset().left,
				targetPageY: opts.el.offset().top,
			};

			let move = moveEvt => {

				let pointEvt = moveEvt;
				if (moveEvt.type === 'touchmove') {
					pointEvt = moveEvt.touches[0];
				}

				let moveData = {
					pageX: pointEvt.pageX,
					pageY: pointEvt.pageY,
					moveX: pointEvt.pageX - startData.pageX,
					moveY: pointEvt.pageY - startData.pageY,
				};

				if (isFirstDrag) {
					opts.onDragStart(startData);
					isFirstDrag = false;
				} else {
					opts.onDraging();
				}

				opts.el.css({
					left: startData.targetPageX + moveData.moveX,
					top: startData.targetPageY + moveData.moveY,
				});

			};

			let up = () => {
				$root.off('touchmove mousemove', move);
				$root.off('touchend mouseup', up);
				opts.onDragEnd();
			};

			$root.on('touchmove mousemove', move).on('touchend mouseup', up);

		});

	}

	bs4pop.alert = function (content, cb, opts) {

		let dialogOpts = $.extend(true, {
			title: '对话框',
			content: content,
			hideRemove: true,
			width: 500,
			btns: [
				{
					label: '确定',
					onClick() {
						if (cb) {
							return cb();
						}
					}
				}
			]
		}, opts);

		return bs4pop.dialog(dialogOpts);

	};

	bs4pop.confirm = function (content, cb, opts) {

		let dialogOpts = $.extend(true, {
			title: '选择框',
			content: content,
			hideRemove: true,
			btns: [
				{
					label: '确定',
					onClick() {
						if (cb) {
							return cb(true);
						}
					}
				},
				{
					label: '取消',
					className: 'btn-secondary',
					onClick() {
						if (cb) {
							return cb(false);
						}
					}
				}
			]
		}, opts);

		return this.dialog(dialogOpts);

	};

	//输入框
	bs4pop.prompt = function (content, value, cb, opts) {

		let $content = $(`
			<div>
				<p>${content}</p>
				<input type="text" class="form-control" value="${value}"/>
			</div>
		`);

		let $input = $content.find('input');

		let dialogOpts = $.extend(true, {
			title: '输入框',
			content: $content,
			hideRemove: true,
			width: 500,
			btns: [
				{
					label: '确定',
					onClick() {
						if (cb) {
							return cb(true, $input.val());
						}
					}
				},
				{
					label: '取消',
					className: 'btn-secondary',
					onClick() {
						if (cb) {
							return cb(false, $input.val());
						}
					}
				}
			]
		}, opts);

		return bs4pop.dialog(dialogOpts);

	};

	bs4pop.notice = function (content, opts) {

		opts = $.extend(true, {

			type: 'primary', //primary, secondary, success, danger, warning, info, light, dark
			position: 'topcenter', //topleft, topcenter, topright, bottomleft, bottomcenter, bottonright, center,
			appendType: 'append', //append, prepend
			closeBtn: false,
			autoClose: 4000,
			className: '',

		}, opts);
		let $container = $('#alert-container-' + opts.position);
		if (!$container.length) {
			$container = $('<div id="alert-container-' + opts.position + '" class="alert-container"></div>');
			$('body').append($container);
		}
		let $el = $(`
			<div class="alert fade alert-${opts.type}" role="alert">${content}</div>
		`);

		if (opts.autoClose) {
			$el.append(`
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				`)
				.addClass('alert-dismissible');
		}
		if (opts.autoClose) {

			let t = setTimeout(() => {
				try {
					$el.alert('close');
				} catch (e) { }
			}, opts.autoClose);

		}

		opts.appendType === 'append' ? $container.append($el) : $container.prepend($el);

		setTimeout(() => {
			$el.addClass('show');
		}, 50);

		return;

	};

	if (typeof module !== 'undefined' && typeof exports === 'object') {
		module.exports = bs4pop;
	} else if (typeof define === 'function' && (define.amd || define.cmd)) {
		define(function () { return bs4pop; });
	} else {
		this.bs4pop = bs4pop;
	}

}).call(this || (typeof window !== 'undefined' ? window : global));