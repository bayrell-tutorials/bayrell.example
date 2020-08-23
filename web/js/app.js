"use strict;"
if (typeof Example1 == 'undefined') Example1 = {};
Example1.AppLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Example1.AppLayout.prototype = Object.create(Runtime.Web.Component.prototype);
Example1.AppLayout.prototype.constructor = Example1.AppLayout;
Object.assign(Example1.AppLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Example1.AppLayout)
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
		return "Example1.AppLayout";
	},
});
Object.assign(Example1.AppLayout, Runtime.Web.Component);
Object.assign(Example1.AppLayout,
{
	css: function(ctx, vars)
	{
		return "\n*{box-sizing: border-box;}body{margin:0;padding:0;}\na { text-decoration: inherit; color: #0000d0; cursor: pointer; }\na:hover, a:visited:hover { text-decoration: underline; color: red; }\na:visited { text-decoration: inherit; color: #0000d0; }\na.link { text-decoration: none; color: #0000d0; cursor: pointer; }\na.link:hover, a.link:visited:hover { text-decoration: underline; color: red; }\na.link:visited { text-decoration: none; color: #0000d0; }\nbody, html{\n\tbackground-color: #F2F2F2;\n\tfont-family: 'Ubuntu', sans-serif;\n\tfont-size: 14px;\n\twidth: 100%;\n\theight: 100vh;\n\tpadding: 0;\n\tmargin: 0;\n}\n.container-e311{\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			var class_name = model.page_class;
			
			/* Element 'section' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "section","attrs": {"class":this.getCssName(ctx, "section"),"@key":"section-1"}}, 1);
			
			/* Element 'div' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":this.getCssName(ctx, "container"),"@key":"container-0"}}, 0);
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": class_name,"attrs": {"@bind":["Example1.AppLayout","page_model"],"@key":"page"}, "layout": layout}, 0);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			RenderDriver.p(__control, __control_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example1";
	},
	getCurrentClassName: function()
	{
		return "Example1.AppLayout";
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
			"class_name": "Example1.AppLayout",
			"name": "Example1.AppLayout",
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
Runtime.rtl.defClass(Example1.AppLayout);
window["Example1.AppLayout"] = Example1.AppLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example1.AppLayout;
"use strict;"
if (typeof Example1 == 'undefined') Example1 = {};
Example1.IndexPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Example1.IndexPage.prototype = Object.create(Runtime.Web.Component.prototype);
Example1.IndexPage.prototype.constructor = Example1.IndexPage;
Object.assign(Example1.IndexPage.prototype,
{
	/**
 * Mouse click event
 */
	onMouseClick: async function(ctx, msg)
	{
		var model = this.model(ctx);
		this.commit(ctx, "update", Runtime.Collection.from(["item","content"]), Runtime.rtl.attr(ctx, model, ["item", "content"]) + Runtime.rtl.toStr("!"));
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example1.IndexPage)
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
		return "Example1.IndexPage";
	},
});
Object.assign(Example1.IndexPage, Runtime.Web.Component);
Object.assign(Example1.IndexPage,
{
	css: function(ctx, vars)
	{
		return "\n.content-e311{\n\ttext-align: center;\n\tpadding-top: 50px;\n}\n.label-e311{\n\tpadding-bottom: 5px;\n}\n.input-e311{\n\tpadding: 5px 10px;\n}\n.button-e311{\n\tcursor: pointer;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":this.getCssName(ctx, "content"),"@key":"content"}}, 0);
			
			/* Element 'div' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":this.getCssName(ctx, "label"),"@key":"label-0"}}, 0);
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": Runtime.rtl.attr(ctx, model, ["item", "content"])}, 0);
			RenderDriver.p(__v1, __v1_childs);
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "input","attrs": {"@bind":["Example1.IndexPage",Runtime.Collection.from(["item","content"])],"class":this.getCssName(ctx, "input"),"@key":"input-1"}}, 1, false);
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": null}, 2, false);
			
			/* Element 'button' */
			var __v2; var __v2_childs = [];
			[__v2, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Example1.IndexPage","onMouseClick"],"class":this.getCssName(ctx, "button"),"@key":"button-3"}}, 3);
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": "Click Me!"}, 0);
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v0, __v0_childs);
			RenderDriver.p(__control, __control_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example1";
	},
	getCurrentClassName: function()
	{
		return "Example1.IndexPage";
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
			"class_name": "Example1.IndexPage",
			"name": "Example1.IndexPage",
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
Runtime.rtl.defClass(Example1.IndexPage);
window["Example1.IndexPage"] = Example1.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example1.IndexPage;
"use strict;"
if (typeof Example1 == 'undefined') Example1 = {};
Example1.IndexPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Example1.IndexPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Example1.IndexPageModel.prototype.constructor = Example1.IndexPageModel;
Object.assign(Example1.IndexPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.item = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Example1.IndexPageModel)
		{
			this.item = o.item;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "item")this.item = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "item")return this.item;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Example1.IndexPageModel";
	},
});
Object.assign(Example1.IndexPageModel, Runtime.BaseStruct);
Object.assign(Example1.IndexPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example1";
	},
	getCurrentClassName: function()
	{
		return "Example1.IndexPageModel";
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
			"class_name": "Example1.IndexPageModel",
			"name": "Example1.IndexPageModel",
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
			a.push("item");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		if (field_name == "item") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Example1.IndexPageModel",
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
Runtime.rtl.defClass(Example1.IndexPageModel);
window["Example1.IndexPageModel"] = Example1.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example1.IndexPageModel;
"use strict;"
if (typeof Example1 == 'undefined') Example1 = {};
Example1.ModuleDescription = function(ctx)
{
};
Object.assign(Example1.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Example1.ModuleDescription)
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
		return "Example1.ModuleDescription";
	},
});
Object.assign(Example1.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Example1";
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
		return Runtime.Collection.from([new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"root-controller","value":"Runtime.Web.RenderController","params":Runtime.Dict.from({"selector":".root","main_controller":true,"window":"RootController"})})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.LAYOUT_CHAIN,"pos":10,"value":"Example1.ModuleDescription::chainLayoutModel"})),new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"Runtime.Web.RouteController"}))]);
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
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "Example1.AppLayout");
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
		var page_model = new Example1.IndexPageModel(ctx, Runtime.Dict.from({"item":Runtime.Dict.from({"content":"Hello world"})}));
		var layout = new Runtime.Web.LayoutModel(ctx, Runtime.Dict.from({"title":"Example1","page_class":"Example1.IndexPage","page_model":page_model}));
		render.renderLayout(ctx, layout);
		/* RenderDriver.renderPage("/"); */
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Example1";
	},
	getCurrentClassName: function()
	{
		return "Example1.ModuleDescription";
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
			"class_name": "Example1.ModuleDescription",
			"name": "Example1.ModuleDescription",
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
Runtime.rtl.defClass(Example1.ModuleDescription);
window["Example1.ModuleDescription"] = Example1.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Example1.ModuleDescription;