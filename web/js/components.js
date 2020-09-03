"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Button == 'undefined') Runtime.Web.Button = {};
Runtime.Web.Button.Button = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Button.Button.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Button.Button.prototype.constructor = Runtime.Web.Button.Button;
Object.assign(Runtime.Web.Button.Button.prototype,
{
	/**
 * Mouse click event
 */
	onClick: async function(ctx, msg)
	{
		await this.signal(ctx, msg.data);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Button.Button)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Button.Button";
	},
});
Object.assign(Runtime.Web.Button.Button, Runtime.Web.Component);
Object.assign(Runtime.Web.Button.Button,
{
	css: function(ctx, vars)
	{
		return "\n.button.h-2911{\n\tpadding: 6px 12px;\n\tcursor: pointer;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'button.button' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "button","attrs": {"@tag":Runtime.rtl.get(ctx, params, "@tag"),"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Button.Button","onClick"],"class":["button", this.getCssHash(ctx)].join(" "),"@elem_name":"button"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": content});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Button";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Button.Button";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Button.Button",
			"name": "Runtime.Web.Button.Button",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Button.Button);
window["Runtime.Web.Button.Button"] = Runtime.Web.Button.Button;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Button.Button;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Button == 'undefined') Runtime.Web.Button = {};
Runtime.Web.Button.ModuleDescription = function(ctx)
{
};
Object.assign(Runtime.Web.Button.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Button.ModuleDescription)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Button.ModuleDescription";
	},
});
Object.assign(Runtime.Web.Button.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Runtime.Web.Button";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.1.2";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":">=0.3"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return null;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Button";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Button.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Button.ModuleDescription",
			"name": "Runtime.Web.Button.ModuleDescription",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Button.ModuleDescription);
