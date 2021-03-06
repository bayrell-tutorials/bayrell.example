"use strict;"
if (typeof App == 'undefined') App = {};
App.AppLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.AppLayout.prototype = Object.create(Runtime.Web.Component.prototype);
App.AppLayout.prototype.constructor = App.AppLayout;
Object.assign(App.AppLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.AppLayout)
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
		return "App.AppLayout";
	},
});
Object.assign(App.AppLayout, Runtime.Web.Component);
Object.assign(App.AppLayout,
{
	css: function(ctx, vars)
	{
		return "\n*{box-sizing: border-box;}body{margin:0;padding:0;}\na { text-decoration: inherit; color: #0000d0; cursor: pointer; }\na:hover, a:visited:hover { text-decoration: underline; color: red; }\na:visited { text-decoration: inherit; color: #0000d0; }\na.link { text-decoration: none; color: #0000d0; cursor: pointer; }\na.link:hover, a.link:visited:hover { text-decoration: underline; color: red; }\na.link:visited { text-decoration: none; color: #0000d0; }\nbody, html{\n\tfont-family: 'Ubuntu', sans-serif;\n\tfont-size: 14px;\n\twidth: 100%;\n\theight: 100vh;\n\tpadding: 0;\n\tmargin: 0;\n}\ntd{\n\tfont-family: 'Ubuntu', sans-serif;\n\tfont-size: 14px;\n}\nspan.lpad5{\n\tdisplay: inline-block;\n\tpadding-right: 5px;\n}\n#root{\n\tdisplay: flex;\n\tflex-direction: row;\n}\n.menu.h-70d2{\n\twidth: 100px;\n}\n.content.h-70d2{\n\twidth: calc(100% - 100px);\n}\n.menu.h-70d2, .content.h-70d2{\n\tpadding: 10px;\n}\n.menu_title.h-70d2{\n\tfont-weight: bold;\n\tpadding-bottom: 10px;\n}\n.menu_items.h-70d2{\n\tpadding-bottom: 10px;\n\tpadding-left: 10px;\n}\n.menu_item.h-70d2{\n\tpadding-bottom: 10px;\n}\n.menu_item.h-70d2:last-child{\n\tpadding-bottom: 0px;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			var routes = Runtime.Collection.from([Runtime.Dict.from({"url":"/","content":"Index"}),Runtime.Dict.from({"url":"/route1/","content":"Route 1"}),Runtime.Dict.from({"url":"/route2/","content":"Route 2"}),Runtime.Dict.from({"url":"/route3/","content":"Route 3"}),Runtime.Dict.from({"url":"/test/1/name1/","content":"Test 1"}),Runtime.Dict.from({"url":"/users/","content":"Users"})]);
			
			var urls = Runtime.Collection.from([Runtime.Dict.from({"url":"/example1.html","content":"Example 1"}),Runtime.Dict.from({"url":"/example2.html","content":"Example 2"}),Runtime.Dict.from({"url":"/example3.html","content":"Example 3"})]);
			
			/* Element 'div.menu' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["menu", this.getCssHash(ctx)].join(" "),"@elem_name":"menu"}});
			
			/* Element 'div.menu_title' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["menu_title", this.getCssHash(ctx)].join(" "),"@elem_name":"menu_title"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "Routes:"});
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.menu_items' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["menu_items", this.getCssHash(ctx)].join(" "),"@elem_name":"menu_items"}});
			
			for (var i = 0;i < routes.count(ctx);i++)
			{
				var item = Runtime.rtl.get(ctx, routes, i);
				
				/* Element 'div.menu_item' */
				var __v2; var __v2_childs = [];
				[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["menu_item", this.getCssHash(ctx)].join(" "),"@elem_name":"menu_item"}});
				
				/* Element 'a.link' */
				var __v3; var __v3_childs = [];
				[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "a","attrs": {"href":Runtime.rtl.get(ctx, item, "url"),"class":["link", this.getCssHash(ctx)].join(" "),"@elem_name":"link"}});
				
				/* Text */
				[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": Runtime.rtl.get(ctx, item, "content")});
				RenderDriver.p(__v3, __v3_childs);
				RenderDriver.p(__v2, __v2_childs);
			}
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.menu_title' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["menu_title", this.getCssHash(ctx)].join(" "),"@elem_name":"menu_title"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "Projects:"});
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.menu_items' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["menu_items", this.getCssHash(ctx)].join(" "),"@elem_name":"menu_items"}});
			
			for (var i = 0;i < urls.count(ctx);i++)
			{
				var item = Runtime.rtl.get(ctx, urls, i);
				
				/* Element 'div.menu_item' */
				var __v2; var __v2_childs = [];
				[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["menu_item", this.getCssHash(ctx)].join(" "),"@elem_name":"menu_item"}});
				
				/* Element 'a.link' */
				var __v3; var __v3_childs = [];
				[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "a","attrs": {"href":Runtime.rtl.get(ctx, item, "url"),"target":"_self","class":["link", this.getCssHash(ctx)].join(" "),"@elem_name":"link"}});
				
				/* Text */
				[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": Runtime.rtl.get(ctx, item, "content")});
				RenderDriver.p(__v3, __v3_childs);
				RenderDriver.p(__v2, __v2_childs);
			}
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash(ctx)].join(" "),"@elem_name":"content"}});
			
			if (class_name != "")
			{
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": class_name,"attrs": {"@bind":["App.AppLayout","page_model"],"@key":"page"}, "layout": layout});
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.AppLayout";
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
			"class_name": "App.AppLayout",
			"name": "App.AppLayout",
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
Runtime.rtl.defClass(App.AppLayout);
window["App.AppLayout"] = App.AppLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.AppLayout;
"use strict;"
if (typeof App == 'undefined') App = {};
App.IndexPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.IndexPage.prototype = Object.create(Runtime.Web.Component.prototype);
App.IndexPage.prototype.constructor = App.IndexPage;
Object.assign(App.IndexPage.prototype,
{
	/**
 * Mouse click event
 */
	onPingClick: async function(ctx, msg)
	{
		var answer = await this.remoteBusCall(ctx, Runtime.Dict.from({"object_name":"App.Test","method_name":"ping"}));
		console.log(answer);
		this.updateModel(ctx, "setAttr", "api_response", answer.response);
	},
	/**
 * Mouse click event
 */
	onTimeClick: async function(ctx, msg)
	{
		var answer = await this.remoteBusCall(ctx, Runtime.Dict.from({"object_name":"App.Test","interface_name":"test","method_name":"time"}));
		console.log(answer);
		this.updateModel(ctx, "setAttr", "api_response", answer.response);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof App.IndexPage)
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
		return "App.IndexPage";
	},
});
Object.assign(App.IndexPage, Runtime.Web.Component);
Object.assign(App.IndexPage,
{
	css: function(ctx, vars)
	{
		return "\n.button.h-74d5{\n\tcursor: pointer;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash(ctx)].join(" "),"@key":"content","@elem_name":"content"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": "Index page"});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": {}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": {}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": {}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": "Test api:"});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": {}});
			
			/* Element 'button.button' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["App.IndexPage","onPingClick"],"class":["button", this.getCssHash(ctx)].join(" "),"@elem_name":"button"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "Ping"});
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'button.button' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["App.IndexPage","onTimeClick"],"class":["button", this.getCssHash(ctx)].join(" "),"@elem_name":"button"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "Time"});
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.api_response' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["api_response", this.getCssHash(ctx)].join(" "),"@elem_name":"api_response"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": model.api_response});
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.IndexPage";
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
			"class_name": "App.IndexPage",
			"name": "App.IndexPage",
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
Runtime.rtl.defClass(App.IndexPage);
window["App.IndexPage"] = App.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.IndexPage;
"use strict;"
if (typeof App == 'undefined') App = {};
App.IndexPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
App.IndexPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
App.IndexPageModel.prototype.constructor = App.IndexPageModel;
Object.assign(App.IndexPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.api_response = "";
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof App.IndexPageModel)
		{
			this.api_response = o.api_response;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "api_response")this.api_response = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "api_response")return this.api_response;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "App.IndexPageModel";
	},
});
Object.assign(App.IndexPageModel, Runtime.BaseStruct);
Object.assign(App.IndexPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.IndexPageModel";
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
			"class_name": "App.IndexPageModel",
			"name": "App.IndexPageModel",
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
			a.push("api_response");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "api_response") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "App.IndexPageModel",
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
Runtime.rtl.defClass(App.IndexPageModel);
window["App.IndexPageModel"] = App.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.IndexPageModel;
"use strict;"
if (typeof App == 'undefined') App = {};
App.Page404 = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.Page404.prototype = Object.create(Runtime.Web.Component.prototype);
App.Page404.prototype.constructor = App.Page404;
Object.assign(App.Page404.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.Page404)
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
		return "App.Page404";
	},
});
Object.assign(App.Page404, Runtime.Web.Component);
Object.assign(App.Page404,
{
	css: function(ctx, vars)
	{
		return "\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Page not found"});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.Page404";
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
			"class_name": "App.Page404",
			"name": "App.Page404",
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
Runtime.rtl.defClass(App.Page404);
window["App.Page404"] = App.Page404;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Page404;
"use strict;"
if (typeof App == 'undefined') App = {};
App.Route1 = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.Route1.prototype = Object.create(Runtime.Web.Component.prototype);
App.Route1.prototype.constructor = App.Route1;
Object.assign(App.Route1.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.Route1)
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
		return "App.Route1";
	},
});
Object.assign(App.Route1, Runtime.Web.Component);
Object.assign(App.Route1,
{
	css: function(ctx, vars)
	{
		return "\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Route1"});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.Route1";
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
			"class_name": "App.Route1",
			"name": "App.Route1",
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
Runtime.rtl.defClass(App.Route1);
window["App.Route1"] = App.Route1;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Route1;
"use strict;"
if (typeof App == 'undefined') App = {};
App.Route2 = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.Route2.prototype = Object.create(Runtime.Web.Component.prototype);
App.Route2.prototype.constructor = App.Route2;
Object.assign(App.Route2.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.Route2)
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
		return "App.Route2";
	},
});
Object.assign(App.Route2, Runtime.Web.Component);
Object.assign(App.Route2,
{
	css: function(ctx, vars)
	{
		return "\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Route2"});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.Route2";
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
			"class_name": "App.Route2",
			"name": "App.Route2",
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
Runtime.rtl.defClass(App.Route2);
window["App.Route2"] = App.Route2;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Route2;
"use strict;"
if (typeof App == 'undefined') App = {};
App.Route3 = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.Route3.prototype = Object.create(Runtime.Web.Component.prototype);
App.Route3.prototype.constructor = App.Route3;
Object.assign(App.Route3.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.Route3)
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
		return "App.Route3";
	},
});
Object.assign(App.Route3, Runtime.Web.Component);
Object.assign(App.Route3,
{
	css: function(ctx, vars)
	{
		return "\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Route3"});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.Route3";
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
			"class_name": "App.Route3",
			"name": "App.Route3",
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
Runtime.rtl.defClass(App.Route3);
window["App.Route3"] = App.Route3;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Route3;
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
if (typeof App == 'undefined') App = {};
App.Routes = function(ctx)
{
};
Object.assign(App.Routes.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.Routes)
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
		return "App.Routes";
	},
});
Object.assign(App.Routes,
{
	/**
	 * Layout chain
	 */
	layoutChain: function(ctx, layout)
	{
		if (layout.layout_name == "default")
		{
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "App.AppLayout");
		}
		return Runtime.Collection.from([layout]);
	},
	/**
	 * Render chain. Set default pattern
	 */
	renderChainPatternDefault: function(ctx, container)
	{
		if (container.pattern_name == "default" && container.pattern_class == "" || container.pattern_class == "")
		{
			container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["pattern_class"]), "App.Pattern");
		}
		return Runtime.Collection.from([container]);
	},
	/**
	 * Render chain. Route after
	 */
	renderChainRouteAfter: function(ctx, container)
	{
		/* Change title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), container.layout.title + Runtime.rtl.toStr(" | Test app"));
		return Runtime.Collection.from([container]);
	},
	/**
	 * Route Action
	 * @return RenderContainer
	 */
	IndexPage: async function(ctx, container)
	{
		var page_model = new App.IndexPageModel(ctx, Runtime.Dict.from({}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Index page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "App.IndexPage");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/**
	 * Route Action
	 * @return RenderContainer
	 */
	Route1Page: async function(ctx, container)
	{
		var page_model = new App.IndexPageModel(ctx, Runtime.Dict.from({}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Route1");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "App.Route1");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/**
	 * Route Action
	 * @return RenderContainer
	 */
	Route2Page: async function(ctx, container)
	{
		var page_model = new App.IndexPageModel(ctx, Runtime.Dict.from({}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Route2");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "App.Route2");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/**
	 * Route Action
	 * @return RenderContainer
	 */
	Route3Page: async function(ctx, container)
	{
		var page_model = new App.IndexPageModel(ctx, Runtime.Dict.from({}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Route3");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "App.Route3");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/**
	 * Route Action
	 * @return RenderContainer
	 */
	TestPage: async function(ctx, container)
	{
		var page_model = new App.IndexPageModel(ctx, Runtime.Dict.from({}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Test page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "App.TestPage");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/**
	 * Route Action
	 * @return RenderContainer
	 */
	UsersPage: async function(ctx, container)
	{
		/* Create model */
		var page_model = new App.UsersPageModel(ctx, Runtime.Dict.from({"crud":new Runtime.Web.CRUD.CrudPageModel(ctx, Runtime.Dict.from({}))}));
		/* Remote call */
		var search_params = Runtime.Web.RenderDriver.getCrudSearchParams(ctx, container.request);
		var answer = await Runtime.Web.RenderDriver.remoteBusCall(ctx, Runtime.Dict.from({"object_name":"App.Users","interface_name":"core.crud","method_name":"search","data":search_params}), container);
		/* Answer */
		if (answer.isSuccess(ctx))
		{
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["crud", "table", "rows"]), Runtime.rtl.get(ctx, answer.response, "items"));
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["crud", "table", "page"]), Runtime.rtl.get(ctx, answer.response, "page"));
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["crud", "table", "pages"]), Runtime.rtl.get(ctx, answer.response, "pages"));
		}
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Users page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "App.UsersPage");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/**
	 * Render chain
	 * Page not found
	 * @return RenderContainer
	 */
	Page404: async function(ctx, container)
	{
		if (container == null || container.isResponseExists(ctx) || container.isPageExists(ctx))
		{
			return Promise.resolve(Runtime.Collection.from([container]));
		}
		var page_model = new App.IndexPageModel(ctx, Runtime.Dict.from({}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Page not found");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "App.Page404");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		/* Set 404 code */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["new_http_code"]), 404);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.Routes";
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
			"class_name": "App.Routes",
			"name": "App.Routes",
			"annotations": Collection.from([
				new Runtime.Web.RouteList(ctx, Runtime.Dict.from({})),
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
			"IndexPage",
			"Route1Page",
			"Route2Page",
			"Route3Page",
			"TestPage",
			"UsersPage",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "IndexPage")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "App.Routes",
				"name": "IndexPage",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/","name":"site:index"})),
				]),
			});
		}
		if (field_name == "Route1Page")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "App.Routes",
				"name": "Route1Page",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/route1/","name":"site:route1"})),
				]),
			});
		}
		if (field_name == "Route2Page")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "App.Routes",
				"name": "Route2Page",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/route2/","name":"site:route2"})),
				]),
			});
		}
		if (field_name == "Route3Page")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "App.Routes",
				"name": "Route3Page",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/route3/","name":"site:route3"})),
				]),
			});
		}
		if (field_name == "TestPage")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "App.Routes",
				"name": "TestPage",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/test/{id}/{name}/","name":"site:test_page"})),
				]),
			});
		}
		if (field_name == "UsersPage")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "App.Routes",
				"name": "UsersPage",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/users/","name":"site:users"})),
				]),
			});
		}
		return null;
	},
});
Runtime.rtl.defClass(App.Routes);
window["App.Routes"] = App.Routes;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Routes;
"use strict;"
if (typeof App == 'undefined') App = {};
App.TestPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.TestPage.prototype = Object.create(Runtime.Web.Component.prototype);
App.TestPage.prototype.constructor = App.TestPage;
Object.assign(App.TestPage.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.TestPage)
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
		return "App.TestPage";
	},
});
Object.assign(App.TestPage, Runtime.Web.Component);
Object.assign(App.TestPage,
{
	css: function(ctx, vars)
	{
		return "\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "TestPage. ID="});
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, layout.route_params, "id")});
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ". Name="});
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, layout.route_params, "name")});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.TestPage";
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
			"class_name": "App.TestPage",
			"name": "App.TestPage",
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
Runtime.rtl.defClass(App.TestPage);
window["App.TestPage"] = App.TestPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.TestPage;
"use strict;"
if (typeof App == 'undefined') App = {};
App.UsersPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.UsersPage.prototype = Object.create(Runtime.Web.Component.prototype);
App.UsersPage.prototype.constructor = App.UsersPage;
Object.assign(App.UsersPage.prototype,
{
	/**
 * Update component
 */
	updateComponent: function(ctx, created)
	{
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof App.UsersPage)
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
		return "App.UsersPage";
	},
});
Object.assign(App.UsersPage, Runtime.Web.Component);
Object.assign(App.UsersPage,
{
	css: function(ctx, vars)
	{
		return "\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var crud_settings = Runtime.Dict.from({"name":Runtime.Dict.from({"api_name":"name","label":"Name","class_name":"Runtime.Web.Input.Input","class_name_table":"Runtime.Web.Input.Label"}),"type":Runtime.Dict.from({"api_name":"type","label":"Type","class_name":"Runtime.Web.Input.Select","class_name_table":"Runtime.Web.Input.SelectText","class_settings":Runtime.Dict.from({"select_value":true,"options":Runtime.Collection.from([Runtime.Dict.from({"id":1,"value":"Type1"}),Runtime.Dict.from({"id":2,"value":"Type2"}),Runtime.Dict.from({"id":3,"value":"Type3"})])})})});
			
			var form_fields = Runtime.Collection.from(["name","type"]);
			
			var table_fields = Runtime.Collection.from(["number","name","type","edit"]);
			
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.CRUD.CrudPage","attrs": {"@name":["App.UsersPage","crud"],"object_name":"App.Users","crud_settings":crud_settings,"form_fields":form_fields,"table_fields":table_fields}, "layout": layout});
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.CRUD.CrudPage","Runtime.Web.Input.Input","Runtime.Web.Input.Label","Runtime.Web.Input.Select","Runtime.Web.Input.SelectText"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.UsersPage";
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
			"class_name": "App.UsersPage",
			"name": "App.UsersPage",
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
Runtime.rtl.defClass(App.UsersPage);
window["App.UsersPage"] = App.UsersPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.UsersPage;
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
if (typeof App == 'undefined') App = {};
App.UsersPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
App.UsersPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
App.UsersPageModel.prototype.constructor = App.UsersPageModel;
Object.assign(App.UsersPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.crud = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof App.UsersPageModel)
		{
			this.crud = o.crud;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "crud")this.crud = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "crud")return this.crud;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "App.UsersPageModel";
	},
});
Object.assign(App.UsersPageModel, Runtime.BaseStruct);
Object.assign(App.UsersPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.UsersPageModel";
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
			"class_name": "App.UsersPageModel",
			"name": "App.UsersPageModel",
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
			a.push("crud");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "crud") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "App.UsersPageModel",
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
Runtime.rtl.defClass(App.UsersPageModel);
window["App.UsersPageModel"] = App.UsersPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.UsersPageModel;
"use strict;"
if (typeof App == 'undefined') App = {};
App.ModuleDescription = function(ctx)
{
};
Object.assign(App.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.ModuleDescription)
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
		return "App.ModuleDescription";
	},
});
Object.assign(App.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "App";
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
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return Runtime.Collection.from([new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"root-controller","value":"Runtime.Web.RenderController","params":Runtime.Dict.from({"selector":"#root","main_controller":true,"window":"RootController"})})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.LAYOUT_CHAIN,"pos":10,"value":"App.Routes::layoutChain"})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.RENDER_CHAIN,"value":"App.Routes::Page404","pos":Runtime.Web.RenderDriver.RENDER_CHAIN_CALL_PAGE_NOT_FOUND,"is_async":true})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.RENDER_CHAIN,"value":"App.Routes::renderChainRouteAfter","pos":Runtime.Web.RenderDriver.RENDER_CHAIN_CALL_ROUTE_AFTER,"is_async":true})),new Runtime.Core.Entity(ctx, Runtime.Dict.from({"value":"App.Routes"}))]);
	},
	/**
	 * Returns context settings
	 * @return Dict<string>
	 */
	appSettings: function(ctx, env)
	{
		return Runtime.Dict.from({"config":Runtime.Dict.from({"Runtime.Web":Runtime.Dict.from({"f_inc":"1"})}),"secrets":Runtime.Dict.from({}),"providers":Runtime.Dict.from({})});
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
		var controller = ctx.getDriver(ctx, "Runtime.Web.RouteController");
		await controller.renderFirst(ctx);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.ModuleDescription";
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
			"class_name": "App.ModuleDescription",
			"name": "App.ModuleDescription",
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
			"appRun",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(App.ModuleDescription);
window["App.ModuleDescription"] = App.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.ModuleDescription;