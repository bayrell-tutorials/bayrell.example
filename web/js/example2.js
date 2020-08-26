"use strict;"
if (typeof Example2 == 'undefined') Example2 = {};
Example2.AppLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Example2.AppLayout.prototype = Object.create(Runtime.Web.Component.prototype);
Example2.AppLayout.prototype.constructor = Example2.AppLayout;
Object.assign(Example2.AppLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Example2.AppLayout)
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
		return "Example2.AppLayout";
	},
});
Object.assign(Example2.AppLayout, Runtime.Web.Component);
Object.assign(Example2.AppLayout,
{
	css: function(ctx, vars)
	{
		return "\n*{box-sizing: border-box;}body{margin:0;padding:0;}\na { text-decoration: inherit; color: #0000d0; cursor: pointer; }\na:hover, a:visited:hover { text-decoration: underline; color: red; }\na:visited { text-decoration: inherit; color: #0000d0; }\na.link { text-decoration: none; color: #0000d0; cursor: pointer; }\na.link:hover, a.link:visited:hover { text-decoration: underline; color: red; }\na.link:visited { text-decoration: none; color: #0000d0; }\nbody, html{\n\tbackground-color: #F2F2F2;\n\tfont-family: 'Ubuntu', sans-serif;\n\tfont-size: 14px;\n\twidth: 100%;\n\theight: 100vh;\n\tpadding: 0;\n\tmargin: 0;\n}\n.section.h-4a42{\n\theight: 100vh;\n}\n.container.h-4a42{\n\tdisplay: table;\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.container-in.h-4a42{\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\ttext-align: center;\n\twidth: 100%;\n\theight: 100vh;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			/* Element 'section.section' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "section","attrs": {"class":["section", this.getCssHash()].join(" "),"@elem_name":"section"}});
			
			/* Element 'div.container' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["container", this.getCssHash()].join(" "),"@elem_name":"container"}});
			
			/* Element 'div.container-in' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["container-in", this.getCssHash()].join(" "),"@elem_name":"container-in"}});
			
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "component", {"name": class_name,"attrs": {"@bind":["Example2.AppLayout","page_model"],"@key":"page"}, "layout": layout});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example2";
	},
	getCurrentClassName: function()
	{
		return "Example2.AppLayout";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Example2.AppLayout",
			"name": "Example2.AppLayout",
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
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
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
Runtime.rtl.defClass(Example2.AppLayout);
window["Example2.AppLayout"] = Example2.AppLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example2.AppLayout;
"use strict;"
if (typeof Example2 == 'undefined') Example2 = {};
Example2.IndexPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Example2.IndexPage.prototype = Object.create(Runtime.Web.Component.prototype);
Example2.IndexPage.prototype.constructor = Example2.IndexPage;
Object.assign(Example2.IndexPage.prototype,
{
	/**
 * Add click
 */
	onAddClick: async function(ctx, msg)
	{
		this.dialog.updateModel(ctx, "show", Runtime.Dict.from({"title":"Add new item"}));
	},
	/**
 * Input change
 */
	onInputChange: async function(ctx, msg)
	{
		var model = this.model(ctx);
		if (model.edit_item == null)
		{
			return Promise.resolve();
		}
		var field_name = msg.data.target.getAttribute("field_name");
		var value = msg.data.value;
		var edit_item = model.edit_item;
		edit_item = edit_item.copy(ctx, (new Runtime.Map(ctx)).set(ctx, field_name, value));
		this.updateModel(ctx, "setAttr", "edit_item", edit_item);
	},
	/**
 * Dialog event
 */
	onDialogEvent: async function(ctx, msg)
	{
		if (msg.data.button_result == "ok")
		{
			this.updateModel(ctx, "addItem", new Example2.Item(ctx, Runtime.Dict.from({"name":msg.data.input,"id":this.model(ctx).next_id + 1})));
			this.updateModel(ctx, "incNextId");
		}
	},
	/**
 * On item click
 */
	onItemClick: async function(ctx, msg)
	{
		var model = this.model(ctx);
		var index = msg.data.target.getAttribute("data-index");
		this.updateModel(ctx, "update", Runtime.Dict.from({"selected_id":Runtime.rtl.get(ctx, model.items, index).id,"edit_item":model.items.get(ctx, index, null)}));
	},
	/**
 * OnSave
 */
	onSaveClick: async function(ctx, msg)
	{
		var model = this.model(ctx);
		var index = model.getSelectedIndex(ctx);
		if (index == -1)
		{
			return Promise.resolve();
		}
		/* Edit item */
		var edit_item = model.edit_item;
		this.updateModel(ctx, "setItemByIndex", index, edit_item);
	},
	/**
 * On Remove
 */
	onRemoveClick: async function(ctx, msg)
	{
		var model = this.model(ctx);
		msg.cancel(ctx);
		var index = Runtime.rtl.to(msg.data.target.params.get(ctx, "@tag", -1), {"e":"int"});
		if (index == -1 && index >= model.items.count(ctx))
		{
			return Promise.resolve();
		}
		var item = Runtime.rtl.get(ctx, model.items, index);
		/* Remove item */
		this.updateModel(ctx, "removeItemByIndex", index);
		if (item == model.edit_item)
		{
			this.updateModel(ctx, "copy", Runtime.Dict.from({"edit_item":null}));
		}
	},
	_init: function(ctx)
	{
		this.dialog = null;
		Runtime.Web.Component.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example2.IndexPage)
		{
			this.dialog = o.dialog;
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "dialog")this.dialog = v;
		else Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "dialog")return this.dialog;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Example2.IndexPage";
	},
});
Object.assign(Example2.IndexPage, Runtime.Web.Component);
Object.assign(Example2.IndexPage,
{
	css: function(ctx, vars)
	{
		return "\n.content.h-4545{\n\ttext-align: center;\n\tpadding-top: 20px;\n\twidth: 500px;\n}\n.menu.h-4545{\n\tpadding-bottom: 10px;\n}\n.list.h-4545, .info.h-4545{\n\tdisplay: inline-block;\n\tvertical-align: top;\n\ttext-align: left;\n}\n.list.h-4545{\n\twidth: 50%;\n\tpadding-right: 10px;\n}\n.info.h-4545{\n\twidth: 50%;\n\tpadding-left: 10px;\n}\n.info_buttons.h-4545{\n\tpadding-top: 5px;\n\ttext-align: center;\n}\n.field_label.h-4545{\n\tfont-weight: bold;\n\tpadding-bottom: 5px;\n}\n.input.h-4545{\n\twidth: 100%;\n\tpadding: 6px 12px;\n}\n.item.h-4545{\n\tpadding: 10px;\n\tcursor: pointer;\n}\n.item.h-4545.active{\n\tbackground-color: blue;\n\tcolor: white;\n}\n.item-content.h-4545, .item.h-4545 .rm-button.h-4545{\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.item-content.h-4545{\n\twidth: calc(100% - 80px);\n\tpadding-right: 5px;\n}\n.item.h-4545 .rm-button.h-4545{\n\twidth: 80px;\n\ttext-align: right;\n}\n.item.h-4545 .rm-button.h-4545 button{\n\tcursor: pointer;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash()].join(" "),"@elem_name":"content"}});
			
			/* Element 'div.menu' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["menu", this.getCssHash()].join(" "),"@elem_name":"menu"}});
			
			/* Component 'Button' */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": "Runtime.Web.Button.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Example2.IndexPage","onAddClick"]}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Add"});
				
				return __control_childs;
			}});
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.list' */
			var __v2; var __v2_childs = [];
			[__v2, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["list", this.getCssHash()].join(" "),"@elem_name":"list"}});
			
			for (var i = 0;i < model.items.count(ctx);i++)
			{
				var item = Runtime.rtl.get(ctx, model.items, i);
				
				/* Element 'div.item' */
				var __v3; var __v3_childs = [];
				[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "div","attrs": {"data-index":i,"@event:Runtime.Web.Events.MouseClickEvent":["Example2.IndexPage","onItemClick"],"class":["item", ((model.selected_id == item.id) ? ("active") : ("")), this.getCssHash()].join(" "),"@elem_name":"item"}});
				
				/* Element 'div.item-content' */
				var __v4; var __v4_childs = [];
				[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["item-content", this.getCssHash()].join(" "),"@elem_name":"item-content"}});
				
				/* Text */
				[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": item.name});
				RenderDriver.p(__v4, __v4_childs);
				
				/* Element 'div.rm-button' */
				var __v5; var __v5_childs = [];
				[__v5, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["rm-button", this.getCssHash()].join(" "),"@elem_name":"rm-button"}});
				
				/* Component 'Button' */
				[__vnull, __v5_childs] = RenderDriver.e(__v5, __v5_childs, "component", {"name": "Runtime.Web.Button.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Example2.IndexPage","onRemoveClick"],"@tag":i}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Remove"});
					
					return __control_childs;
				}});
				RenderDriver.p(__v5, __v5_childs);
				RenderDriver.p(__v3, __v3_childs);
			}
			RenderDriver.p(__v2, __v2_childs);
			
			/* Element 'div.info' */
			var __v6; var __v6_childs = [];
			[__v6, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["info", this.getCssHash()].join(" "),"@elem_name":"info"}});
			
			if (model.edit_item != null)
			{
				/* Element 'div.field' */
				var __v7; var __v7_childs = [];
				[__v7, __v6_childs] = RenderDriver.e(__v6, __v6_childs, "element", {"name": "div","attrs": {"class":["field", this.getCssHash()].join(" "),"@elem_name":"field"}});
				
				/* Element 'div.field_label' */
				var __v8; var __v8_childs = [];
				[__v8, __v7_childs] = RenderDriver.e(__v7, __v7_childs, "element", {"name": "div","attrs": {"class":["field_label", this.getCssHash()].join(" "),"@elem_name":"field_label"}});
				
				/* Text */
				[__vnull, __v8_childs] = RenderDriver.e(__v8, __v8_childs, "text", {"content": "Name"});
				RenderDriver.p(__v8, __v8_childs);
				
				/* Element 'div.field_edit' */
				var __v9; var __v9_childs = [];
				[__v9, __v7_childs] = RenderDriver.e(__v7, __v7_childs, "element", {"name": "div","attrs": {"class":["field_edit", this.getCssHash()].join(" "),"@elem_name":"field_edit"}});
				
				[__vnull, __v9_childs] = RenderDriver.e(__v9, __v9_childs, "element", {"name": "input","attrs": {"field_name":"name","@event:Runtime.Web.Events.ChangeEvent":["Example2.IndexPage","onInputChange"],"value":Runtime.rtl.attr(ctx, model, ["edit_item", "name"]),"attrs":this.json_encode(ctx, Runtime.Dict.from({"field_name":"name"})),"class":["input", this.getCssHash()].join(" "),"@elem_name":"input"}});
				RenderDriver.p(__v9, __v9_childs);
				RenderDriver.p(__v7, __v7_childs);
				
				/* Element 'div.info_buttons' */
				var __v10; var __v10_childs = [];
				[__v10, __v6_childs] = RenderDriver.e(__v6, __v6_childs, "element", {"name": "div","attrs": {"class":["info_buttons", this.getCssHash()].join(" "),"@elem_name":"info_buttons"}});
				
				/* Component 'Button' */
				[__vnull, __v10_childs] = RenderDriver.e(__v10, __v10_childs, "component", {"name": "Runtime.Web.Button.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Example2.IndexPage","onSaveClick"]}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Save"});
					
					return __control_childs;
				}});
				RenderDriver.p(__v10, __v10_childs);
			}
			RenderDriver.p(__v6, __v6_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			/* Element 'div.dialogs' */
			var __v11; var __v11_childs = [];
			[__v11, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialogs", this.getCssHash()].join(" "),"@elem_name":"dialogs"}});
			
			[__vnull, __v11_childs] = RenderDriver.e(__v11, __v11_childs, "component", {"name": "Runtime.Web.Dialog.Dialog","attrs": {"@bind":["Example2.IndexPage","dialog"],"@ref":["Example2.IndexPage","dialog"],"style":"promt","@event:Runtime.Web.Dialog.DialogEvent":["Example2.IndexPage","onDialogEvent"]}, "layout": layout});
			RenderDriver.p(__v11, __v11_childs);
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.Button.Button","Runtime.Web.Dialog.Dialog","Runtime.Web.Input.Input"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example2";
	},
	getCurrentClassName: function()
	{
		return "Example2.IndexPage";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Example2.IndexPage",
			"name": "Example2.IndexPage",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|2)==2)
		{
			a.push("dialog");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		if (field_name == "dialog") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.IndexPage",
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
Runtime.rtl.defClass(Example2.IndexPage);
window["Example2.IndexPage"] = Example2.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example2.IndexPage;
"use strict;"
if (typeof Example2 == 'undefined') Example2 = {};
Example2.IndexPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Example2.IndexPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Example2.IndexPageModel.prototype.constructor = Example2.IndexPageModel;
Object.assign(Example2.IndexPageModel.prototype,
{
	/**
	 * Return selected item
	 */
	getSelectedItem: function(ctx)
	{
		return (this.items != null) ? (this.items.findItem(ctx, Runtime.lib.equalAttr(ctx, "id", this.selected_id))) : (null);
	},
	/**
	 * Return selected index
	 */
	getSelectedIndex: function(ctx)
	{
		return (this.items != null) ? (this.items.find(ctx, Runtime.lib.equalAttr(ctx, "id", this.selected_id))) : (-1);
	},
	/**
	 * Increment next id
	 */
	incNextId: function(ctx)
	{
		return this.copy(ctx, Runtime.Dict.from({"next_id":this.next_id + 1}));
	},
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.items = new Runtime.Collection(ctx);
		this.dialog = new Runtime.Web.Dialog.DialogModel(ctx);
		this.edit_item = null;
		this.selected_id = -1;
		this.next_id = 0;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example2.IndexPageModel)
		{
			this.items = o.items;
			this.dialog = o.dialog;
			this.edit_item = o.edit_item;
			this.selected_id = o.selected_id;
			this.next_id = o.next_id;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "items")this.items = v;
		else if (k == "dialog")this.dialog = v;
		else if (k == "edit_item")this.edit_item = v;
		else if (k == "selected_id")this.selected_id = v;
		else if (k == "next_id")this.next_id = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "items")return this.items;
		else if (k == "dialog")return this.dialog;
		else if (k == "edit_item")return this.edit_item;
		else if (k == "selected_id")return this.selected_id;
		else if (k == "next_id")return this.next_id;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Example2.IndexPageModel";
	},
});
Object.assign(Example2.IndexPageModel, Runtime.BaseStruct);
Object.assign(Example2.IndexPageModel,
{
	/**
	 * Add new item
	 */
	addItem: function(ctx, model, item)
	{
		return (model.items != null) ? (Runtime.rtl.setAttr(ctx, model, "items", model.items.pushIm(ctx, item))) : (model);
	},
	/**
	 * Set new item
	 */
	setItemByIndex: function(ctx, model, index, item)
	{
		return (model.items != null) ? (Runtime.rtl.setAttr(ctx, model, "items", model.items.setIm(ctx, index, item))) : (model);
	},
	/**
	 * Remove item
	 */
	removeItemByIndex: function(ctx, model, index)
	{
		return (model.items != null) ? (Runtime.rtl.setAttr(ctx, model, "items", model.items.removeIm(ctx, index))) : (model);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example2";
	},
	getCurrentClassName: function()
	{
		return "Example2.IndexPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Example2.IndexPageModel",
			"name": "Example2.IndexPageModel",
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
			a.push("items");
			a.push("dialog");
			a.push("edit_item");
			a.push("selected_id");
			a.push("next_id");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.IndexPageModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "dialog") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.IndexPageModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "edit_item") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.IndexPageModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "selected_id") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.IndexPageModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "next_id") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.IndexPageModel",
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
Runtime.rtl.defClass(Example2.IndexPageModel);
window["Example2.IndexPageModel"] = Example2.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example2.IndexPageModel;
"use strict;"
if (typeof Example2 == 'undefined') Example2 = {};
Example2.Item = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Example2.Item.prototype = Object.create(Runtime.BaseStruct.prototype);
Example2.Item.prototype.constructor = Example2.Item;
Object.assign(Example2.Item.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.id = 0;
		this.name = "";
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example2.Item)
		{
			this.id = o.id;
			this.name = o.name;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "id")this.id = v;
		else if (k == "name")this.name = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "id")return this.id;
		else if (k == "name")return this.name;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Example2.Item";
	},
});
Object.assign(Example2.Item, Runtime.BaseStruct);
Object.assign(Example2.Item,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example2";
	},
	getCurrentClassName: function()
	{
		return "Example2.Item";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Example2.Item",
			"name": "Example2.Item",
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
			a.push("id");
			a.push("name");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		if (field_name == "id") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.Item",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example2.Item",
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
Runtime.rtl.defClass(Example2.Item);
window["Example2.Item"] = Example2.Item;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example2.Item;
"use strict;"
if (typeof Example2 == 'undefined') Example2 = {};
Example2.ModuleDescription = function(ctx)
{
};
Object.assign(Example2.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Example2.ModuleDescription)
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
		return "Example2.ModuleDescription";
	},
});
Object.assign(Example2.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Example2";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.0.1";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":"*"});
	},
	/**
	 * Returns module files load order
	 * @return Collection<string>
	 */
	assets: function(ctx)
	{
		return Runtime.Collection.from([]);
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return Runtime.Collection.from([new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"root-controller","value":"Runtime.Web.RenderController","params":Runtime.Dict.from({"selector":".root","main_controller":true,"window":"RootController"})})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.LAYOUT_CHAIN,"pos":10,"value":"Example2.ModuleDescription::chainLayoutModel"})),new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"Runtime.Web.RouteController"}))]);
	},
	/**
	 * Returns sync loaded files
	 */
	resources: function(ctx)
	{
		return null;
	},
	/**
	 * Layout chain
	 */
	chainLayoutModel: function(ctx, layout)
	{
		if (layout.layout_name == "default")
		{
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "Example2.AppLayout");
		}
		return Runtime.Collection.from([layout]);
	},
	/**
	 * Returns context settings
	 * @return Dict<string>
	 */
	appSettings: function(ctx, env)
	{
		return Runtime.Dict.from({"config":Runtime.Dict.from({}),"secrets":Runtime.Dict.from({}),"providers":Runtime.Dict.from({})});
	},
	/**
	 * Init app
	 */
	appInit: function(ctx, c)
	{
		return c.constructor.init(ctx, c);
	},
	/**
	 * Start app
	 */
	appStart: async function(ctx, c)
	{
		return Promise.resolve(await c.constructor.start(ctx, c));
	},
	/**
	 * Run app
	 */
	appRun: async function(ctx)
	{
		var render = ctx.getDriver(ctx, "root-controller");
		var page_model = new Example2.IndexPageModel(ctx, Runtime.Dict.from({"items":Runtime.Collection.from([new Example2.Item(ctx, Runtime.Dict.from({"id":1,"name":"Item1"})),new Example2.Item(ctx, Runtime.Dict.from({"id":2,"name":"Item2"})),new Example2.Item(ctx, Runtime.Dict.from({"id":3,"name":"Item3"}))]),"next_id":3}));
		var layout = new Runtime.Web.LayoutModel(ctx, Runtime.Dict.from({"title":"Example2","page_class":"Example2.IndexPage","page_model":page_model}));
		render.renderLayout(ctx, layout);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example2";
	},
	getCurrentClassName: function()
	{
		return "Example2.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Example2.ModuleDescription",
			"name": "Example2.ModuleDescription",
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
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"appSettings",
			"appInit",
			"appStart",
			"appRun",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
	__implements__:
	[
		Runtime.Interfaces.ModuleDescriptionInterface,
		Runtime.Interfaces.AssetsInterface,
	],
});
Runtime.rtl.defClass(Example2.ModuleDescription);
window["Example2.ModuleDescription"] = Example2.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example2.ModuleDescription;