window["Runtime.Web.Button.ModuleDescription"] = Runtime.Web.Button.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Button.ModuleDescription;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.Dialog = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Dialog.Dialog.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Dialog.Dialog.prototype.constructor = Runtime.Web.Dialog.Dialog;
Object.assign(Runtime.Web.Dialog.Dialog.prototype,
{
	/**
 * Validate
 */
	validate: function(ctx)
	{
		if (this.params.style == Runtime.Web.Dialog.DialogModel.STYLE_PROMT)
		{
			if (this.model.input == "")
			{
				this.updateModel(ctx, "setError", ctx.translate(ctx, "Runtime.Web.Dialog", "Type input"));
				return false;
			}
		}
		return true;
	},
	/**
 * Input keydown
 */
	onInputKeyDown: async function(ctx, msg)
	{
		var e = msg.data;
		if (e.keyCode == 13)
		{
			this.updateModel(ctx, "setInput", e.value);
			this.updateModel(ctx, "setError", "");
			this.pressButton(ctx, Runtime.Web.Dialog.DialogModel.BUTTON_RESULT_OK);
		}
	},
	/**
 * Button click
 */
	onButtonClick: async function(ctx, msg)
	{
		var tag = msg.data.target.params.get(ctx, "@tag", "");
		await this.pressButton(ctx, tag);
	},
	/**
 * Press button
 * @param string value 
 */
	pressButton: async function(ctx, value)
	{
		var auto_hide = this.params.get(ctx, "auto_hide", true);
		if (value == Runtime.Web.Dialog.DialogModel.BUTTON_RESULT_OK)
		{
			var is_valid = this.validate(ctx);
			if (!is_valid)
			{
				return Promise.resolve();
			}
		}
		if (auto_hide)
		{
			this.updateModel(ctx, "hide");
		}
		var model = this.model(ctx);
		await this.signal(ctx, new Runtime.Web.Dialog.DialogEvent(ctx, Runtime.Dict.from({"input":model.input,"model":model,"tag":model.tag,"button_result":value})));
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.Dialog)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Dialog.Dialog";
	},
});
Object.assign(Runtime.Web.Dialog.Dialog, Runtime.Web.Component);
Object.assign(Runtime.Web.Dialog.Dialog,
{
	css: function(ctx, vars)
	{
		return "\n.dialog_box.h-9e54, .dialog_shadow.h-9e54{\n\tposition: fixed;\n\ttop: 0; left: 0;\n\twidth: 100%; height: 100%;\n\tz-index: 1001;\n}\n.dialog_box.h-9e54{\n\toverflow: auto;\n\toverflow-y: scroll;\n\tdisplay: none;\n}\n.dialog_box.h-9e54.open{\n\tdisplay: block;\n}\n.dialog_shadow.h-9e54{\n\tbackground-color: #000;\n\topacity: 0.2;\n\toverflow: hidden;\n}\n.dialog_wrap.h-9e54{\n\twidth: 100%;\n\tmin-height: 100%;\n}\n.dialog_wrap.h-9e54 > tr > td{\n\tpadding: 20px;\n}\n.dialog.h-9e54{\n\tposition: relative;\n\tpadding: 20px;\n\tbackground-color: white;\n\tmax-width: 350px;\n\tmargin: 0 auto;\n\twidth: auto;\n\tz-index: 1002;\n\tbox-shadow: 2px 4px 10px 0px rgba(0,0,0,0.5)\n}\n.dialog_title.h-9e54, .dialog_message.h-9e54, .dialog_promt.h-9e54{\n\tpadding-bottom: 12px;\n}\n.dialog_title.h-9e54{\n\tfont-weight: bold;\n}\n.dialog_promt_input.h-9e54{\n\tpadding: 6px 12px;\n\twidth: 100%;\n}\n.dialog_buttons.h-9e54{\n\tpadding-top: 12px;\n\ttext-align: center;\n}\n.dialog_buttons.h-9e54 .button.h-2911{\n\tmargin: 0 5px;\n}\n.dialog_row.h-9e54{\n\tpadding-bottom: 6px;\n}\n.dialog_row.h-9e54:last-child{\n\tpadding-bottom: 0px;\n}\n.dialog_result.h-9e54{\n\ttext-align: center;\n\tpadding-top: 12px;\n}\n.dialog_result.h-9e54.success{\n\tcolor: green;\n}\n.dialog_result.h-9e54.error{\n\tcolor: red;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.dialog_box' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_box", ((model.is_open) ? ("open") : ("")), this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_box"}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["dialog_shadow", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_shadow"}});
			
			/* Element 'table.dialog_wrap' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "table","attrs": {"class":["dialog_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_wrap"}});
			
			/* Element 'tr' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "tr","attrs": null});
			
			/* Element 'td' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "td","attrs": null});
			
			/* Element 'div.dialog' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["dialog", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog"}});
			
			/* Text */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": this.renderDialog(ctx, layout, model, params, content)});
			RenderDriver.p(__v4, __v4_childs);
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderDialog: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var show_buttons = (params != null) ? (params.get(ctx, "show_buttons", true)) : (true);
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.Collection.from([this.renderTitle(ctx, layout, model, params, content),this.renderText(ctx, layout, model, params, content),this.renderPromt(ctx, layout, model, params, content),this.renderContent(ctx, layout, model, params, content),(show_buttons) ? (this.renderButtons(ctx, layout, model, params, content)) : (""),this.renderResult(ctx, layout, model, params, content)])});
			
			return __control_childs;
		};
	},
	renderTitle: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (model.title != "")
			{
				/* Element 'div.dialog_title' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_title", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_title"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.title});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderText: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (model.text != "")
			{
				/* Element 'div.dialog_message' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_message", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_message"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.text});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderPromt: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var style = (params != null) ? (params.get(ctx, "style", "")) : ("");
			
			if (style == Runtime.Web.Dialog.DialogModel.STYLE_PROMT)
			{
				/* Element 'div.dialog_promt' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_promt", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_promt"}});
				
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "input","attrs": {"@event:Runtime.Web.Events.KeyDownEvent":["Runtime.Web.Dialog.Dialog","onInputKeyDown"],"@bind":["Runtime.Web.Dialog.Dialog","input"],"class":["dialog_promt_input", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_promt_input"}});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderContent: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var style = (params != null) ? (params.get(ctx, "style", "")) : ("");
			
			if (style == Runtime.Web.Dialog.DialogModel.STYLE_CONTENT)
			{
				/* Element 'div.dialog_content' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_content", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_content"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": content});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderButtons: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.dialog_buttons' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_buttons"}});
			
			/* Component 'Button' */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Button.Button","attrs": {"@tag":"ok","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"]}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "OK"});
				
				return __control_childs;
			}});
			
			/* Component 'Button' */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Button.Button","attrs": {"@tag":"cancel","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"]}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Cancel"});
				
				return __control_childs;
			}});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderResult: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (model.message != "" || model.success != "" || model.error == "")
			{
				/* Element 'div.dialog_result' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_result", this.getResultClass(ctx, model), this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_result"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.message});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.success});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.error});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	/**
 * Returns result class
 */
	getResultClass: function(ctx, model)
	{
		if (model.success != "")
		{
			return "success";
		}
		if (model.error != "")
		{
			return "error";
		}
		return "";
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.Button.Button"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.Dialog";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Dialog.Dialog",
			"name": "Runtime.Web.Dialog.Dialog",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Dialog.Dialog);
window["Runtime.Web.Dialog.Dialog"] = Runtime.Web.Dialog.Dialog;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.Dialog;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.DialogEvent = function(ctx)
{
	Runtime.Web.Events.UIEvent.apply(this, arguments);
};
Runtime.Web.Dialog.DialogEvent.prototype = Object.create(Runtime.Web.Events.UIEvent.prototype);
Runtime.Web.Dialog.DialogEvent.prototype.constructor = Runtime.Web.Dialog.DialogEvent;
Object.assign(Runtime.Web.Dialog.DialogEvent.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.input = "";
		this.button_result = "";
		this.tag = null;
		this.model = null;
		Runtime.Web.Events.UIEvent.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.DialogEvent)
		{
			this.input = o.input;
			this.button_result = o.button_result;
			this.tag = o.tag;
			this.model = o.model;
		}
		Runtime.Web.Events.UIEvent.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "input")this.input = v;
		else if (k == "button_result")this.button_result = v;
		else if (k == "tag")this.tag = v;
		else if (k == "model")this.model = v;
		else Runtime.Web.Events.UIEvent.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "input")return this.input;
		else if (k == "button_result")return this.button_result;
		else if (k == "tag")return this.tag;
		else if (k == "model")return this.model;
		return Runtime.Web.Events.UIEvent.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Dialog.DialogEvent";
	},
});
Object.assign(Runtime.Web.Dialog.DialogEvent, Runtime.Web.Events.UIEvent);
Object.assign(Runtime.Web.Dialog.DialogEvent,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.DialogEvent";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Events.UIEvent";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"name": "Runtime.Web.Dialog.DialogEvent",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("input");
			a.push("button_result");
			a.push("tag");
			a.push("model");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "input") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "button_result") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "tag") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "model") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Dialog.DialogEvent);
