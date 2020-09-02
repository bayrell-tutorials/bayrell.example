"use strict;"
if (typeof Example3 == 'undefined') Example3 = {};
Example3.AppLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Example3.AppLayout.prototype = Object.create(Runtime.Web.Component.prototype);
Example3.AppLayout.prototype.constructor = Example3.AppLayout;
Object.assign(Example3.AppLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Example3.AppLayout)
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
		return "Example3.AppLayout";
	},
});
Object.assign(Example3.AppLayout, Runtime.Web.Component);
Object.assign(Example3.AppLayout,
{
	css: function(ctx, vars)
	{
		return "\n*{box-sizing: border-box;}body{margin:0;padding:0;}\na { text-decoration: inherit; color: #0000d0; cursor: pointer; }\na:hover, a:visited:hover { text-decoration: underline; color: red; }\na:visited { text-decoration: inherit; color: #0000d0; }\na.link { text-decoration: none; color: #0000d0; cursor: pointer; }\na.link:hover, a.link:visited:hover { text-decoration: underline; color: red; }\na.link:visited { text-decoration: none; color: #0000d0; }\nbody, html{\n\tbackground-color: #F2F2F2;\n\tfont-family: 'Ubuntu', sans-serif;\n\tfont-size: 14px;\n\twidth: 100%;\n\theight: 100vh;\n\tpadding: 0;\n\tmargin: 0;\n}\n.section.h-4b42{\n\theight: 100vh;\n}\n.container.h-4b42{\n\tdisplay: table;\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.container-in.h-4b42{\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\ttext-align: center;\n\twidth: 100%;\n\theight: 100vh;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": {"@bind":["Example3.AppLayout","page_model"],"@key":"page"}, "layout": layout});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example3";
	},
	getCurrentClassName: function()
	{
		return "Example3.AppLayout";
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
			"class_name": "Example3.AppLayout",
			"name": "Example3.AppLayout",
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
Runtime.rtl.defClass(Example3.AppLayout);
window["Example3.AppLayout"] = Example3.AppLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example3.AppLayout;
"use strict;"
if (typeof Example3 == 'undefined') Example3 = {};
Example3.Box = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Example3.Box.prototype = Object.create(Runtime.Web.Component.prototype);
Example3.Box.prototype.constructor = Example3.Box;
Object.assign(Example3.Box.prototype,
{
	/**
 * Created component
 */
	onCreated: function(ctx)
	{
		this.driver.registerGlobalListener(ctx, "Runtime.Web.Events.MouseMoveEvent", this.getObjectName(ctx), "onMouseMove");
		this.driver.registerGlobalListener(ctx, "Runtime.Web.Events.MouseUpEvent", this.getObjectName(ctx), "onMouseUp");
	},
	/**
 * On mouse move
 */
	onMouseDown: function(ctx, msg)
	{
		var e = msg.data;
		msg.cancel(ctx);
		var shift_x = e.offsetX;
		var shift_y = e.offsetY;
		var rect = Runtime.Web.RenderDriver.getRect(ctx, e.target);
		this.updateModel(ctx, "copy", Runtime.Dict.from({"move":true,"shift_x":shift_x,"shift_y":shift_y}));
	},
	/**
 * On mouse move
 */
	onMouseUp: function(ctx, msg)
	{
		this.updateModel(ctx, "copy", Runtime.Dict.from({"move":false}));
	},
	/**
 * On mouse move
 */
	onMouseMove: function(ctx, msg)
	{
		var e = msg.data;
		var model = this.model(ctx);
		if (model.move)
		{
			this.updateModel(ctx, "copy", Runtime.Dict.from({"x":e.pageX - model.shift_x,"y":e.pageY - model.shift_y}));
		}
	},
	_init: function(ctx)
	{
		this.box = null;
		Runtime.Web.Component.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example3.Box)
		{
			this.box = o.box;
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "box")this.box = v;
		else Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "box")return this.box;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Example3.Box";
	},
});
Object.assign(Example3.Box, Runtime.Web.Component);
Object.assign(Example3.Box,
{
	css: function(ctx, vars)
	{
		return "\n.box.h-0a4b{\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"style":(Runtime.Dict.from({"top":model.y + Runtime.rtl.toStr("px"),"left":model.x + Runtime.rtl.toStr("px"),"background-color":model.color,"cursor":(model.move) ? ("grabbing") : ("default")})),"@ref":["Example3.Box","box"],"@event:Runtime.Web.Events.MouseDownEvent":["Example3.Box","onMouseDown"],"class":["box", this.getCssHash()].join(" "),"@elem_name":"box"}});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example3";
	},
	getCurrentClassName: function()
	{
		return "Example3.Box";
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
			"class_name": "Example3.Box",
			"name": "Example3.Box",
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
			a.push("box");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "box") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.Box",
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
Runtime.rtl.defClass(Example3.Box);
window["Example3.Box"] = Example3.Box;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example3.Box;
"use strict;"
if (typeof Example3 == 'undefined') Example3 = {};
Example3.BoxModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Example3.BoxModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Example3.BoxModel.prototype.constructor = Example3.BoxModel;
Object.assign(Example3.BoxModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.move = false;
		this.color = "white";
		this.x = 0;
		this.y = 0;
		this.shift_x = 0;
		this.shift_y = 0;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example3.BoxModel)
		{
			this.move = o.move;
			this.color = o.color;
			this.x = o.x;
			this.y = o.y;
			this.shift_x = o.shift_x;
			this.shift_y = o.shift_y;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "move")this.move = v;
		else if (k == "color")this.color = v;
		else if (k == "x")this.x = v;
		else if (k == "y")this.y = v;
		else if (k == "shift_x")this.shift_x = v;
		else if (k == "shift_y")this.shift_y = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "move")return this.move;
		else if (k == "color")return this.color;
		else if (k == "x")return this.x;
		else if (k == "y")return this.y;
		else if (k == "shift_x")return this.shift_x;
		else if (k == "shift_y")return this.shift_y;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Example3.BoxModel";
	},
});
Object.assign(Example3.BoxModel, Runtime.BaseStruct);
Object.assign(Example3.BoxModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example3";
	},
	getCurrentClassName: function()
	{
		return "Example3.BoxModel";
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
			"class_name": "Example3.BoxModel",
			"name": "Example3.BoxModel",
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
			a.push("move");
			a.push("color");
			a.push("x");
			a.push("y");
			a.push("shift_x");
			a.push("shift_y");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "move") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.BoxModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "color") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.BoxModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "x") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.BoxModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "y") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.BoxModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "shift_x") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.BoxModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "shift_y") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.BoxModel",
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
Runtime.rtl.defClass(Example3.BoxModel);
window["Example3.BoxModel"] = Example3.BoxModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example3.BoxModel;
"use strict;"
if (typeof Example3 == 'undefined') Example3 = {};
Example3.IndexPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Example3.IndexPage.prototype = Object.create(Runtime.Web.Component.prototype);
Example3.IndexPage.prototype.constructor = Example3.IndexPage;
Object.assign(Example3.IndexPage.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Example3.IndexPage)
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
		return "Example3.IndexPage";
	},
});
Object.assign(Example3.IndexPage, Runtime.Web.Component);
Object.assign(Example3.IndexPage,
{
	css: function(ctx, vars)
	{
		return "\n.app.h-4645{\n\tposition: relative;\n\twidth: 100%;\n\theight: 100hv;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.app' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["app", this.getCssHash()].join(" "),"@elem_name":"app"}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Example3.Box","attrs": {"@bind":["Example3.IndexPage","box1"]}, "layout": layout});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Example3.Box","attrs": {"@bind":["Example3.IndexPage","box2"]}, "layout": layout});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Example3.Box"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example3";
	},
	getCurrentClassName: function()
	{
		return "Example3.IndexPage";
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
			"class_name": "Example3.IndexPage",
			"name": "Example3.IndexPage",
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
Runtime.rtl.defClass(Example3.IndexPage);
window["Example3.IndexPage"] = Example3.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example3.IndexPage;
"use strict;"
if (typeof Example3 == 'undefined') Example3 = {};
Example3.IndexPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Example3.IndexPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Example3.IndexPageModel.prototype.constructor = Example3.IndexPageModel;
Object.assign(Example3.IndexPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.box1 = new Example3.BoxModel(ctx, Runtime.Dict.from({"x":50,"y":10,"color":"rebeccapurple"}));
		this.box2 = new Example3.BoxModel(ctx, Runtime.Dict.from({"x":250,"y":10,"color":"darkviolet"}));
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example3.IndexPageModel)
		{
			this.box1 = o.box1;
			this.box2 = o.box2;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "box1")this.box1 = v;
		else if (k == "box2")this.box2 = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "box1")return this.box1;
		else if (k == "box2")return this.box2;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Example3.IndexPageModel";
	},
});
Object.assign(Example3.IndexPageModel, Runtime.BaseStruct);
Object.assign(Example3.IndexPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example3";
	},
	getCurrentClassName: function()
	{
		return "Example3.IndexPageModel";
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
			"class_name": "Example3.IndexPageModel",
			"name": "Example3.IndexPageModel",
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
			a.push("box1");
			a.push("box2");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "box1") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.IndexPageModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "box2") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.IndexPageModel",
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
Runtime.rtl.defClass(Example3.IndexPageModel);
window["Example3.IndexPageModel"] = Example3.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example3.IndexPageModel;
"use strict;"
if (typeof Example3 == 'undefined') Example3 = {};
Example3.Item = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Example3.Item.prototype = Object.create(Runtime.BaseStruct.prototype);
Example3.Item.prototype.constructor = Example3.Item;
Object.assign(Example3.Item.prototype,
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
		if (o instanceof Example3.Item)
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
		return "Example3.Item";
	},
});
Object.assign(Example3.Item, Runtime.BaseStruct);
Object.assign(Example3.Item,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example3";
	},
	getCurrentClassName: function()
	{
		return "Example3.Item";
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
			"class_name": "Example3.Item",
			"name": "Example3.Item",
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
			"class_name": "Example3.Item",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example3.Item",
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
Runtime.rtl.defClass(Example3.Item);
window["Example3.Item"] = Example3.Item;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example3.Item;
"use strict;"
if (typeof Example3 == 'undefined') Example3 = {};
Example3.ModuleDescription = function(ctx)
{
};
Object.assign(Example3.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Example3.ModuleDescription)
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
		return "Example3.ModuleDescription";
	},
});
Object.assign(Example3.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Example3";
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
		return Runtime.Collection.from([new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"root-controller","value":"Runtime.Web.RenderController","params":Runtime.Dict.from({"selector":".root","main_controller":true,"window":"RootController"})})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.LAYOUT_CHAIN,"pos":10,"value":"Example3.ModuleDescription::chainLayoutModel"})),new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"Runtime.Web.RouteController"}))]);
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
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "Example3.AppLayout");
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
		var page_model = new Example3.IndexPageModel(ctx, Runtime.Dict.from({}));
		var layout = new Runtime.Web.LayoutModel(ctx, Runtime.Dict.from({"title":"Example3","page_class":"Example3.IndexPage","page_model":page_model}));
		render.renderLayout(ctx, layout);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example3";
	},
	getCurrentClassName: function()
	{
		return "Example3.ModuleDescription";
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
			"class_name": "Example3.ModuleDescription",
			"name": "Example3.ModuleDescription",
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
});
Runtime.rtl.defClass(Example3.ModuleDescription);
window["Example3.ModuleDescription"] = Example3.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example3.ModuleDescription;