window["Runtime.Web.Dialog.DialogEvent"] = Runtime.Web.Dialog.DialogEvent;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.DialogEvent;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.DialogModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.Dialog.DialogModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.Dialog.DialogModel.prototype.constructor = Runtime.Web.Dialog.DialogModel;
Object.assign(Runtime.Web.Dialog.DialogModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.is_open = false;
		this.is_modal = false;
		this.title = "";
		this.text = "";
		this.input = "";
		this.button_result = "";
		this.message = "";
		this.success = "";
		this.error = "";
		this.tag = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.DialogModel)
		{
			this.is_open = o.is_open;
			this.is_modal = o.is_modal;
			this.title = o.title;
			this.text = o.text;
			this.input = o.input;
			this.button_result = o.button_result;
			this.message = o.message;
			this.success = o.success;
			this.error = o.error;
			this.tag = o.tag;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "is_open")this.is_open = v;
		else if (k == "is_modal")this.is_modal = v;
		else if (k == "title")this.title = v;
		else if (k == "text")this.text = v;
		else if (k == "input")this.input = v;
		else if (k == "button_result")this.button_result = v;
		else if (k == "message")this.message = v;
		else if (k == "success")this.success = v;
		else if (k == "error")this.error = v;
		else if (k == "tag")this.tag = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "is_open")return this.is_open;
		else if (k == "is_modal")return this.is_modal;
		else if (k == "title")return this.title;
		else if (k == "text")return this.text;
		else if (k == "input")return this.input;
		else if (k == "button_result")return this.button_result;
		else if (k == "message")return this.message;
		else if (k == "success")return this.success;
		else if (k == "error")return this.error;
		else if (k == "tag")return this.tag;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Dialog.DialogModel";
	},
});
Object.assign(Runtime.Web.Dialog.DialogModel, Runtime.BaseStruct);
Object.assign(Runtime.Web.Dialog.DialogModel,
{
	STYLE_PROMT: "promt",
	STYLE_CONFIRM: "confirm",
	STYLE_ALERT: "alert",
	STYLE_CONTENT: "content",
	BUTTON_RESULT_OK: "ok",
	BUTTON_RESULT_CANCEL: "cancel",
	BUTTON_RESULT_EXIT: "exit",
	/**
	 * Show dialog
	 */
	show: function(ctx, model, params)
	{
		if (params == undefined) params = null;
		if (params == null)
		{
			return model.copy(ctx, Runtime.Dict.from({"input":"","is_open":true,"button_result":"","message":"","success":"","error":""}));
		}
		params = params.concat(ctx, Runtime.Dict.from({"input":params.get(ctx, "input", ""),"is_open":true,"button_result":"","message":"","success":"","error":""}));
		return model.copy(ctx, params);
	},
	/**
	 * Hide dialog
	 */
	hide: function(ctx, model, button_result)
	{
		if (button_result == undefined) button_result = "";
		return model.copy(ctx, Runtime.Dict.from({"is_open":false,"tag":null,"button_result":button_result}));
	},
	/**
	 * Set error
	 */
	setError: function(ctx, model, error)
	{
		return model.copy(ctx, Runtime.Dict.from({"error":error,"success":"","message":""}));
	},
	/**
	 * Set input
	 */
	setInput: function(ctx, model, input)
	{
		return model.copy(ctx, Runtime.Dict.from({"input":input}));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.DialogModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": "Runtime.Web.Dialog.DialogModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("is_open");
			a.push("is_modal");
			a.push("title");
			a.push("text");
			a.push("input");
			a.push("button_result");
			a.push("message");
			a.push("success");
			a.push("error");
			a.push("tag");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "STYLE_PROMT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "STYLE_CONFIRM") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "STYLE_ALERT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "STYLE_CONTENT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "BUTTON_RESULT_OK") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "BUTTON_RESULT_CANCEL") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "BUTTON_RESULT_EXIT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_open") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_modal") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "title") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "text") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "input") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "button_result") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "success") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "error") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "tag") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Dialog.DialogModel);
window["Runtime.Web.Dialog.DialogModel"] = Runtime.Web.Dialog.DialogModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.DialogModel;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.ModuleDescription = function(ctx)
{
};
Object.assign(Runtime.Web.Dialog.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.ModuleDescription)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Dialog.ModuleDescription";
	},
});
Object.assign(Runtime.Web.Dialog.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Runtime.Web.Dialog";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.1.2";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":"*","Runtime.Web.Button":"*"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return null;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Dialog.ModuleDescription",
			"name": "Runtime.Web.Dialog.ModuleDescription",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Dialog.ModuleDescription);
window["Runtime.Web.Dialog.ModuleDescription"] = Runtime.Web.Dialog.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.ModuleDescription;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.Input = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Input.Input.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Input.Input.prototype.constructor = Runtime.Web.Input.Input;
Object.assign(Runtime.Web.Input.Input.prototype,
{
	/**
 * On change
 */
	onChange: function(ctx, msg)
	{
		this.signal(ctx, msg.data);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.Input)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Input.Input";
	},
});
Object.assign(Runtime.Web.Input.Input, Runtime.Web.Component);
Object.assign(Runtime.Web.Input.Input,
{
	css: function(ctx, vars)
	{
		return "\n.input.h-9e6e{\n\twidth: 100%;\n\tpadding: 6px 12px;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var value = (params != null) ? (params.get(ctx, "value", "")) : ("");
			
			var name = (params != null) ? (params.get(ctx, "name", "")) : ("");
			
			var kind = (params != null) ? (params.get(ctx, "type", "input")) : ("");
			
			var tag = (params != null) ? (params.get(ctx, "@tag", "")) : ("");
			
			/* Element 'input.input' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "input","attrs": {"@tag":tag,"@event:Runtime.Web.Events.User.ChangeEvent":["Runtime.Web.Input.Input","onChange"],"name":name,"type":kind,"value":model,"class":["input", this.getCssHash(ctx)].join(" "),"@elem_name":"input"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": content});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.Input";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Input.Input",
			"name": "Runtime.Web.Input.Input",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Input.Input);
window["Runtime.Web.Input.Input"] = Runtime.Web.Input.Input;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.Input;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.ModuleDescription = function(ctx)
{
};
Object.assign(Runtime.Web.Input.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.ModuleDescription)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Input.ModuleDescription";
	},
});
Object.assign(Runtime.Web.Input.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Runtime.Web.Input";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.1.2";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":">=0.3"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return null;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Input.ModuleDescription",
			"name": "Runtime.Web.Input.ModuleDescription",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Input.ModuleDescription);
window["Runtime.Web.Input.ModuleDescription"] = Runtime.Web.Input.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.ModuleDescription;