(function(){UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};

var baidu = window.baidu || {};

window.baidu = baidu;

window.UE = baidu.editor =  {};

UE.plugins = {};

UE.commands = {};

UE.instants = {};

UE.I18N = {};

UE.version = "1.2.4.0";

var dom = UE.dom = {};
/**
 * @file
 * @name UE.browser
 * @short Browser
 * @desc UEditor娑擃參鍣伴悽銊ф畱濞村繗顬囬崳銊ュ灲閺傤厽膩閸э拷
 */
var browser = UE.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋IE
         * @name ie
         * @grammar UE.browser.ie  => true|false
         */
        ie		: !!window.ActiveXObject,

        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋Opera
         * @name opera
         * @grammar UE.browser.opera  => true|false
         */
        opera	: ( !!opera && opera.version ),

        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋webkit閸愬懏鐗�
         * @name webkit
         * @grammar UE.browser.webkit  => true|false
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋mac缁崵绮烘稉瀣畱濞村繗顬囬崳锟�
         * @name mac
         * @grammar UE.browser.mac  => true|false
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锕�樀娴滃孩锟藉鍌浤佸锟�
         * @name quirks
         * @grammar UE.browser.quirks  => true|false
         */
        quirks : ( document.compatMode == 'BackCompat' )
    };
    /**
     * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锕�樀娑撶ecko閸愬懏鐗�
     * @name gecko
     * @grammar UE.browser.gecko  => true|false
     */
    browser.gecko =( navigator.product == 'Gecko' && !browser.webkit && !browser.opera );

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie ){
        version = parseFloat( agent.match( /msie (\d+)/ )[1] );
        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋 IE9 濡�绱�
         * @name ie9Compat
         * @grammar UE.browser.ie9Compat  => true|false
         */
        browser.ie9Compat = document.documentMode == 9;
        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋 IE8 濞村繗顬囬崳锟�
         * @name ie8
         * @grammar     UE.browser.ie8  => true|false
         */
        browser.ie8 = !!document.documentMode;

        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋 IE8 濡�绱�
         * @name ie8Compat
         * @grammar     UE.browser.ie8Compat  => true|false
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锕佺箥鐞涘苯婀�閸忕厧顔怚E7濡�绱�
         * @name ie7Compat
         * @grammar     UE.browser.ie7Compat  => true|false
         */
        browser.ie7Compat = ( ( version == 7 && !document.documentMode )
                || document.documentMode == 7 );

        /**
         * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥顩嶦6濡�绱￠幋鏍拷瀵倹膩瀵拷
         * @name ie6Compat
         * @grammar     UE.browser.ie6Compat  => true|false
         */
        browser.ie6Compat = ( version < 7 || browser.quirks );

    }

    // Gecko.
    if ( browser.gecko ){
        var geckoRelease = agent.match( /rv:([\d\.]+)/ );
        if ( geckoRelease )
        {
            geckoRelease = geckoRelease[1].split( '.' );
            version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
        }
    }
    /**
     * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋chrome
     * @name chrome
     * @grammar     UE.browser.chrome  => true|false
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = + RegExp['\x241'];
    }
    /**
     * 濡拷绁村ù蹇氼瀲閸ｃ劍妲搁崥锔胯礋safari
     * @name safari
     * @grammar     UE.browser.safari  => true|false
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
    	browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
        version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
        version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * 濞村繗顬囬崳銊у閺堫剙鍨介弬锟�
     * IE缁鍨潻鏂挎礀閸婇棿璐�,6,7,8,9,10缁涳拷
     * gecko缁鍨导姘崇箲閸ワ拷0900閿涳拷58900缁涳拷
     * webkit缁鍨导姘崇箲閸ョ偛鍙綽uild閸欙拷(婵★拷522缁涳拷.
     * @name version
     * @grammar     UE.browser.version  => number
     * @example
     * if ( UE.browser.ie && UE.browser.version == 6 ){
     *     alert( "Ouch!鐏炲懐鍔ч弰顖欑閹墎娈慖E6!" );
     * }
     */
    browser.version = version;

    /**
     * 閺勵垰鎯侀弰顖氬悑鐎硅膩瀵繒娈戝ù蹇氼瀲閸ｏ拷
     * @name isCompatible
     * @grammar  UE.browser.isCompatible  => true|false
     * @example
     * if ( UE.browser.isCompatible ){
     *     alert( "娴ｇ姷娈戝ù蹇氼瀲閸ｃ劎娴夎ぐ鎾茬瑝闁挎瑥鎽濋敍锟�);
     * }
     */
    browser.isCompatible =
        !browser.mobile && (
        ( browser.ie && version >= 6 ) ||
        ( browser.gecko && version >= 10801 ) ||
        ( browser.opera && version >= 9.5 ) ||
        ( browser.air && version >= 1 ) ||
        ( browser.webkit && version >= 522 ) ||
        false );
    return browser;
}();
//韫囶偅宓庨弬鐟扮础
var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko,
    opera = browser.opera;
/**
 * @file
 * @name UE.Utils
 * @short Utils
 * @desc UEditor鐏忎浇顥栨担璺ㄦ暏閻ㄥ嫰娼ら幀浣镐紣閸忓嘲鍤遍弫锟�
 * @import editor.js
 */
var utils = UE.utils = {
    /**
     * 闁秴宸婚弫鎵矋閿涘苯顕挒鈽呯礉nodeList
     * @name each
     * @grammar UE.utils.each(obj,iterator,[context])
     * @since 1.2.4+
     * @desc
     * * obj 鐟曚線浜堕崢鍡欐畱鐎电钖�
     * * iterator 闁秴宸婚惃鍕煙濞夛拷閺傝纭堕惃鍕儑娑擄拷閲滈弰顖炰憾閸樺棛娈戦崐纭风礉缁楊兛绨╂稉顏呮Ц缁便垹绱╅敍宀�儑娑撳閲滈弰鐥産j
     * * context  iterator閻ㄥ嫪绗傛稉瀣瀮
     * @example
     * UE.utils.each([1,2],function(v,i){
     *     console.log(v)//閸婏拷
     *     console.log(i)//缁便垹绱�
     * })
     * UE.utils.each(document.getElementsByTagName('*'),function(n){
     *     console.log(n.tagName)
     * })
     */
    each : function(obj, iterator, context) {
        if (obj == null) return;
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if(iterator.call(context, obj[i], i, obj) === false)return;
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if(iterator.call(context, obj[key], key, obj) === false)return
                }
            }
        }
    },

    makeInstance:function (obj) {
        var noop = new Function();
        noop.prototype = obj;
        obj = new noop;
        noop.prototype = null;
        return obj;
    },
    /**
     * 鐏忓敄ource鐎电钖勬稉顓犳畱鐏炵偞锟介幍鈺佺潔閸掔殞arget鐎电钖勬稉锟�
     * @name extend
     * @grammar UE.utils.extend(target,source)  => Object  //鐟曞棛娲婇幍鈺佺潔
     * @grammar UE.utils.extend(target,source,true)  ==> Object  //娣囨繄鏆�幍鈺佺潔
     */
    extend:function (t, s, b) {
        if (s) {
            for (var k in s) {
                if (!b || !t.hasOwnProperty(k)) {
                    t[k] = s[k];
                }
            }
        }
        return t;
    },

    /**
     * 濡剝瀚欑紒褎澹欓張鍝勫煑閿涘ubClass缂佈勫superClass
     * @name inherits
     * @grammar UE.utils.inherits(subClass,superClass) => subClass
     * @example
     * function SuperClass(){
     *     this.name = "鐏忓繑娼�;
     * }
     * SuperClass.prototype = {
     *     hello:function(str){
     *         console.log(this.name + str);
     *     }
     * }
     * function SubClass(){
     *     this.name = "鐏忓繐绱�;
     * }
     * UE.utils.inherits(SubClass,SuperClass);
     * var sub = new SubClass();
     * sub.hello("閺冣晙绗傛總锟�); ==> "鐏忓繐绱堕弮鈺�瑐婵傛枻绱�
     */
    inherits:function (subClass, superClass) {
        var oldP = subClass.prototype,
            newP = utils.makeInstance(superClass.prototype);
        utils.extend(newP, oldP, true);
        subClass.prototype = newP;
        return (newP.constructor = subClass);
    },

    /**
     * 閻劍瀵氱�姘辨畱context娴ｆ粈璐焒n娑撳﹣绗呴弬鍥风礉娑旂喎姘ㄩ弰鐥秇is
     * @name bind
     * @grammar UE.utils.bind(fn,context)  =>  fn
     */
    bind:function (fn, context) {
        return function () {
            return fn.apply(context, arguments);
        };
    },

    /**
     * 閸掓稑缂撳鎯扮箿delay閹笛嗩攽閻ㄥ嫬鍤遍弫鐧磏
     * @name defer
     * @grammar UE.utils.defer(fn,delay)  =>fn   //瀵ゆ儼绻渄elay濮ｎ偆顬戦幍褑顢慺n閿涘矁绻戦崶鐎巒
     * @grammar UE.utils.defer(fn,delay,exclusion)  =>fn   //瀵ゆ儼绻渄elay濮ｎ偆顬戦幍褑顢慺n閿涘矁瀚xclusion娑撹櫣婀￠敍灞藉灟娴滄帗鏋奸幍褑顢慺n
     * @example
     * function test(){
     *     console.log("瀵ゆ儼绻滄潏鎾冲毉閿涳拷);
     * }
     * //闂堢偘绨伴弬銉ユ鏉╃喐澧界悰锟�
     * var testDefer = UE.utils.defer(test,1000);
     * testDefer();   =>  "瀵ゆ儼绻滄潏鎾冲毉閿涳拷;
     * testDefer();   =>  "瀵ゆ儼绻滄潏鎾冲毉閿涳拷;
     * //娴滄帗鏋煎鎯扮箿閹笛嗩攽
     * var testDefer1 = UE.utils.defer(test,1000,true);
     * testDefer1();   =>  //閺堫剚顐兼稉宥嗗⒔鐞涳拷
     * testDefer1();   =>  "瀵ゆ儼绻滄潏鎾冲毉閿涳拷;
     */
    defer:function (fn, delay, exclusion) {
        var timerID;
        return function () {
            if (exclusion) {
                clearTimeout(timerID);
            }
            timerID = setTimeout(fn, delay);
        };
    },

    /**
     * 閺屻儲澹橀崗鍐item閸︺劍鏆熺紒鍒焤ray娑擃厾娈戠槐銏犵穿, 閼汇儲澹樻稉宥呭煂鏉╂柨娲�1
     * @name indexOf
     * @grammar UE.utils.indexOf(array,item)  => index|-1  //姒涙顓绘禒搴㈡殶缂佸嫬绱戞径鎾劥瀵拷顬婇幖婊呭偍
     * @grammar UE.utils.indexOf(array,item,start)  => index|-1  //start閹稿洤鐣惧锟筋瀶閺屻儲澹橀惃鍕秴缂冿拷
     */
    indexOf:function (array, item, start) {
        var index = -1;
        start = this.isNumber(start) ? start : 0;
        this.each(array,function(v,i){
            if(i >= start && v === item){
                index = i;
                return false;
            }
        });
        return index;
    },

    /**
     * 缁夊娅庨弫鎵矋array娑擃厾娈戦崗鍐item
     * @name removeItem
     * @grammar UE.utils.removeItem(array,item)
     */
    removeItem:function (array, item) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
                i--;
            }
        }
    },

    /**
     * 閸掔娀娅庣�妤冾儊娑撶灚tr閻ㄥ嫰顪氱亸鍓р敄閺嶏拷
     * @name trim
     * @grammar UE.utils.trim(str) => String
     */
    trim:function (str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },

    /**
     * 鐏忓棗鐡х粭锔胯list(娴狅拷,'閸掑棝娈�閹存牞锟介弫鎵矋list鏉烆剚鍨氶崫鍫濈瑖鐎电钖�
     * @name listToMap
     * @grammar UE.utils.listToMap(list)  => Object  //Object瑜般垹顪唟test:1,br:1,textarea:1}
     */
    listToMap:function (list) {
        if (!list)return {};
        list = utils.isArray(list) ? list : list.split(',');
        for (var i = 0, ci, obj = {}; ci = list[i++];) {
            obj[ci.toUpperCase()] = obj[ci] = 1;
        }
        return obj;
    },

    /**
     * 鐏忓敄tr娑擃厾娈慼tml缁楋箑褰挎潪顑跨疅,姒涙顓荤亸鍡氭祮娑旓拷'&<">''閸ユ稐閲滅�妤冾儊閿涘苯褰查懛顏勭暰娑斿『eg閺夈儳鈥樼�姘舵付鐟曚浇娴嗘稊澶屾畱鐎涙顑�
     * @name unhtml
     * @grammar UE.utils.unhtml(str);  => String
     * @grammar UE.utils.unhtml(str,reg)  => String
     * @example
     * var html = '<body>You say:"娴ｇ姴銈介敍涓卆idu & UEditor!"</body>';
     * UE.utils.unhtml(html);   ==>  &lt;body&gt;You say:&quot;娴ｇ姴銈介敍涓卆idu &amp; UEditor!&quot;&lt;/body&gt;
     * UE.utils.unhtml(html,/[<>]/g)  ==>  &lt;body&gt;You say:"娴ｇ姴銈介敍涓卆idu & UEditor!"&lt;/body&gt;
     */
    unhtml:function (str, reg) {
        return str ? str.replace(reg || /[&<">]/g, function (m) {
            return {
                '<':'&lt;',
                '&':'&amp;',
                '"':'&quot;',
                '>':'&gt;'
            }[m]
        }) : '';
    },
    /**
     * 鐏忓敄tr娑擃厾娈戞潪顑跨疅鐎涙顑佹潻妯哄斧閹存亸tml鐎涙顑�
     * @name html
     * @grammar UE.utils.html(str)  => String   //鐠囷妇绮忛崣鍌濐瀫<code><a href = '#unhtml'>unhtml</a></code>
     */
    html:function (str) {
        return str ? str.replace(/&((g|l|quo)t|amp);/g, function (m) {
            return {
                '&lt;':'<',
                '&amp;':'&',
                '&quot;':'"',
                '&gt;':'>'
            }[m]
        }) : '';
    },
    /**
     * 鐏忓摶ss閺嶅嘲绱℃潪顒佸床娑撴椽鈹樺畡鎵畱瑜般垹绱￠妴鍌氼渾font-size => fontSize
     * @name cssStyleToDomStyle
     * @grammar UE.utils.cssStyleToDomStyle(cssName)  => String
     */
    cssStyleToDomStyle:function () {
        var test = document.createElement('div').style,
            cache = {
                'float':test.cssFloat != undefined ? 'cssFloat' : test.styleFloat != undefined ? 'styleFloat' : 'float'
            };

        return function (cssName) {
            return cache[cssName] || (cache[cssName] = cssName.toLowerCase().replace(/-./g, function (match) {
                return match.charAt(1).toUpperCase();
            }));
        };
    }(),
    /**
     * 閸斻劍锟介崝鐘烘祰閺傚洣娆㈤崚鐧瞣c娑擃叏绱濋獮鏈电贩閹圭晜bj閺夈儴顔曠純顔肩潣閹嶇礉閸旂姾娴囬幋鎰閸氬孩澧界悰灞芥礀鐠嬪啫鍤遍弫鐧磏
     * @name loadFile
     * @grammar UE.utils.loadFile(doc,obj)
     * @grammar UE.utils.loadFile(doc,obj,fn)
     * @example
     * //閹稿洤鐣鹃崝鐘烘祰閸掓澘缍嬮崜宄漮cument娑擃厺绔存稉鐚籧ript閺傚洣娆㈤敍灞藉鏉炶姤鍨氶崝鐔锋倵閹笛嗩攽function
     * utils.loadFile( document, {
     *     src:"test.js",
     *     tag:"script",
     *     type:"text/javascript",
     *     defer:"defer"
     * }, function () {
     *     console.log('閸旂姾娴囬幋鎰閿涳拷)
     * });
     */
    loadFile:function () {
        var tmpList = [];
        function getItem(doc,obj){
            for(var i= 0,ci;ci=tmpList[i++];){
                try{
                    if(ci.doc === doc && ci.url == (obj.src || obj.href)){
                        return ci;
                    }
                }catch(e){
                    //閸︹暐e9娑撳绱濇俊鍌涚亯doc娑撳秵妲告稉锟介嚋妞ょ敻娼伴惃鍕剁礉娴兼艾顕遍懛瀛樺珕缂佹繆顔栭梻顔炬畱闁挎瑨顕�
                    continue
                }

            }
        }
        return function (doc, obj, fn) {

            var item = getItem(doc,obj);
            if (item) {
                if(item.ready){
                    fn && fn();
                }else{
                    item.funs.push(fn)
                }
                return;
            }
            tmpList.push({
                doc:doc,
                url:obj.src||obj.href,
                funs:[fn]
            });
            if (!doc.body) {
                var html = [];
                for(var p in obj){
                    if(p == 'tag')continue;
                    html.push(p + '="' + obj[p] + '"')
                }
                doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></'+obj.tag+'>');
                return;
            }
            if (obj.id && doc.getElementById(obj.id)) {
                return;
            }
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for (var p in obj) {
                element.setAttribute(p, obj[p]);
            }
            element.onload = element.onreadystatechange = function () {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    item = getItem(doc,obj)
                    if (item.funs.length > 0) {
                        item.ready = 1;
                        for (var fi; fi = item.funs.pop();) {
                            fi();
                        }
                    }
                    element.onload = element.onreadystatechange = null;
                }
            };
            doc.getElementsByTagName("head")[0].appendChild(element);
        }
    }(),
    /**
     * 閸掋倖鏌噊bj鐎电钖勯弰顖氭儊娑撹櫣鈹�
     * @name isEmptyObject
     * @grammar UE.utils.isEmptyObject(obj)  => true|false
     * @example
     * UE.utils.isEmptyObject({}) ==>true
     * UE.utils.isEmptyObject([]) ==>true
     * UE.utils.isEmptyObject("") ==>true
     */
    isEmptyObject:function (obj) {
        if (obj == null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        for (var key in obj) if (obj.hasOwnProperty(key)) return false;
        return true;
    },

    /**
     * 缂佺喍绔寸亸鍡涱杹閼规彃锟芥担璺ㄦ暏16鏉╂稑鍩楄ぐ銏犵础鐞涖劎銇�
     * @name fixColor
     * @grammar UE.utils.fixColor(name,value) => value
     * @example
     * rgb(255,255,255)  => "#ffffff"
     */
    fixColor:function (name, value) {
        if (/color/i.test(name) && /rgba?/.test(value)) {
            var array = value.split(",");
            if (array.length > 3)
                return "";
            value = "#";
            for (var i = 0, color; color = array[i++];) {
                color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                value += color.length == 1 ? "0" + color : color;
            }
            value = value.toUpperCase();
        }
        return  value;
    },
    /**
     * 閸欘亪鎷＄�绛╫rder,padding,margin閸嬫矮绨℃径鍕倞閿涘苯娲滄稉鐑橈拷閼充粙妫舵０锟�
     * @public
     * @function
     * @param {String}    val style鐎涙顑佹稉锟�
     */
    optCss:function (val) {
        var padding, margin, border;
        val = val.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi, function (str, key, name, val) {
            if (val.split(' ').length == 1) {
                switch (key) {
                    case 'padding':
                        !padding && (padding = {});
                        padding[name] = val;
                        return '';
                    case 'margin':
                        !margin && (margin = {});
                        margin[name] = val;
                        return '';
                    case 'border':
                        return val == 'initial' ? '' : str;
                }
            }
            return str;
        });

        function opt(obj, name) {
            if (!obj) {
                return '';
            }
            var t = obj.top , b = obj.bottom, l = obj.left, r = obj.right, val = '';
            if (!t || !l || !b || !r) {
                for (var p in obj) {
                    val += ';' + name + '-' + p + ':' + obj[p] + ';';
                }
            } else {
                val += ';' + name + ':' +
                    (t == b && b == l && l == r ? t :
                        t == b && l == r ? (t + ' ' + l) :
                            l == r ? (t + ' ' + l + ' ' + b) : (t + ' ' + r + ' ' + b + ' ' + l)) + ';'
            }
            return val;
        }

        val += opt(padding, 'padding') + opt(margin, 'margin');
        return val.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, '').replace(/;([ \n\r\t]+)|\1;/g, ';')
            .replace(/(&((l|g)t|quot|#39))?;{2,}/g, function (a, b) {
                return b ? b + ";;" : ';'
            });
    },
    /**
     * 濞ｅ崬瀹抽崗瀣畷鐎电钖勯敍灞肩矤source閸掔殞arget
     * @name clone
     * @grammar UE.utils.clone(source) => anthorObj 閺傛壆娈戠�纭呰杽閺勵垰鐣弫瀵告畱source閻ㄥ嫬澹囬張锟�
     * @grammar UE.utils.clone(source,target) => target閸栧懎鎯堟禍鍞杘urce閻ㄥ嫭澧嶉張澶婂敶鐎圭櫢绱濋柌宥呮倳娴兼俺顪婇惄锟�
     */
    clone:function (source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (typeof tmp == 'object') {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clone(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    /**
     * 鏉烆剚宕瞔m/pt閸掔殐x
     * @name transUnitToPx
     * @grammar UE.utils.transUnitToPx('20pt') => '27px'
     * @grammar UE.utils.transUnitToPx('0pt') => '0'
     */
    transUnitToPx : function(val){
        if(!/(pt|cm)/.test(val)){
            return val
        }
        var unit;
        val.replace(/([\d.]+)(\w+)/,function(str,v,u){
            val = v;
            unit = u;
        });
        switch(unit){
            case 'cm':
                val = parseFloat(val) * 25;
                break;
            case 'pt':
                val = Math.round(parseFloat(val) * 96 / 72);
        }
        return val + (val?'px':'');
    },
    /**
     * DomReady閺傝纭堕敍灞芥礀鐠嬪啫鍤遍弫鏉跨殺閸︹暊om閺嶆唵eady鐎瑰本鍨氶崥搴㈠⒔鐞涳拷
     * @name domReady
     * @grammar UE.utils.domReady(fn)  => fn  //鏉╂柨娲栨稉锟介嚋瀵ゆ儼绻滈幍褑顢戦惃鍕煙濞夛拷
     */
    domReady:function () {

        var fnArr = [];

        function doReady(doc) {
            //绾喕绻歰nready閸欘亝澧界悰灞肩濞嗭拷
            doc.isReady = true;
            for (var ci; ci = fnArr.pop();ci()){}
        }

        return function (onready,win) {
            win = win || window;
            var doc = win.document;
            onready && fnArr.push(onready);
            if (doc.readyState === "complete") {
                doReady(doc);
            }else{
                doc.isReady && doReady(doc);
                if (browser.ie) {
                    (function () {
                        if (doc.isReady) return;
                        try {
                            doc.documentElement.doScroll("left");
                        } catch (error) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        doReady(doc);
                    })();
                    win.attachEvent('onload', function(){
                        doReady(doc)
                    });
                } else {
                    doc.addEventListener("DOMContentLoaded", function () {
                        doc.removeEventListener("DOMContentLoaded", arguments.callee, false);
                        doReady(doc);
                    }, false);
                    win.addEventListener('load', function(){doReady(doc)}, false);
                }
            }

        }
    }(),
    /**
     * 閸斻劍锟藉ǎ璇插css閺嶅嘲绱�
     * @name cssRule
     * @grammar UE.utils.cssRule('濞ｈ濮為惃鍕壉瀵繒娈戦懞鍌滃仯閸氬秶袨',['閺嶅嘲绱�閿涳拷閺�儳鍩岄崫顏冮嚋document娑擄拷])
     * @grammar UE.utils.cssRule('body','body{background:#ccc}') => null  //缂佹獏ody濞ｈ濮為懗灞炬珯妫版粏澹�
     * @grammar UE.utils.cssRule('body') =>閺嶅嘲绱￠惃鍕摟缁楋缚瑕� //閸欐牕绶眐ey閸婇棿璐焍ody閻ㄥ嫭鐗卞蹇曟畱閸愬懎顔�婵″倹鐏夊▽鈩冩箒閹垫儳鍩宬ey閸婄厧鍘涢崗宕囨畱閺嶅嘲绱＄亸鍡氱箲閸ョ偟鈹栭敍灞肩伐婵″倸鍨伴幍宥夊亝娑擃亣鍎楅弲顖烆杹閼硅绱濈亸鍡氱箲閸ワ拷body{background:#ccc}
     * @grammar UE.utils.cssRule('body','') =>null //濞撳懐鈹栫紒娆忕暰閻ㄥ埍ey閸婅偐娈戦懗灞炬珯妫版粏澹�
     */
    cssRule : browser.ie ? function(key,style,doc){
            var indexList,index;
            doc = doc || document;
            if(doc.indexList){
                indexList = doc.indexList;
            }else{
                indexList = doc.indexList =  {};
            }
            var sheetStyle;
            if(!indexList[key]){
                if(style === undefined){
                    return ''
                }
                sheetStyle = doc.createStyleSheet('',index = doc.styleSheets.length);
                indexList[key] = index;
            }else{
                sheetStyle = doc.styleSheets[indexList[key]];
            }
            if(style === undefined){
                return sheetStyle.cssText
            }
            sheetStyle.cssText = style || ''
        }:function(key,style,doc){
            doc = doc || document;
            var head = doc.getElementsByTagName('head')[0],node;
            if(!(node = doc.getElementById(key))){
                if(style === undefined){
                    return ''
                }
                node = doc.createElement('style');
                node.id = key;
                head.appendChild(node)
            }
            if(style === undefined){
                return node.innerHTML
            }
            if(style !== ''){
                node.innerHTML = style;
            }else{
                head.removeChild(node)
            }
        }

};
/**
 * 閸掋倖鏌噑tr閺勵垰鎯佹稉鍝勭摟缁楋缚瑕�
 * @name isString
 * @grammar UE.utils.isString(str) => true|false
 */
/**
 * 閸掋倖鏌嘺rray閺勵垰鎯佹稉鐑樻殶缂侊拷
 * @name isArray
 * @grammar UE.utils.isArray(obj) => true|false
 */
/**
 * 閸掋倖鏌噊bj鐎电钖勯弰顖氭儊娑撶儤鏌熷▔锟�
 * @name isFunction
 * @grammar UE.utils.isFunction(obj)  => true|false
 */
/**
 * 閸掋倖鏌噊bj鐎电钖勯弰顖氭儊娑撶儤鏆熺�锟�
 * @name isNumber
 * @grammar UE.utils.isNumber(obj)  => true|false
 */

utils.each(['String','Function','Array','Number'],function(v){
    UE.utils['is' + v] = function(obj){
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});
/**
 * @file
 * @name UE.EventBase
 * @short EventBase
 * @import editor.js,core/utils.js
 * @desc UE闁插洨鏁ら惃鍕皑娴犺泛鐔�猾浼欑礉缂佈勫濮濄倗琚惃鍕嚠鎼存梻琚亸鍡氬箯閸欐溂ddListener,removeListener,fireEvent閺傝纭堕妴锟�
 * 閸︹晳E娑擃叏绱滶ditor娴犮儱寮烽幍锟芥箒ui鐎圭偘绶ラ柈鐣屾埛閹靛じ绨＄拠銉ц閿涘本鏅犻崣顖欎簰閸︺劌顕惔鏃傛畱ui鐎电钖勬禒銉ュ挤editor鐎电钖勬稉濠佸▏閻劋绗傛潻鐗堟煙濞夋洏锟�
 */
var EventBase = UE.EventBase = function () {};

EventBase.prototype = {
    /**
     * 濞夈劌鍞芥禍瀣╂閻╂垵鎯夐崳锟�
     * @name addListener
     * @grammar editor.addListener(types,fn)  //types娑撹桨绨ㄦ禒璺烘倳缁夊府绱濇径姘嚋閸欘垳鏁ょ粚鐑樼壐閸掑棝娈�
     * @example
     * editor.addListener('selectionchange',function(){
     *      console.log("闁灏鑼病閸欐ê瀵查敍锟�;
     * })
     * editor.addListener('beforegetcontent aftergetcontent',function(type){
     *         if(type == 'beforegetcontent'){
     *             //do something
     *         }else{
     *             //do something
     *         }
     *         console.log(this.getContent) // this閺勵垱鏁為崘宀�畱娴滃娆㈤惃鍕椽鏉堟垵娅掔�鐐扮伐
     * })
     */
    addListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            getListener(this, ti, true).push(listener);
        }
    },
    /**
     * 缁夊娅庢禍瀣╂閻╂垵鎯夐崳锟�
     * @name removeListener
     * @grammar editor.removeListener(types,fn)  //types娑撹桨绨ㄦ禒璺烘倳缁夊府绱濇径姘嚋閸欘垳鏁ょ粚鐑樼壐閸掑棝娈�
     * @example
     * //changeCallback娑撶儤鏌熷▔鏇氱秼
     * editor.removeListener("selectionchange",changeCallback);
     */
    removeListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            utils.removeItem(getListener(this, ti) || [], listener);
        }
    },
    /**
     * 鐟欙箑褰傛禍瀣╂
     * @name fireEvent
     * @grammar editor.fireEvent(types)  //types娑撹桨绨ㄦ禒璺烘倳缁夊府绱濇径姘嚋閸欘垳鏁ょ粚鐑樼壐閸掑棝娈�
     * @example
     * editor.fireEvent("selectionchange");
     */
    fireEvent:function (types) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            var listeners = getListener(this, ti),
                r, t, k;
            if (listeners) {
                k = listeners.length;
                while (k--) {
                    t = listeners[k].apply(this, arguments);
                    if (t !== undefined) {
                        r = t;
                    }
                }
            }
            if (t = this['on' + ti.toLowerCase()]) {
                r = t.apply(this, arguments);
            }
        }
        return r;
    }
};
/**
 * 閼惧嘲绶辩�纭呰杽閹碉拷瀚㈤張澶屾磧閸氼剛琚崹瀣畱閹碉拷婀侀惄鎴濇儔閸ｏ拷
 * @public
 * @function
 * @param {Object} obj  閺屻儴顕楅惄鎴濇儔閸ｃ劎娈戠�纭呰杽
 * @param {String} type 娴滃娆㈢猾璇茬�
 * @param {Boolean} force  娑撶皪rue娑撴柨缍嬮崜宥嗗閺堝〖ype缁鐎烽惃鍕潧閸氼剙娅掓稉宥呯摠閸︺劍妞傞敍灞藉灡瀵よ桨绔存稉顏嗏敄閻╂垵鎯夐崳銊︽殶缂侊拷
 * @returns {Array} 閻╂垵鎯夐崳銊︽殶缂侊拷
 */
function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
}


///import editor.js
///import core/dom/dom.js
/**
 * dtd html鐠囶厺绠熼崠鏍畱娴ｆ挾骞囩猾锟�
 * @constructor
 * @namespace dtd
 */
var dtd = dom.dtd = (function() {
    function _( s ) {
        for (var k in s) {
            s[k.toUpperCase()] = s[k];
        }
        return s;
    }
    function X( t ) {
        var a = arguments;
        for ( var i=1; i<a.length; i++ ) {
            var x = a[i];
            for ( var k in x ) {
                if (!t.hasOwnProperty(k)) {
                    t[k] = x[k];
                }
            }
        }
        return t;
    }
    var A = _({isindex:1,fieldset:1}),
        B = _({input:1,button:1,select:1,textarea:1,label:1}),
        C = X( _({a:1}), B ),
        D = X( {iframe:1}, C ),
        E = _({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),
        F = _({ins:1,del:1,script:1,style:1}),
        G = X( _({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}), F ),
        H = X( _({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}), G ),
        I = X( _({p:1}), H ),
        J = X( _({iframe:1}), H, B ),
        K = _({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),

        L = X( _({a:0}), J ),//a娑撳秷鍏樼悮顐㈠瀼瀵拷绱濋幍锟戒簰閹跺﹣绮�
        M = _({tr:1}),
        N = _({'#':1}),
        O = X( _({param:1}), K ),
        P = X( _({form:1}), A, D, E, I ),
        Q = _({li:1}),
        R = _({style:1,script:1}),
        S = _({base:1,link:1,meta:1,title:1}),
        T = X( S, R ),
        U = _({head:1,body:1}),
        V = _({html:1});

    var block = _({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),
        //闁藉牆顕导姗�徔閻ㄥ垾mbed娴犳牗鍧婇崝鐘辩啊缂佹挻娼弽鍥槕閿涘苯顕遍懛瀵哥煒鐠愮绻橀弶銉ょ窗閸欐ɑ鍨氭稉銈勯嚋閿涘本娈忛弮璺哄箵閹猴拷,embed:1
        empty =  _({area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1,embed:1});

    return  _({

        // $ 鐞涖劎銇氶懛顏勭暰閻ㄥ嫬鐫橀幀锟�

        // body婢舵牜娈戦崗鍐閸掓銆�
        $nonBodyContent: X( V, U, S ),

        //閸ф绮ㄩ弸鍕帗缁辩姴鍨悰锟�
        $block : block,

        //閸愬懓浠堥崗鍐閸掓銆�
        $inline : L,

        $body : X( _({script:1,style:1}), block ),

        $cdata : _({script:1,style:1}),

        //閼奉亪妫撮崪灞藉帗缁憋拷
        $empty : empty,

        //娑撳秵妲搁懛顏堟４閸氬牞绱濇担鍡曠瑝閼冲�顔�ange闁鑵戦柌宀冪珶
        $nonChild : _({iframe:1,textarea:1}),
        //閸掓銆冮崗鍐閸掓銆�
        $listItem : _({dd:1,dt:1,li:1}),

        //閸掓銆冮弽鐟板帗缁辩姴鍨悰锟�
        $list: _({ul:1,ol:1,dl:1}),

        //娑撳秷鍏樼拋銈勮礋閺勵垳鈹栭惃鍕帗缁憋拷
        $isNotEmpty : _({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}),

        //婵″倹鐏夊▽鈩冩箒鐎涙劘濡悙鐟版皑閸欘垯浜掗崚鐘绘珟閻ㄥ嫬鍘撶槐鐘插灙鐞涱煉绱濋崓寮抪an,a
        $removeEmpty : _({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1}),

        $removeEmptyBlock : _({'p':1,'div':1}),

        //閸︹暟able閸忓啰绀岄柌宀�畱閸忓啰绀岄崚妤勩�
        $tableContent : _({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),
        //娑撳秷娴嗛幑銏㈡畱閺嶅洨顒�
        $notTransContent : _({pre:1,script:1,style:1,textarea:1}),
        html: U,
        head: T,
        style: N,
        script: N,
        body: P,
        base: {},
        link: {},
        meta: {},
        title: N,
        col : {},
        tr : _({td:1,th:1}),
        img : {},
        embed: {},
        colgroup : _({thead:1,col:1,tbody:1,tr:1,tfoot:1}),
        noscript : P,
        td : P,
        br : {},
        th : P,
        center : P,
        kbd : L,
        button : X( I, E ),
        basefont : {},
        h5 : L,
        h4 : L,
        samp : L,
        h6 : L,
        ol : Q,
        h1 : L,
        h3 : L,
        option : N,
        h2 : L,
        form : X( A, D, E, I ),
        select : _({optgroup:1,option:1}),
        font : L,
        ins : L,
        menu : Q,
        abbr : L,
        label : L,
        table : _({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),
        code : L,
        tfoot : M,
        cite : L,
        li : P,
        input : {},
        iframe : P,
        strong : L,
        textarea : N,
        noframes : P,
        big : L,
        small : L,
        span :_({'#':1,br:1}),
        hr : L,
        dt : L,
        sub : L,
        optgroup : _({option:1}),
        param : {},
        bdo : L,
        'var' : L,
        div : P,
        object : O,
        sup : L,
        dd : P,
        strike : L,
        area : {},
        dir : Q,
        map : X( _({area:1,form:1,p:1}), A, F, E ),
        applet : O,
        dl : _({dt:1,dd:1}),
        del : L,
        isindex : {},
        fieldset : X( _({legend:1}), K ),
        thead : M,
        ul : Q,
        acronym : L,
        b : L,
        a : X( _({a:1}), J ),
        blockquote :X(_({td:1,tr:1,tbody:1,li:1}),P),
        caption : L,
        i : L,
        u : L,
        tbody : M,
        s : L,
        address : X( D, I ),
        tt : L,
        legend : L,
        q : L,
        pre : X( G, C ),
        p : X(_({'a':1}),L),
        em :L,
        dfn : L
    });
})();

/**
 * @file
 * @name UE.dom.domUtils
 * @short DomUtils
 * @import editor.js, core/utils.js,core/browser.js,core/dom/dtd.js
 * @desc UEditor鐏忎浇顥栭惃鍕俺鐏炰郡om閹垮秳缍旀惔锟�
 */
function getDomNode(node, start, ltr, startFromChild, fn, guard) {
    var tmpNode = startFromChild && node[start],
        parent;
    !tmpNode && (tmpNode = node[ltr]);
    while (!tmpNode && (parent = (parent || node).parentNode)) {
        if (parent.tagName == 'BODY' || guard && !guard(parent)) {
            return null;
        }
        tmpNode = parent[ltr];
    }
    if (tmpNode && fn && !fn(tmpNode)) {
        return  getDomNode(tmpNode, start, ltr, false, fn);
    }
    return tmpNode;
}
var attrFix = ie && browser.version < 9 ? {
        tabindex:"tabIndex",
        readonly:"readOnly",
        "for":"htmlFor",
        "class":"className",
        maxlength:"maxLength",
        cellspacing:"cellSpacing",
        cellpadding:"cellPadding",
        rowspan:"rowSpan",
        colspan:"colSpan",
        usemap:"useMap",
        frameborder:"frameBorder"
    } : {
        tabindex:"tabIndex",
        readonly:"readOnly"
    },
    styleBlock = utils.listToMap([
        '-webkit-box', '-moz-box', 'block' ,
        'list-item' , 'table' , 'table-row-group' ,
        'table-header-group', 'table-footer-group' ,
        'table-row' , 'table-column-group' , 'table-column' ,
        'table-cell' , 'table-caption'
    ]);
var domUtils = dom.domUtils = {
    //閼哄倻鍋ｇ敮鎼佸櫤
    NODE_ELEMENT:1,
    NODE_DOCUMENT:9,
    NODE_TEXT:3,
    NODE_COMMENT:8,
    NODE_DOCUMENT_FRAGMENT:11,

    //娴ｅ秶鐤嗛崗宕囬兇
    POSITION_IDENTICAL:0,
    POSITION_DISCONNECTED:1,
    POSITION_FOLLOWING:2,
    POSITION_PRECEDING:4,
    POSITION_IS_CONTAINED:8,
    POSITION_CONTAINS:16,
    //ie6娴ｈ法鏁ら崗鏈电铂閻ㄥ嫪绱伴張澶夌濞堢數鈹栭惂钘夊毉閻滐拷
    fillChar:ie && browser.version == '6' ? '\ufeff' : '\u200B',
    //-------------------------Node闁劌鍨�-------------------------------
    keys:{
        /*Backspace*/ 8:1, /*Delete*/ 46:1,
        /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
        37:1, 38:1, 39:1, 40:1,
        13:1 /*enter*/
    },
    /**
     * 閼惧嘲褰囬懞鍌滃仯A閻╃顕禍搴ゅΝ閻愮閻ㄥ嫪缍呯純顔煎彠缁拷
     * @name getPosition
     * @grammar UE.dom.domUtils.getPosition(nodeA,nodeB)  =>  Number
     * @example
     *  switch (returnValue) {
     *      case 0: //閻╁摜鐡戦敍灞芥倱娑擄拷濡悙锟�
     *      case 1: //閺冪姴鍙ч敍宀冨Ν閻愰�绗夐惄姝岀箾
     *      case 2: //鐠虹喖娈㈤敍灞藉祮閼哄倻鍋婢舵挳鍎存担宥勭艾閼哄倻鍋婢舵挳鍎撮惃鍕倵闂堬拷
     *      case 4: //閸撳秶鐤嗛敍灞藉祮閼哄倻鍋婢舵挳鍎存担宥勭艾閼哄倻鍋婢舵挳鍎撮惃鍕闂堬拷
     *      case 8: //鐞氼偄瀵橀崥顐礉閸楀疇濡悙绗扮悮顐ュΝ閻愮閸栧懎鎯�
     *      case 10://缂佸嫬鎮庣猾璇茬�閿涘苯宓嗛懞鍌滃仯A濠娐ゅ喕鐠虹喖娈㈤懞鍌滃仯B娑撴棁顤嗛懞鍌滃仯B閸栧懎鎯堥妴鍌氱杽闂勫懍绗傞敍灞筋渾閺嬫粏顤嗛崠鍛儓閿涘苯绻��姘崇闂呭骏绱濋幍锟戒簰returnValue娴滃鐤勬稉濠佺瑝娴兼艾鐡ㄩ崷锟介惃鍕剰閸愮偣锟�
     *      case 16://閸栧懎鎯堥敍灞藉祮閼哄倻鍋閸栧懎鎯堥懞鍌滃仯B
     *      case 20://缂佸嫬鎮庣猾璇茬�閿涘苯宓嗛懞鍌滃仯A濠娐ゅ喕閸撳秶鐤嗛懞鍌滃仯A娑撴柨瀵橀崥顐ュΝ閻愮閵嗗倸鎮撻弽鍑ょ礉婵″倹鐏夐崠鍛儓閿涘苯绻��姘缂冾噯绱濋幍锟戒簰returnValue娴滃鐤勬稉濠佺瘍娑撳秳绱扮�妯烘躬16閻ㄥ嫭鍎忛崘锟�
     *  }
     */
    getPosition:function (nodeA, nodeB) {
        // 婵″倹鐏夋稉銈勯嚋閼哄倻鍋ｉ弰顖氭倱娑擄拷閲滈懞鍌滃仯
        if (nodeA === nodeB) {
            // domUtils.POSITION_IDENTICAL
            return 0;
        }
        var node,
            parentsA = [nodeA],
            parentsB = [nodeB];
        node = nodeA;
        while (node = node.parentNode) {
            // 婵″倹鐏塶odeB閺勭棴odeA閻ㄥ嫮顨查崗鍫ｅΝ閻愶拷
            if (node === nodeB) {
                // domUtils.POSITION_IS_CONTAINED + domUtils.POSITION_FOLLOWING
                return 10;
            }
            parentsA.push(node);
        }
        node = nodeB;
        while (node = node.parentNode) {
            // 婵″倹鐏塶odeA閺勭棴odeB閻ㄥ嫮顨查崗鍫ｅΝ閻愶拷
            if (node === nodeA) {
                // domUtils.POSITION_CONTAINS + domUtils.POSITION_PRECEDING
                return 20;
            }
            parentsB.push(node);
        }
        parentsA.reverse();
        parentsB.reverse();
        if (parentsA[0] !== parentsB[0]) {
            // domUtils.POSITION_DISCONNECTED
            return 1;
        }
        var i = -1;
        while (i++, parentsA[i] === parentsB[i]) {
        }
        nodeA = parentsA[i];
        nodeB = parentsB[i];
        while (nodeA = nodeA.nextSibling) {
            if (nodeA === nodeB) {
                // domUtils.POSITION_PRECEDING
                return 4
            }
        }
        // domUtils.POSITION_FOLLOWING
        return  2;
    },

    /**
     * 鏉╂柨娲栭懞鍌滃仯node閸︺劎鍩楅懞鍌滃仯娑擃厾娈戠槐銏犵穿娴ｅ秶鐤�
     * @name getNodeIndex
     * @grammar UE.dom.domUtils.getNodeIndex(node)  => Number  //缁便垹绱╅崐闂寸矤0瀵拷顬�
     */
    getNodeIndex:function (node, ignoreTextNode) {
        var preNode = node,
            i = 0;
        while (preNode = preNode.previousSibling) {
            if (ignoreTextNode && preNode.nodeType == 3) {
                continue;
            }
            i++;
        }
        return i;
    },

    /**
     * 濡拷绁撮懞鍌滃仯node閺勵垰鎯侀崷銊ㄥΝ閻愮oc閻ㄥ嫭鐖叉稉濠忕礉鐎圭偠宸濇稉濠冩Ц濡拷绁撮弰顖氭儊鐞氱帬oc閸栧懎鎯�
     * @name inDoc
     * @grammar UE.dom.domUtils.inDoc(node,doc)   =>  true|false
     */
    inDoc:function (node, doc) {
        return domUtils.getPosition(node, doc) == 10;
    },
    /**
     * 閺屻儲澹榥ode閼哄倻鍋ｉ惃鍕毑閸忓牐濡悙锟�
     * @name findParent
     * @grammar UE.dom.domUtils.findParent(node)  => Element  // 閻╁瓨甯存潻鏂挎礀node閼哄倻鍋ｉ惃鍕煑閼哄倻鍋�
     * @grammar UE.dom.domUtils.findParent(node,filterFn)  => Element  //filterFn娑撻缚绻冨銈呭毐閺佸府绱漬ode娴ｆ粈璐熼崣鍌涙殶閿涘矁绻戦崶鐎焤ue閺冭埖澧犳导姘殺node娴ｆ粈璐熺粭锕�値鐟曚焦鐪伴惃鍕Ν閻愮绻戦崶锟�
     * @grammar UE.dom.domUtils.findParent(node,filterFn,includeSelf)  => Element  //includeSelf閹稿洤鐣鹃弰顖氭儊閸栧懎鎯堥懛顏囬煩
     */
    findParent:function (node, filterFn, includeSelf) {
        if (node && !domUtils.isBody(node)) {
            node = includeSelf ? node : node.parentNode;
            while (node) {
                if (!filterFn || filterFn(node) || domUtils.isBody(node)) {
                    return filterFn && !filterFn(node) && domUtils.isBody(node) ? null : node;
                }
                node = node.parentNode;
            }
        }
        return null;
    },
    /**
     * 闁俺绻僼agName閺屻儲澹榥ode閼哄倻鍋ｉ惃鍕毑閸忓牐濡悙锟�
     * @name findParentByTagName
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames)   =>  Element  //tagNames閺�垱瀵旈弫鎵矋閿涘苯灏崚鍡椼亣鐏忓繐鍟�
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames,includeSelf)   =>  Element  //includeSelf閹稿洤鐣鹃弰顖氭儊閸栧懎鎯堥懛顏囬煩
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames,includeSelf,excludeFn)   =>  Element  //excludeFn閹稿洤鐣炬笟瀣檱鏉╁洦鎶ら弶鈥叉閿涘矁绻戦崶鐎焤ue閺冭泛鎷烽悾銉嚉閼哄倻鍋�
     */
    findParentByTagName:function (node, tagNames, includeSelf, excludeFn) {
        tagNames = utils.listToMap(utils.isArray(tagNames) ? tagNames : [tagNames]);
        return domUtils.findParent(node, function (node) {
            return tagNames[node.tagName] && !(excludeFn && excludeFn(node));
        }, includeSelf);
    },
    /**
     * 閺屻儲澹橀懞鍌滃仯node閻ㄥ嫮顨查崗鍫ｅΝ閻愬綊娉﹂崥锟�
     * @name findParents
     * @grammar UE.dom.domUtils.findParents(node)  => Array  //鏉╂柨娲栨稉锟介嚋缁佹牕鍘涢懞鍌滃仯閺佹壆绮嶉梿鍡楁値閿涘奔绗夐崠鍛儓閼奉亣闊�
     * @grammar UE.dom.domUtils.findParents(node,includeSelf)  => Array  //鏉╂柨娲栨稉锟介嚋缁佹牕鍘涢懞鍌滃仯閺佹壆绮嶉梿鍡楁値閿涘ncludeSelf閹稿洤鐣鹃弰顖氭儊閸栧懎鎯堥懛顏囬煩
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn)  => Array  //鏉╂柨娲栨稉锟介嚋缁佹牕鍘涢懞鍌滃仯閺佹壆绮嶉梿鍡楁値閿涘畺ilterFn閹稿洤鐣炬潻鍥ㄦ姢閺夆�娆㈤敍宀冪箲閸ョ�rue閻ㄥ埖ode鐏忓棜顤嗛柅澶婂絿
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn,closerFirst)  => Array  //鏉╂柨娲栨稉锟介嚋缁佹牕鍘涢懞鍌滃仯閺佹壆绮嶉梿鍡楁値閿涘畱loserFirst娑撶皪rue閻ㄥ嫯鐦介敍瀹痮de閻ㄥ嫮娲块幒銉у煑娴滆尪濡悙瑙勬Ц閺佹壆绮嶉惃鍕儑0娑擄拷
     */
    findParents:function (node, includeSelf, filterFn, closerFirst) {
        var parents = includeSelf && ( filterFn && filterFn(node) || !filterFn ) ? [node] : [];
        while (node = domUtils.findParent(node, filterFn)) {
            parents.push(node);
        }
        return closerFirst ? parents : parents.reverse();
    },

    /**
     * 閸︺劏濡悙绛簅de閸氬酣娼伴幓鎺戝弳閺傛媽濡悙绛篹wNode
     * @name insertAfter
     * @grammar UE.dom.domUtils.insertAfter(node,newNode)  => newNode
     */
    insertAfter:function (node, newNode) {
        return node.parentNode.insertBefore(newNode, node.nextSibling);
    },

    /**
     * 閸掔娀娅庨懞鍌滃仯node閿涘苯鑻熼弽瑙勫祦keepChildren閹稿洤鐣鹃弰顖氭儊娣囨繄鏆��鎰Ν閻愶拷
     * @name remove
     * @grammar UE.dom.domUtils.remove(node)  =>  node
     * @grammar UE.dom.domUtils.remove(node,keepChildren)  =>  node
     */
    remove:function (node, keepChildren) {
        var parent = node.parentNode,
            child;
        if (parent) {
            if (keepChildren && node.hasChildNodes()) {
                while (child = node.firstChild) {
                    parent.insertBefore(child, node);
                }
            }
            parent.removeChild(node);
        }
        return node;
    },

    /**
     * 閸欐牕绶眓ode閼哄倻鍋ｉ崷鈺爋m閺嶆垳绗傞惃鍕瑓娑擄拷閲滈懞鍌滃仯,閸楀啿顧嬮崣澶嬬埐闁秴宸�
     * @name  getNextDomNode
     * @grammar UE.dom.domUtils.getNextDomNode(node)  => Element
     * @example
     */
    getNextDomNode:function (node, startFromChild, filterFn, guard) {
        return getDomNode(node, 'firstChild', 'nextSibling', startFromChild, filterFn, guard);
    },
    /**
     * 濡拷绁撮懞鍌滃仯node閺勵垰鎯佺仦鐐扮艾bookmark閼哄倻鍋�
     * @name isBookmarkNode
     * @grammar UE.dom.domUtils.isBookmarkNode(node)  => true|false
     */
    isBookmarkNode:function (node) {
        return node.nodeType == 1 && node.id && /^_baidu_bookmark_/i.test(node.id);
    },
    /**
     * 閼惧嘲褰囬懞鍌滃仯node閹碉拷婀惃鍓媔ndow鐎电钖�
     * @name  getWindow
     * @grammar UE.dom.domUtils.getWindow(node)  => window鐎电钖�
     */
    getWindow:function (node) {
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
    },
    /**
     * 瀵版鍩宯odeA娑撳窉odeB閸忣剙鍙￠惃鍕毑閸忓牐濡悙锟�
     * @name  getCommonAncestor
     * @grammar UE.dom.domUtils.getCommonAncestor(nodeA,nodeB)  => Element
     */
    getCommonAncestor:function (nodeA, nodeB) {
        if (nodeA === nodeB)
            return nodeA;
        var parentsA = [nodeA] , parentsB = [nodeB], parent = nodeA, i = -1;
        while (parent = parent.parentNode) {
            if (parent === nodeB) {
                return parent;
            }
            parentsA.push(parent);
        }
        parent = nodeB;
        while (parent = parent.parentNode) {
            if (parent === nodeA)
                return parent;
            parentsB.push(parent);
        }
        parentsA.reverse();
        parentsB.reverse();
        while (i++, parentsA[i] === parentsB[i]) {
        }
        return i == 0 ? null : parentsA[i - 1];

    },
    /**
     * 濞撳懘娅巒ode閼哄倻鍋ｅ锕�礁閸忓嫬绱垫稉铏光敄閻ㄥ埇nline閼哄倻鍋�
     * @name clearEmptySibling
     * @grammar UE.dom.domUtils.clearEmptySibling(node)
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext)  //ignoreNext閹稿洤鐣鹃弰顖氭儊韫囩晫鏆愰崣瀹犵珶缁岄缚濡悙锟�
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext,ignorePre)  //ignorePre閹稿洤鐣鹃弰顖氭儊韫囩晫鏆愬锕佺珶缁岄缚濡悙锟�
     * @example
     * <b></b><i></i>xxxx<b>bb</b> --> xxxx<b>bb</b>
     */
    clearEmptySibling:function (node, ignoreNext, ignorePre) {
        function clear(next, dir) {
            var tmpNode;
            while (next && !domUtils.isBookmarkNode(next) && (domUtils.isEmptyInlineElement(next)
                //鏉╂瑩鍣锋稉宥堝厴閹跺﹦鈹栭弽鑲╃暬鏉╂稒娼垫导姘儌缁岀儤鐗搁獮鍙夊竴閿涘苯鍤悳鐗堟瀮鐎涙妫块惃鍕敄閺嶉棿娑幒澶夌啊
                || !new RegExp('[^\t\n\r' + domUtils.fillChar + ']').test(next.nodeValue) )) {
                tmpNode = next[dir];
                domUtils.remove(next);
                next = tmpNode;
            }
        }
        !ignoreNext && clear(node.nextSibling, 'nextSibling');
        !ignorePre && clear(node.previousSibling, 'previousSibling');
    },
    /**
     * 鐏忓棔绔存稉顏呮瀮閺堫剝濡悙绛簅de閹峰棗鍨庨幋鎰⒈娑擃亝鏋冮張顒冨Ν閻愮櫢绱漮ffset閹稿洤鐣鹃幏鍡楀瀻娴ｅ秶鐤�
     * @name split
     * @grammar UE.dom.domUtils.split(node,offset)  =>  TextNode  //鏉╂柨娲栨禒搴″瀼閸掑棔缍呯純顔肩磻婵娈戦崥搴濈娑擃亝鏋冮張顒冨Ν閻愶拷
     */
    split:function (node, offset) {
        var doc = node.ownerDocument;
        if (browser.ie && offset == node.nodeValue.length) {
            var next = doc.createTextNode('');
            return domUtils.insertAfter(node, next);
        }
        var retval = node.splitText(offset);
        //ie8娑撳獱plitText娑撳秳绱扮捄鐔告煀childNodes,閹存垳婊戦幍瀣З鐟欙箑褰傛禒鏍畱閺囧瓨鏌�
        if (browser.ie8) {
            var tmpNode = doc.createTextNode('');
            domUtils.insertAfter(retval, tmpNode);
            domUtils.remove(tmpNode);
        }
        return retval;
    },

    /**
     * 濡拷绁撮懞鍌滃仯node閺勵垰鎯佹稉铏光敄閼哄倻鍋ｉ敍鍫濆瘶閹奉剛鈹栭弽绗猴拷閹广垼顢戦妴浣稿窗娴ｅ秶顑佺粵澶婄摟缁楋讣绱�
     * @name  isWhitespace
     * @grammar  UE.dom.domUtils.isWhitespace(node)  => true|false
     */
    isWhitespace:function (node) {
        return !new RegExp('[^ \t\n\r' + domUtils.fillChar + ']').test(node.nodeValue);
    },
    /**
     * 閼惧嘲褰囬崗鍐element閻╃顕禍宸歩ewport閻ㄥ嫪缍呯純顔兼綏閺嶏拷
     * @name getXY
     * @grammar UE.dom.domUtils.getXY(element)  => Object //鏉╂柨娲栭崸鎰垼鐎电钖剓x:left,y:top}
     */
    getXY:function (element) {
        var x = 0, y = 0;
        while (element.offsetParent) {
            y += element.offsetTop;
            x += element.offsetLeft;
            element = element.offsetParent;
        }
        return { 'x':x, 'y':y};
    },
    /**
     * 娑撳搫鍘撶槐鐖�ement缂佹垵鐣鹃崢鐔烘晸DOM娴滃娆㈤敍瀹紋pe娑撹桨绨ㄦ禒鍓佽閸ㄥ绱漢andler娑撳搫顦甸悶鍡楀毐閺侊拷
     * @name on
     * @grammar UE.dom.domUtils.on(element,type,handler)   //type閺�垱瀵旈弫鎵矋娴肩姴鍙�
     * @example
     * UE.dom.domUtils.on(document.body,"click",function(e){
     *     //e娑撹桨绨ㄦ禒璺侯嚠鐠炩槄绱漷his娑撻缚顤嗛悙鐟板毊閸忓啰绀岀�瑙勫灆闁絼閲�
     * })
     * @example
     * UE.dom.domUtils.on(document.body,["click","mousedown"],function(evt){
     *     //evt娑撹桨绨ㄦ禒璺侯嚠鐠炩槄绱漷his娑撻缚顤嗛悙鐟板毊閸忓啰绀岀�纭呰杽
     * })
     */
    on:function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else {
                if (!handler._d) {
                    handler._d = {
                        els : []
                    };
                }
                var key = type + handler.toString(),index = utils.indexOf(handler._d.els,element);
                if (!handler._d[key] || index == -1) {
                    if(index == -1){
                        handler._d.els.push(element);
                    }
                    if(!handler._d[key]){
                        handler._d[key] = function (evt) {
                            return handler.call(evt.srcElement, evt || window.event);
                        };
                    }


                    element.attachEvent('on' + type, handler._d[key]);
                }
            }
        }
        element = null;
    },
    /**
     * 鐟欙綁娅庨崢鐔烘晸DOM娴滃娆㈢紒鎴濈暰
     * @name un
     * @grammar  UE.dom.donUtils.un(element,type,handler)  //閸欏倽顬�code><a href="#on">on</a></code>
     */
    un:function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else {
                var key = type + handler.toString();
                try{
                    element.detachEvent('on' + type, handler._d ? handler._d[key] : handler);
                }catch(e){}
                if (handler._d && handler._d[key]) {
                    var index = utils.indexOf(handler._d.els,element);
                    if(index!=-1){
                        handler._d.els.splice(index,1);
                    }
                    handler._d.els.length == 0 && delete handler._d[key];
                }
            }
        }
    },

    /**
     * 濮ｆ棁绶濋懞鍌滃仯nodeA娑撳氦濡悙绛簅deB閺勵垰鎯侀崗閿嬫箒閻╃鎮撻惃鍕垼缁涙儳鎮曢妴浣哥潣閹冩倳娴犮儱寮风仦鐐达拷閸婏拷
     * @name  isSameElement
     * @grammar UE.dom.domUtils.isSameElement(nodeA,nodeB) => true|false
     * @example
     * <span  style="font-size:12px">ssss</span> and <span style="font-size:12px">bbbbb</span>   => true
     * <span  style="font-size:13px">ssss</span> and <span style="font-size:12px">bbbbb</span>   => false
     */
    isSameElement:function (nodeA, nodeB) {
        if (nodeA.tagName != nodeB.tagName) {
            return false;
        }
        var thisAttrs = nodeA.attributes,
            otherAttrs = nodeB.attributes;
        if (!ie && thisAttrs.length != otherAttrs.length) {
            return false;
        }
        var attrA, attrB, al = 0, bl = 0;
        for (var i = 0; attrA = thisAttrs[i++];) {
            if (attrA.nodeName == 'style') {
                if (attrA.specified) {
                    al++;
                }
                if (domUtils.isSameStyle(nodeA, nodeB)) {
                    continue;
                } else {
                    return false;
                }
            }
            if (ie) {
                if (attrA.specified) {
                    al++;
                    attrB = otherAttrs.getNamedItem(attrA.nodeName);
                } else {
                    continue;
                }
            } else {
                attrB = nodeB.attributes[attrA.nodeName];
            }
            if (!attrB.specified || attrA.nodeValue != attrB.nodeValue) {
                return false;
            }
        }
        // 閺堝褰查懗绲榯trB閻ㄥ嫬鐫橀幀褍瀵橀崥顐＄啊attrA閻ㄥ嫬鐫橀幀褌绠ｆ径鏍箷閺堝鍤滃杈╂畱鐏炵偞锟�
        if (ie) {
            for (i = 0; attrB = otherAttrs[i++];) {
                if (attrB.specified) {
                    bl++;
                }
            }
            if (al != bl) {
                return false;
            }
        }
        return true;
    },

    /**
     * 閸掋倖鏌囬懞鍌滃仯nodeA娑撳氦濡悙绛簅deB閻ㄥ嫬鍘撶槐鐘茬潣閹勬Ц閸氾缚绔撮懛锟�
     * @name isSameStyle
     * @grammar UE.dom.domUtils.isSameStyle(nodeA,nodeB) => true|false
     */
    isSameStyle:function (nodeA, nodeB) {
        var styleA = nodeA.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':'),
            styleB = nodeB.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':');
        if (browser.opera) {
            styleA = nodeA.style;
            styleB = nodeB.style;
            if (styleA.length != styleB.length)
                return false;
            for (var p in styleA) {
                if (/^(\d+|csstext)$/i.test(p)) {
                    continue;
                }
                if (styleA[p] != styleB[p]) {
                    return false;
                }
            }
            return true;
        }
        if (!styleA || !styleB) {
            return styleA == styleB;
        }
        styleA = styleA.split(';');
        styleB = styleB.split(';');
        if (styleA.length != styleB.length) {
            return false;
        }
        for (var i = 0, ci; ci = styleA[i++];) {
            if (utils.indexOf(styleB, ci) == -1) {
                return false;
            }
        }
        return true;
    },
    /**
     * 濡拷鐓￠懞鍌滃仯node閺勵垰鎯佹稉鍝勬健閸忓啰绀�
     * @name isBlockElm
     * @grammar UE.dom.domUtils.isBlockElm(node)  => true|false
     */
    isBlockElm:function (node) {
        return node.nodeType == 1 && (dtd.$block[node.tagName] || styleBlock[domUtils.getComputedStyle(node, 'display')]) && !dtd.$nonChild[node.tagName];
    },
    /**
     * 濡拷绁磏ode閼哄倻鍋ｉ弰顖氭儊娑撶ody閼哄倻鍋�
     * @name isBody
     * @grammar UE.dom.domUtils.isBody(node)   => true|false
     */
    isBody:function (node) {
        return  node && node.nodeType == 1 && node.tagName.toLowerCase() == 'body';
    },
    /**
     * 娴狀殝ode閼哄倻鍋ｆ稉杞拌厬韫囧喛绱濈亸鍡氼嚉閼哄倻鍋ｉ惃鍕瘹鐎规氨顨查崗鍫ｅΝ閻愮arent閹峰棗鍨庨幋锟介崸锟�
     * @name  breakParent
     * @grammar UE.dom.domUtils.breakParent(node,parent) => node
     * @desc
     * <code type="html"><b>ooo</b>閺勭棴ode閼哄倻鍋�
     * <p>xxxx<b>ooo</b>xxx</p> ==> <p>xxx</p><b>ooo</b><p>xxx</p>
     * <p>xxxxx<span>xxxx<b>ooo</b>xxxxxx</span></p>   =>   <p>xxxxx<span>xxxx</span></p><b>ooo</b><p><span>xxxxxx</span></p></code>
     */
    breakParent:function (node, parent) {
        var tmpNode,
            parentClone = node,
            clone = node,
            leftNodes,
            rightNodes;
        do {
            parentClone = parentClone.parentNode;
            if (leftNodes) {
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(leftNodes);
                leftNodes = tmpNode;
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(rightNodes);
                rightNodes = tmpNode;
            } else {
                leftNodes = parentClone.cloneNode(false);
                rightNodes = leftNodes.cloneNode(false);
            }
            while (tmpNode = clone.previousSibling) {
                leftNodes.insertBefore(tmpNode, leftNodes.firstChild);
            }
            while (tmpNode = clone.nextSibling) {
                rightNodes.appendChild(tmpNode);
            }
            clone = parentClone;
        } while (parent !== parentClone);
        tmpNode = parent.parentNode;
        tmpNode.insertBefore(leftNodes, parent);
        tmpNode.insertBefore(rightNodes, parent);
        tmpNode.insertBefore(node, rightNodes);
        domUtils.remove(parent);
        return node;
    },
    /**
     * 濡拷鐓￠懞鍌滃仯node閺勵垰鎯侀弰顖溾敄inline閼哄倻鍋�
     * @name  isEmptyInlineElement
     * @grammar   UE.dom.domUtils.isEmptyInlineElement(node)  => 1|0
     * @example
     * <b><i></i></b> => 1
     * <b><i></i><u></u></b> => 1
     * <b></b> => 1
     * <b>xx<i></i></b> => 0
     */
    isEmptyInlineElement:function (node) {
        if (node.nodeType != 1 || !dtd.$removeEmpty[ node.tagName ]) {
            return 0;
        }
        node = node.firstChild;
        while (node) {
            //婵″倹鐏夐弰顖氬灡瀵よ櫣娈慴ookmark鐏忚精鐑︽潻锟�
            if (domUtils.isBookmarkNode(node)) {
                return 0;
            }
            if (node.nodeType == 1 && !domUtils.isEmptyInlineElement(node) ||
                node.nodeType == 3 && !domUtils.isWhitespace(node)
                ) {
                return 0;
            }
            node = node.nextSibling;
        }
        return 1;

    },

    /**
     * 閸掔娀娅巒ode閼哄倻鍋ｆ稉瀣畱瀹革箑褰哥粚铏规閺傚洦婀扮�鎰Ν閻愶拷
     * @name trimWhiteTextNode
     * @grammar UE.dom.domUtils.trimWhiteTextNode(node)
     */
    trimWhiteTextNode:function (node) {
        function remove(dir) {
            var child;
            while ((child = node[dir]) && child.nodeType == 3 && domUtils.isWhitespace(child)) {
                node.removeChild(child);
            }
        }
        remove('firstChild');
        remove('lastChild');
    },

    /**
     * 閸氬牆鑻焠ode閼哄倻鍋ｆ稉瀣祲閸氬瞼娈戠�鎰Ν閻愶拷
     * @name mergeChild
     * @desc
     * UE.dom.domUtils.mergeChild(node,tagName) //tagName鐟曚礁鎮庨獮鍓佹畱鐎涙劘濡悙鍦畱閺嶅洨顒�
     * @example
     * <p><span style="font-size:12px;">xx<span style="font-size:12px;">aa</span>xx</span></p>
     * ==> UE.dom.domUtils.mergeChild(node,'span')
     * <p><span style="font-size:12px;">xxaaxx</span></p>
     */
    mergeChild:function (node, tagName, attrs) {
        var list = domUtils.getElementsByTagName(node, node.tagName.toLowerCase());
        for (var i = 0, ci; ci = list[i++];) {
            if (!ci.parentNode || domUtils.isBookmarkNode(ci)) {
                continue;
            }
            //span閸楁洜瀚径鍕倞
            if (ci.tagName.toLowerCase() == 'span') {
                if (node === ci.parentNode) {
                    domUtils.trimWhiteTextNode(node);
                    if (node.childNodes.length == 1) {
                        node.style.cssText = ci.style.cssText + ";" + node.style.cssText;
                        domUtils.remove(ci, true);
                        continue;
                    }
                }
                ci.style.cssText = node.style.cssText + ';' + ci.style.cssText;
                if (attrs) {
                    var style = attrs.style;
                    if (style) {
                        style = style.split(';');
                        for (var j = 0, s; s = style[j++];) {
                            ci.style[utils.cssStyleToDomStyle(s.split(':')[0])] = s.split(':')[1];
                        }
                    }
                }
                if (domUtils.isSameStyle(ci, node)) {
                    domUtils.remove(ci, true);
                }
                continue;
            }
            if (domUtils.isSameElement(node, ci)) {
                domUtils.remove(ci, true);
            }
        }
    },

    /**
     * 閸樼喓鏁撻弬瑙勭《getElementsByTagName閻ㄥ嫬鐨濈憗锟�
     * @name getElementsByTagName
     * @grammar UE.dom.domUtils.getElementsByTagName(node,tagName)  => Array  //閼哄倻鍋ｉ梿鍡楁値閺佹壆绮�
     */
    getElementsByTagName:function (node, name) {
        var list = node.getElementsByTagName(name), arr = [];
        for (var i = 0, ci; ci = list[i++];) {
            arr.push(ci);
        }
        return arr;
    },
    /**
     * 鐏忓棜濡悙绛簅de閸氬牆鑻熼崚鎵煑閼哄倻鍋ｆ稉锟�
     * @name mergeToParent
     * @grammar UE.dom.domUtils.mergeToParent(node)
     * @example
     * <span style="color:#fff"><span style="font-size:12px">xxx</span></span> ==> <span style="color:#fff;font-size:12px">xxx</span>
     */
    mergeToParent:function (node) {
        var parent = node.parentNode;
        while (parent && dtd.$removeEmpty[parent.tagName]) {
            if (parent.tagName == node.tagName || parent.tagName == 'A') {//闁藉牆顕產閺嶅洨顒烽崡鏇犲婢跺嫮鎮�
                domUtils.trimWhiteTextNode(parent);
                //span闂囷拷顪呴悧瑙勭暕婢跺嫮鎮� 娑撳秴顦甸悶鍡氱箹閺嶉娈戦幆鍛枌 <span stlye="color:#fff">xxx<span style="color:#ccc">xxx</span>xxx</span>
                if (parent.tagName == 'SPAN' && !domUtils.isSameStyle(parent, node)
                    || (parent.tagName == 'A' && node.tagName == 'SPAN')) {
                    if (parent.childNodes.length > 1 || parent !== node.parentNode) {
                        node.style.cssText = parent.style.cssText + ";" + node.style.cssText;
                        parent = parent.parentNode;
                        continue;
                    } else {
                        parent.style.cssText += ";" + node.style.cssText;
                        //trace:952 a閺嶅洨顒风憰浣风箽閹镐椒绗呴崚鎺斿殠
                        if (parent.tagName == 'A') {
                            parent.style.textDecoration = 'underline';
                        }
                    }
                }
                if (parent.tagName != 'A') {
                    parent === node.parentNode && domUtils.remove(node, true);
                    break;
                }
            }
            parent = parent.parentNode;
        }
    },
    /**
     * 閸氬牆鑻熼懞鍌滃仯node閻ㄥ嫬涔忛崣鍐插帞瀵喕濡悙锟�
     * @name mergeSibling
     * @grammar UE.dom.domUtils.mergeSibling(node)
     * @grammar UE.dom.domUtils.mergeSibling(node,ignorePre)    //ignorePre閹稿洤鐣鹃弰顖氭儊韫囩晫鏆愬锕�帞瀵拷
     * @grammar UE.dom.domUtils.mergeSibling(node,ignorePre,ignoreNext)  //ignoreNext閹稿洤鐣鹃弰顖氭儊韫囩晫鏆愰崣鍐插帞瀵拷
     * @example
     * <b>xxxx</b><b>ooo</b><b>xxxx</b> ==> <b>xxxxoooxxxx</b>
     */
    mergeSibling:function (node, ignorePre, ignoreNext) {
        function merge(rtl, start, node) {
            var next;
            if ((next = node[rtl]) && !domUtils.isBookmarkNode(next) && next.nodeType == 1 && domUtils.isSameElement(node, next)) {
                while (next.firstChild) {
                    if (start == 'firstChild') {
                        node.insertBefore(next.lastChild, node.firstChild);
                    } else {
                        node.appendChild(next.firstChild);
                    }
                }
                domUtils.remove(next);
            }
        }
        !ignorePre && merge('previousSibling', 'firstChild', node);
        !ignoreNext && merge('nextSibling', 'lastChild', node);
    },

    /**
     * 鐠佸墽鐤嗛懞鍌滃仯node閸欏﹤鍙剧�鎰Ν閻愰�绗夋导姘愁枂闁鑵�
     * @name unSelectable
     * @grammar UE.dom.domUtils.unSelectable(node)
     */
    unSelectable:ie || browser.opera ? function (node) {
        //for ie9
        node.onselectstart = function () {
            return false;
        };
        node.onclick = node.onkeyup = node.onkeydown = function () {
            return false;
        };
        node.unselectable = 'on';
        node.setAttribute("unselectable", "on");
        for (var i = 0, ci; ci = node.all[i++];) {
            switch (ci.tagName.toLowerCase()) {
                case 'iframe' :
                case 'textarea' :
                case 'input' :
                case 'select' :
                    break;
                default :
                    ci.unselectable = 'on';
                    node.setAttribute("unselectable", "on");
            }
        }
    } : function (node) {
        node.style.MozUserSelect =
            node.style.webkitUserSelect =
                node.style.KhtmlUserSelect = 'none';
    },
    /**
     * 閸掔娀娅庨懞鍌滃仯node娑撳﹦娈戠仦鐐达拷attrNames閿涘畮ttrNames娑撳搫鐫橀幀褍鎮曠粔鐗堟殶缂侊拷
     * @name  removeAttributes
     * @grammar UE.dom.domUtils.removeAttributes(node,attrNames)
     * @example
     * //Before remove
     * <span style="font-size:14px;" id="test" name="followMe">xxxxx</span>
     * //Remove
     * UE.dom.domUtils.removeAttributes(node,["id","name"]);
     * //After remove
     * <span style="font-size:14px;">xxxxx</span>
     */
    removeAttributes:function (node, attrNames) {
        for (var i = 0, ci; ci = attrNames[i++];) {
            ci = attrFix[ci] || ci;
            switch (ci) {
                case 'className':
                    node[ci] = '';
                    break;
                case 'style':
                    node.style.cssText = '';
                    !browser.ie && node.removeAttributeNode(node.getAttributeNode('style'))
            }
            node.removeAttribute(ci);
        }
    },
    /**
     * 閸︹暊oc娑撳鍨卞杞扮娑擃亝鐖ｇ粵鎯ф倳娑撶皪ag閿涘苯鐫橀幀褌璐焌ttrs閻ㄥ嫬鍘撶槐锟�
     * @name createElement
     * @grammar UE.dom.domUtils.createElement(doc,tag,attrs)  =>  Node  //鏉╂柨娲栭崚娑樼紦閻ㄥ嫯濡悙锟�
     */
    createElement:function (doc, tag, attrs) {
        return domUtils.setAttributes(doc.createElement(tag), attrs)
    },
    /**
     * 娑撻缚濡悙绛簅de濞ｈ濮炵仦鐐达拷attrs閿涘畮ttrs娑撳搫鐫橀幀褔鏁崐鐓庮嚠
     * @name setAttributes
     * @grammar UE.dom.domUtils.setAttributes(node,attrs)  => node
     */
    setAttributes:function (node, attrs) {
        for (var attr in attrs) {
            if(attrs.hasOwnProperty(attr)){
                var value = attrs[attr];
                switch (attr) {
                    case 'class':
                        //ie娑撳顪呮潻娆愮壉鐠у锟介敍瀹籩tAttribute娑撳秷鎹ｆ担婊呮暏
                        node.className = value;
                        break;
                    case 'style' :
                        node.style.cssText = node.style.cssText + ";" + value;
                        break;
                    case 'innerHTML':
                        node[attr] = value;
                        break;
                    case 'value':
                        node.value = value;
                        break;
                    default:
                        node.setAttribute(attrFix[attr] || attr, value);
                }
            }
        }
        return node;
    },

    /**
     * 閼惧嘲褰囬崗鍐element閻ㄥ嫯顓哥粻妤佺壉瀵拷
     * @name getComputedStyle
     * @grammar UE.dom.domUtils.getComputedStyle(element,styleName)  => String //鏉╂柨娲栫�鐟扮安閺嶅嘲绱￠崥宥囆為惃鍕壉瀵繐锟�
     * @example
     * getComputedStyle(document.body,"font-size")  =>  "15px"
     * getComputedStyle(form,"color")  =>  "#ffccdd"
     */
    getComputedStyle:function (element, styleName) {
        //娑擄拷绗呴惃鍕潣閹冨礋閻欘剙顦甸悶锟�
        var pros = 'width height top left';

        if(pros.indexOf(styleName) > -1){
            return element['offset' + styleName.replace(/^\w/,function(s){return s.toUpperCase()})] + 'px';
        }
        //韫囩晫鏆愰弬鍥ㄦ拱閼哄倻鍋�
        if (element.nodeType == 3) {
            element = element.parentNode;
        }
        //ie娑撳獝ont-size閼活櫩ody娑撳鐣炬稊澶夌啊font-size閿涘苯鍨禒宸唘rrentStyle闁插奔绱伴崣鏍у煂鏉╂瑤閲渇ont-size. 閸欐牔绗夐崚鏉跨杽闂勫懎锟介敍灞炬櫊濮濄倓鎱ㄩ弨锟�
        if (browser.ie && browser.version < 9 && styleName == 'font-size' && !element.style.fontSize &&
            !dtd.$empty[element.tagName] && !dtd.$nonChild[element.tagName]) {
            var span = element.ownerDocument.createElement('span');
            span.style.cssText = 'padding:0;border:0;font-family:simsun;';
            span.innerHTML = '.';
            element.appendChild(span);
            var result = span.offsetHeight;
            element.removeChild(span);
            span = null;
            return result + 'px';
        }
        try {
            var value = domUtils.getStyle(element, styleName) ||
                (window.getComputedStyle ? domUtils.getWindow(element).getComputedStyle(element, '').getPropertyValue(styleName) :
                    ( element.currentStyle || element.style )[utils.cssStyleToDomStyle(styleName)]);

        } catch (e) {
            return "";
        }
        return utils.transUnitToPx(utils.fixColor(styleName, value));
    },
    /**
     * 閸︺劌鍘撶槐鐖�ement娑撳﹤鍨归梽顦昹assNames閿涘本鏁幐浣告倱閺冭泛鍨归梽銈咁檵娑擄拷
     * @name removeClasses
     * @grammar UE.dom.domUtils.removeClasses(element,classNames)
     * @example
     * //閹笛嗩攽閺傝纭堕崜宥囨畱dom缂佹挻鐎�
     * <span class="test1 test2 test3">xxx</span>
     * //閹笛嗩攽閺傝纭�
     * UE.dom.domUtils.removeClasses(element,["test1","test3"])
     * //閹笛嗩攽閺傝纭堕崥搴ｆ畱dom缂佹挻鐎�
     * <span class="test2">xxx</span>
     */
    removeClasses:function (elm, classNames) {
        classNames = utils.isArray(classNames) ? classNames :
            utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
            cls = cls.replace(new RegExp('\\b' + ci + '\\b'),'')
        }
        cls = utils.trim(cls).replace(/[ ]{2,}/g,' ');
        if(cls){
            elm.className = cls;
        }else{
            domUtils.removeAttributes(elm,['class']);
        }
    },
    /**
     * 閸︺劌鍘撶槐鐖�ement娑撳﹤顤冮崝鐘辩娑擃亝鐗卞蹇曡className閿涘本鏁幐浣蜂簰缁岀儤鐗搁崚鍡楃磻閻ㄥ嫬顧嬫稉顏嗚閸氾拷
     * 婵″倹鐏夐惄绋挎倱閻ㄥ嫮琚崥宥呯殺娑撳秳绱板ǎ璇插
     * @name addClass
     * @grammar UE.dom.domUtils.addClass(element,classNames)
     */
    addClass:function (elm, classNames) {
        if(!elm)return;
        classNames = utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
            if(!new RegExp('\\b' + ci + '\\b').test(cls)){
                elm.className += ' ' + ci;
            }
        }
    },
    /**
     * 閸掋倖鏌囬崗鍐element閺勵垰鎯侀崠鍛儓閺嶅嘲绱＄猾璇叉倳className,閺�垱瀵旀禒銉р敄閺嶇厧鍨庡锟芥畱婢舵矮閲滅猾璇叉倳,婢舵矮閲滅猾璇叉倳妞ゅ搫绨稉宥呮倱娑旂喎褰叉禒銉︾槷鏉堬拷
     * @name hasClass
     * @grammar UE.dom.domUtils.hasClass(element,className)  =>true|false
     */
    hasClass:function (element, className) {
        className = utils.trim(className).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = element.className;ci=className[i++];){
            if(!new RegExp('\\b' + ci + '\\b').test(cls)){
                return false;
            }
        }
        return i - 1 == className.length;
    },

    /**
     * 闂冪粯顒涙禍瀣╂姒涙顓荤悰灞艰礋
     * @param {Event} evt    闂囷拷顪呯紒鍕矏閻ㄥ嫪绨ㄦ禒璺侯嚠鐠烇拷
     */
    preventDefault:function (evt) {
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    },
    /**
     * 閸掔娀娅庨崗鍐element閻ㄥ嫭鐗卞锟�
     * @grammar UE.dom.domUtils.removeStyle(element,name)        閸掔娀娅庨惃鍕壉瀵繐鎮曠粔锟�
     */
    removeStyle:function (element, name) {
        if (element.style.removeProperty) {
            element.style.removeProperty (name);
        }else {
            element.style.removeAttribute (utils.cssStyleToDomStyle(name));
        }

        if (!element.style.cssText) {
            domUtils.removeAttributes(element, ['style']);
        }
    },
    /**
     * 閼惧嘲褰囬崗鍐element閻ㄥ嫭鐓囨稉顏呯壉瀵繐锟�
     * @name getStyle
     * @grammar UE.dom.domUtils.getStyle(element,name)  => String
     */
    getStyle:function (element, name) {
        var value = element.style[ utils.cssStyleToDomStyle(name) ];
        return utils.fixColor(name, value);
    },
    /**
     * 娑撳搫鍘撶槐鐖�ement鐠佸墽鐤嗛弽宄扮础鐏炵偞锟介崐锟�
     * @name setStyle
     * @grammar UE.dom.domUtils.setStyle(element,name,value)
     */
    setStyle:function (element, name, value) {
        element.style[utils.cssStyleToDomStyle(name)] = value;
    },
    /**
     * 娑撳搫鍘撶槐鐖�ement鐠佸墽鐤嗛弽宄扮础鐏炵偞锟介崐锟�
     * @name setStyles
     * @grammar UE.dom.domUtils.setStyle(element,styles)  //styles娑撶儤鐗卞蹇涙暛閸婄厧顕�
     */
    setStyles:function (element, styles) {
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                domUtils.setStyle(element, name, styles[name]);
            }
        }
    },
    /**
     * 閸掔娀娅巁moz_dirty鐏炵偞锟�
     * @function
     */
    removeDirtyAttr:function (node) {
        for (var i = 0, ci, nodes = node.getElementsByTagName('*'); ci = nodes[i++];) {
            ci.removeAttribute('_moz_dirty');
        }
        node.removeAttribute('_moz_dirty');
    },
    /**
     * 鏉╂柨娲栫�鎰Ν閻愬湱娈戦弫浼村櫤
     * @function
     * @param {Node}    node    閻栨儼濡悙锟�
     * @param  {Function}    fn    鏉╁洦鎶ょ�鎰Ν閻愬湱娈戠憴鍕灟閿涘矁瀚㈡稉铏光敄閿涘苯鍨妤�煂閹碉拷婀佺�鎰Ν閻愬湱娈戦弫浼村櫤
     * @return {Number}    缁楋箑鎮庨弶鈥叉鐎涙劘濡悙鍦畱閺佷即鍣�
     */
    getChildCount:function (node, fn) {
        var count = 0, first = node.firstChild;
        fn = fn || function () {
            return 1;
        };
        while (first) {
            if (fn(first)) {
                count++;
            }
            first = first.nextSibling;
        }
        return count;
    },

    /**
     * 閸掋倖鏌囬弰顖氭儊娑撹櫣鈹栭懞鍌滃仯
     * @function
     * @param {Node}    node    閼哄倻鍋�
     * @return {Boolean}    閺勵垰鎯佹稉铏光敄閼哄倻鍋�
     */
    isEmptyNode:function (node) {
        return !node.firstChild || domUtils.getChildCount(node, function (node) {
            return  !domUtils.isBr(node) && !domUtils.isBookmarkNode(node) && !domUtils.isWhitespace(node)
        }) == 0
    },
    /**
     * 濞撳懐鈹栭懞鍌滃仯閹碉拷婀侀惃鍒assName
     * @function
     * @param {Array}    nodes    閼哄倻鍋ｉ弫鎵矋
     */
    clearSelectedArr:function (nodes) {
        var node;
        while (node = nodes.pop()) {
            domUtils.removeAttributes(node, ['class']);
        }
    },
    /**
     * 鐏忓棙妯夌粈鍝勫隘閸╃喐绮撮崝銊ュ煂閺勫墽銇氶懞鍌滃仯閻ㄥ嫪缍呯純锟�
     * @function
     * @param    {Node}   node    閼哄倻鍋�
     * @param    {window}   win      window鐎电钖�
     * @param    {Number}    offsetTop    鐠烘繄顪ф稉濠冩煙閻ㄥ嫬浜哥粔濠氬櫤
     */
    scrollToView:function (node, win, offsetTop) {
        var getViewPaneSize = function () {
                var doc = win.document,
                    mode = doc.compatMode == 'CSS1Compat';
                return {
                    width:( mode ? doc.documentElement.clientWidth : doc.body.clientWidth ) || 0,
                    height:( mode ? doc.documentElement.clientHeight : doc.body.clientHeight ) || 0
                };
            },
            getScrollPosition = function (win) {
                if ('pageXOffset' in win) {
                    return {
                        x:win.pageXOffset || 0,
                        y:win.pageYOffset || 0
                    };
                }
                else {
                    var doc = win.document;
                    return {
                        x:doc.documentElement.scrollLeft || doc.body.scrollLeft || 0,
                        y:doc.documentElement.scrollTop || doc.body.scrollTop || 0
                    };
                }
            };
        var winHeight = getViewPaneSize().height, offset = winHeight * -1 + offsetTop;
        offset += (node.offsetHeight || 0);
        var elementPosition = domUtils.getXY(node);
        offset += elementPosition.y;
        var currentScroll = getScrollPosition(win).y;
        // offset += 50;
        if (offset > currentScroll || offset < currentScroll - winHeight) {
            win.scrollTo(0, offset + (offset < 0 ? -20 : 20));
        }
    },
    /**
     * 閸掋倖鏌囬懞鍌滃仯閺勵垰鎯佹稉绡祌
     * @function
     * @param {Node}    node   閼哄倻鍋�
     */
    isBr:function (node) {
        return node.nodeType == 1 && node.tagName == 'BR';
    },
    isFillChar:function (node) {
        return node.nodeType == 3 && !node.nodeValue.replace(new RegExp(domUtils.fillChar), '').length
    },
    isStartInblock:function (range) {
        var tmpRange = range.cloneRange(),
            flag = 0,
            start = tmpRange.startContainer,
            tmp;
        while (start && domUtils.isFillChar(start)) {
            tmp = start;
            start = start.previousSibling
        }
        if (tmp) {
            tmpRange.setStartBefore(tmp);
            start = tmpRange.startContainer;
        }
        if (start.nodeType == 1 && domUtils.isEmptyNode(start) && tmpRange.startOffset == 1) {
            tmpRange.setStart(start, 0).collapse(true);
        }
        while (!tmpRange.startOffset) {
            start = tmpRange.startContainer;
            if (domUtils.isBlockElm(start) || domUtils.isBody(start)) {
                flag = 1;
                break;
            }
            var pre = tmpRange.startContainer.previousSibling,
                tmpNode;
            if (!pre) {
                tmpRange.setStartBefore(tmpRange.startContainer);
            } else {
                while (pre && domUtils.isFillChar(pre)) {
                    tmpNode = pre;
                    pre = pre.previousSibling;
                }
                if (tmpNode) {
                    tmpRange.setStartBefore(tmpNode);
                } else {
                    tmpRange.setStartBefore(tmpRange.startContainer);
                }
            }
        }
        return flag && !domUtils.isBody(tmpRange.startContainer) ? 1 : 0;
    },
    isEmptyBlock:function (node) {
        var reg = new RegExp('[ \t\r\n' + domUtils.fillChar + ']', 'g');
        if (node[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').length > 0) {
            return 0;
        }
        for (var n in dtd.$isNotEmpty) {
            if (node.getElementsByTagName(n).length) {
                return 0;
            }
        }
        return 1;
    },

    setViewportOffset:function (element, offset) {
        var left = parseInt(element.style.left) | 0;
        var top = parseInt(element.style.top) | 0;
        var rect = element.getBoundingClientRect();
        var offsetLeft = offset.left - rect.left;
        var offsetTop = offset.top - rect.top;
        if (offsetLeft) {
            element.style.left = left + offsetLeft + 'px';
        }
        if (offsetTop) {
            element.style.top = top + offsetTop + 'px';
        }
    },
    fillNode:function (doc, node) {
        var tmpNode = browser.ie ? doc.createTextNode(domUtils.fillChar) : doc.createElement('br');
        node.innerHTML = '';
        node.appendChild(tmpNode);
    },
    moveChild:function (src, tag, dir) {
        while (src.firstChild) {
            if (dir && tag.firstChild) {
                tag.insertBefore(src.lastChild, tag.firstChild);
            } else {
                tag.appendChild(src.firstChild);
            }
        }
    },
    //閸掋倖鏌囬弰顖氭儊閺堝顤傛径鏍х潣閹拷
    hasNoAttributes:function (node) {
        return browser.ie ? /^<\w+\s*?>/.test(node.outerHTML) : node.attributes.length == 0;
    },
    //閸掋倖鏌囬弰顖氭儊閺勵垳绱潏鎴濇珤閼奉亜鐣炬稊澶屾畱閸欏倹鏆�
    isCustomeNode:function (node) {
        return node.nodeType == 1 && node.getAttribute('_ue_custom_node_');
    },
    isTagNode:function (node, tagName) {
        return node.nodeType == 1 && new RegExp(node.tagName,'i').test(tagName)
    },
    /**
     * 鐎甸�绨琻odelist閻⑩暍ilter鏉╂稖顢戞潻鍥ㄦ姢
     * @name filterNodeList
     * @since 1.2.4+
     * @grammar UE.dom.domUtils.filterNodeList(nodelist,filter,onlyFirst)  => 閼哄倻鍋�
     * @example
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),'div p') //鏉╂柨娲栫粭顑跨娑擃亝妲竏iv閹存牞锟絧閻ㄥ嫯濡悙锟�
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),function(n){return n.getAttribute('src')})
     * //鏉╂柨娲栫粭顑跨娑擃亜鐢玸rc鐏炵偞锟介惃鍕Ν閻愶拷
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),'i',true) //鏉╂柨娲栭弫鎵矋閿涘矂鍣锋潏褰掑厴閺勭棤閼哄倻鍋�
     */
    filterNodeList : function(nodelist,filter,forAll){
        var results = [];
        if(!utils .isFunction(filter)){
            var str = filter;
            filter = function(n){
                return utils.indexOf(utils.isArray(str) ? str:str.split(' '), n.tagName.toLowerCase()) != -1
            };
        }
        utils.each(nodelist,function(n){
            filter(n) && results.push(n)
        });
        return results.length  == 0 ? null : results.length == 1 || !forAll ? results[0] : results
    },

    isInNodeEndBoundary : function (rng,node){
        var start = rng.startContainer;
        if(start.nodeType == 3 && rng.startOffset != start.nodeValue.length){
            return 0;
        }
        if(start.nodeType == 1 && rng.startOffset != start.childNodes.length){
            return 0;
        }
        while(start !== node){
            if(start.nextSibling){
                return 0
            };
            start = start.parentNode;
        }
        return 1;
    }
};
var fillCharReg = new RegExp(domUtils.fillChar, 'g');
///import editor.js
///import core/utils.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
/**
 * @file
 * @name UE.dom.Range
 * @anthor zhanyi
 * @short Range
 * @import editor.js,core/utils.js,core/browser.js,core/dom/domUtils.js,core/dom/dtd.js
 * @desc Range閼煎啫娲跨�鐐靛箛缁紮绱濋張顒傝閺勭柗Editor鎼存洖鐪伴弽绋跨妇缁紮绱濈紒鐔剁w3cRange閸滃eRange娑斿妫块惃鍕▕瀵偊绱濋崠鍛閹恒儱褰涢崪灞界潣閹拷
 */
(function () {
    var guid = 0,
        fillChar = domUtils.fillChar,
        fillData;

    /**
     * 閺囧瓨鏌妑ange閻ㄥ垻ollapse閻樿埖锟�
     * @param  {Range}   range    range鐎电钖�
     */
    function updateCollapse(range) {
        range.collapsed =
            range.startContainer && range.endContainer &&
                range.startContainer === range.endContainer &&
                range.startOffset == range.endOffset;
    }

    function selectOneNode(rng){
        return !rng.collapsed && rng.startContainer.nodeType == 1 && rng.startContainer === rng.endContainer && rng.endOffset - rng.startOffset == 1
    }
    function setEndPoint(toStart, node, offset, range) {
        //婵″倹鐏塶ode閺勵垵鍤滈梻顓炴値閺嶅洨顒风憰浣割樀閻烇拷
        if (node.nodeType == 1 && (dtd.$empty[node.tagName] || dtd.$nonChild[node.tagName])) {
            offset = domUtils.getNodeIndex(node) + (toStart ? 0 : 1);
            node = node.parentNode;
        }
        if (toStart) {
            range.startContainer = node;
            range.startOffset = offset;
            if (!range.endContainer) {
                range.collapse(true);
            }
        } else {
            range.endContainer = node;
            range.endOffset = offset;
            if (!range.startContainer) {
                range.collapse(false);
            }
        }
        updateCollapse(range);
        return range;
    }

    function execContentsAction(range, action) {
        //鐠嬪啯鏆ｆ潏鍦櫕
        //range.includeBookmark();
        var start = range.startContainer,
            end = range.endContainer,
            startOffset = range.startOffset,
            endOffset = range.endOffset,
            doc = range.document,
            frag = doc.createDocumentFragment(),
            tmpStart, tmpEnd;
        if (start.nodeType == 1) {
            start = start.childNodes[startOffset] || (tmpStart = start.appendChild(doc.createTextNode('')));
        }
        if (end.nodeType == 1) {
            end = end.childNodes[endOffset] || (tmpEnd = end.appendChild(doc.createTextNode('')));
        }
        if (start === end && start.nodeType == 3) {
            frag.appendChild(doc.createTextNode(start.substringData(startOffset, endOffset - startOffset)));
            //is not clone
            if (action) {
                start.deleteData(startOffset, endOffset - startOffset);
                range.collapse(true);
            }
            return frag;
        }
        var current, currentLevel, clone = frag,
            startParents = domUtils.findParents(start, true), endParents = domUtils.findParents(end, true);
        for (var i = 0; startParents[i] == endParents[i];) {
            i++;
        }
        for (var j = i, si; si = startParents[j]; j++) {
            current = si.nextSibling;
            if (si == start) {
                if (!tmpStart) {
                    if (range.startContainer.nodeType == 3) {
                        clone.appendChild(doc.createTextNode(start.nodeValue.slice(startOffset)));
                        //is not clone
                        if (action) {
                            start.deleteData(startOffset, start.nodeValue.length - startOffset);
                        }
                    } else {
                        clone.appendChild(!action ? start.cloneNode(true) : start);
                    }
                }
            } else {
                currentLevel = si.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            while (current) {
                if (current === end || current === endParents[j]) {
                    break;
                }
                si = current.nextSibling;
                clone.appendChild(!action ? current.cloneNode(true) : current);
                current = si;
            }
            clone = currentLevel;
        }
        clone = frag;
        if (!startParents[i]) {
            clone.appendChild(startParents[i - 1].cloneNode(false));
            clone = clone.firstChild;
        }
        for (var j = i, ei; ei = endParents[j]; j++) {
            current = ei.previousSibling;
            if (ei == end) {
                if (!tmpEnd && range.endContainer.nodeType == 3) {
                    clone.appendChild(doc.createTextNode(end.substringData(0, endOffset)));
                    //is not clone
                    if (action) {
                        end.deleteData(0, endOffset);
                    }
                }
            } else {
                currentLevel = ei.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            //婵″倹鐏夋稉銈囶伂閸氬瞼楠囬敍灞藉礁鏉堝湱顑囨稉锟筋偧瀹歌尙绮＄悮顐㈢磻婵浠涙禍锟�
            if (j != i || !startParents[i]) {
                while (current) {
                    if (current === start) {
                        break;
                    }
                    ei = current.previousSibling;
                    clone.insertBefore(!action ? current.cloneNode(true) : current, clone.firstChild);
                    current = ei;
                }
            }
            clone = currentLevel;
        }
        if (action) {
            range.setStartBefore(!endParents[i] ? endParents[i - 1] : !startParents[i] ? startParents[i - 1] : endParents[i]).collapse(true);
        }
        tmpStart && domUtils.remove(tmpStart);
        tmpEnd && domUtils.remove(tmpEnd);
        return frag;
    }

    /**
     * @name Range
     * @grammar new UE.dom.Range(document)  => Range 鐎圭偘绶�
     * @desc 閸掓稑缂撴稉锟介嚋鐠虹剰ocument缂佹垵鐣鹃惃鍕敄閻ㄥ嚧ange鐎圭偘绶�
     * - ***startContainer*** 瀵拷顬婃潏鍦櫕閻ㄥ嫬顔愰崳銊ㄥΝ閻愶拷閸欘垯浜掗弰鐥歭ementNode閹存牞锟介弰鐥秂xtNode
     * - ***startOffset*** 鐎圭懓娅掗懞鍌滃仯娑擃厾娈戦崑蹇曅╅柌蹇ョ礉婵″倹鐏夐弰鐥歭ementNode鐏忚鲸妲竎hildNodes娑擃厾娈戠粭顒�殤娑擃亷绱濇俊鍌涚亯閺勭椂extNode鐏忚鲸妲竛odeValue閻ㄥ嫮顑囬崙鐘遍嚋鐎涙顑�
     * - ***endContainer*** 缂佹挻娼潏鍦櫕閻ㄥ嫬顔愰崳銊ㄥΝ閻愶拷閸欘垯浜掗弰鐥歭ementNode閹存牞锟介弰鐥秂xtNode
     * - ***endOffset*** 鐎圭懓娅掗懞鍌滃仯娑擃厾娈戦崑蹇曅╅柌蹇ョ礉婵″倹鐏夐弰鐥歭ementNode鐏忚鲸妲竎hildNodes娑擃厾娈戠粭顒�殤娑擃亷绱濇俊鍌涚亯閺勭椂extNode鐏忚鲸妲竛odeValue閻ㄥ嫮顑囬崙鐘遍嚋鐎涙顑�
     * - ***document*** 鐠虹劋ange閸忓疇浠堥惃鍒cument鐎电钖�
     * - ***collapsed*** 閺勵垰鎯侀弰顖炴４閸氬牏濮搁幀锟�
     */
    var Range = dom.Range = function (document) {
        var me = this;
        me.startContainer =
            me.startOffset =
                me.endContainer =
                    me.endOffset = null;
        me.document = document;
        me.collapsed = true;
    };

    /**
     * 閸掔娀娅巉illData
     * @param doc
     * @param excludeNode
     */
    function removeFillData(doc, excludeNode) {
        try {
            if (fillData && domUtils.inDoc(fillData, doc)) {
                if (!fillData.nodeValue.replace(fillCharReg, '').length) {
                    var tmpNode = fillData.parentNode;
                    domUtils.remove(fillData);
                    while (tmpNode && domUtils.isEmptyInlineElement(tmpNode) &&
                        //safari閻ㄥ垻ontains閺堝〃ug
                        (browser.safari ? !(domUtils.getPosition(tmpNode,excludeNode) & domUtils.POSITION_CONTAINS) : !tmpNode.contains(excludeNode))
                    ) {
                        fillData = tmpNode.parentNode;
                        domUtils.remove(tmpNode);
                        tmpNode = fillData;
                    }
                } else {
                    fillData.nodeValue = fillData.nodeValue.replace(fillCharReg, '');
                }
            }
        } catch (e) {
        }
    }

    /**
     *
     * @param node
     * @param dir
     */
    function mergeSibling(node, dir) {
        var tmpNode;
        node = node[dir];
        while (node && domUtils.isFillChar(node)) {
            tmpNode = node[dir];
            domUtils.remove(node);
            node = tmpNode;
        }
    }

    Range.prototype = {
        /**
         * @name cloneContents
         * @grammar range.cloneContents()  => DocumentFragment
         * @desc 閸忓娈曢柅澶夎厬閻ㄥ嫬鍞寸�鐟板煂娑擄拷閲渇ragment闁插矉绱濇俊鍌涚亯闁灏弰顖溾敄閻ㄥ嫬鐨㈡潻鏂挎礀null
         */
        cloneContents:function () {
            return this.collapsed ? null : execContentsAction(this, 0);
        },
        /**
         * @name deleteContents
         * @grammar range.deleteContents()  => Range
         * @desc 閸掔娀娅庤ぐ鎾冲闁灏懠鍐ㄦ纯娑擃厾娈戦幍锟芥箒閸愬懎顔愰獮鎯扮箲閸ョ�ange鐎圭偘绶ラ敍宀冪箹閺冨墎娈憆ange瀹歌尙绮￠崣妯诲灇娴滃棝妫撮崥鍫㈠Ц閹拷
         * @example
         * DOM Element :
         * <b>x<i>x[x<i>xx]x</b>
         * //閹笛嗩攽閺傝纭堕崥锟�
         * <b>x<i>x<i>|x</b>
         * 濞夈劍鍓皉ange閺�懓褰夋禍锟�
         * range.startContainer => b
         * range.startOffset  => 2
         * range.endContainer => b
         * range.endOffset => 2
         * range.collapsed => true
         */
        deleteContents:function () {
            var txt;
            if (!this.collapsed) {
                execContentsAction(this, 1);
            }
            if (browser.webkit) {
                txt = this.startContainer;
                if (txt.nodeType == 3 && !txt.nodeValue.length) {
                    this.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }
            }
            return this;
        },
        /**
         * @name extractContents
         * @grammar range.extractContents()  => DocumentFragment
         * @desc 鐏忓棗缍嬮崜宥囨畱閸愬懎顔愰弨鎯у煂娑擄拷閲渇ragment闁插苯鑻熸潻鏂挎礀鏉╂瑤閲渇ragment閿涘矁绻栭弮鍓佹畱range瀹歌尙绮￠崣妯诲灇娴滃棝妫撮崥鍫㈠Ц閹拷
         * @example
         * DOM Element :
         * <b>x<i>x[x<i>xx]x</b>
         * //閹笛嗩攽閺傝纭堕崥锟�
         * 鏉╂柨娲栭惃鍒agment闁插瞼娈�dom缂佹挻鐎弰锟�
         * <i>x<i>xx
         * dom閺嶆垳绗傞惃鍕波閺嬪嫭妲�
         * <b>x<i>x<i>|x</b>
         * 濞夈劍鍓皉ange閺�懓褰夋禍锟�
         * range.startContainer => b
         * range.startOffset  => 2
         * range.endContainer => b
         * range.endOffset => 2
         * range.collapsed => true
         */
        extractContents:function () {
            return this.collapsed ? null : execContentsAction(this, 2);
        },
        /**
         * @name  setStart
         * @grammar range.setStart(node,offset)  => Range
         * @desc    鐠佸墽鐤唕ange閻ㄥ嫬绱戞慨瀣╃秴缂冾喕缍呮禍宸抩de閼哄倻鍋ｉ崘鍜冪礉閸嬪繒些闁插繋璐無ffset
         * 婵″倹鐏塶ode閺勭棜lementNode闁梺ffset閹稿洨娈戦弰鐥梙ildNodes娑擃厾娈戠粭顒�殤娑擃亷绱濇俊鍌涚亯閺勭椂extNode闁梺ffset閹稿洨娈戦弰鐥璷deValue閻ㄥ嫮顑囬崙鐘遍嚋鐎涙顑�
         */
        setStart:function (node, offset) {
            return setEndPoint(true, node, offset, this);
        },
        /**
         * 鐠佸墽鐤唕ange閻ㄥ嫮绮ㄩ弶鐔剁秴缂冾喕缍呮禍宸抩de閼哄倻鍋ｉ敍灞戒焊缁夊鍣烘稉绨協fset
         * 婵″倹鐏塶ode閺勭棜lementNode闁梺ffset閹稿洨娈戦弰鐥梙ildNodes娑擃厾娈戠粭顒�殤娑擃亷绱濇俊鍌涚亯閺勭椂extNode闁梺ffset閹稿洨娈戦弰鐥璷deValue閻ㄥ嫮顑囬崙鐘遍嚋鐎涙顑�
         * @name  setEnd
         * @grammar range.setEnd(node,offset)  => Range
         */
        setEnd:function (node, offset) {
            return setEndPoint(false, node, offset, this);
        },
        /**
         * 鐏忓摏ange瀵拷顬婃担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｆ稊瀣倵
         * @name  setStartAfter
         * @grammar range.setStartAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 閹笛嗩攽setStartAfter(i)閸氾拷
         * range.startContainer =>b
         * range.startOffset =>2
         */
        setStartAfter:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * 鐏忓摏ange瀵拷顬婃担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｆ稊瀣
         * @name  setStartBefore
         * @grammar range.setStartBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 閹笛嗩攽setStartBefore(i)閸氾拷
         * range.startContainer =>b
         * range.startOffset =>1
         */
        setStartBefore:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * 鐏忓摏ange缂佹挻娼担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｆ稊瀣倵
         * @name  setEndAfter
         * @grammar range.setEndAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * setEndAfter(i)閸氾拷
         * range.endContainer =>b
         * range.endtOffset =>2
         */
        setEndAfter:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * 鐏忓摏ange缂佹挻娼担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｆ稊瀣
         * @name  setEndBefore
         * @grammar range.setEndBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 閹笛嗩攽setEndBefore(i)閸氾拷
         * range.endContainer =>b
         * range.endtOffset =>1
         */
        setEndBefore:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * 鐏忓摏ange瀵拷顬婃担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｉ崘鍛畱瀵拷顬婃担宥囩枂
         * @name  setStartAtFirst
         * @grammar range.setStartAtFirst(node)  => Range
         */
        setStartAtFirst:function (node) {
            return this.setStart(node, 0);
        },
        /**
         * 鐏忓摏ange瀵拷顬婃担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｉ崘鍛畱缂佹挻娼担宥囩枂
         * @name  setStartAtLast
         * @grammar range.setStartAtLast(node)  => Range
         */
        setStartAtLast:function (node) {
            return this.setStart(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },
        /**
         * 鐏忓摏ange缂佹挻娼担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｉ崘鍛畱瀵拷顬婃担宥囩枂
         * @name  setEndAtFirst
         * @grammar range.setEndAtFirst(node)  => Range
         */
        setEndAtFirst:function (node) {
            return this.setEnd(node, 0);
        },
        /**
         * 鐏忓摏ange缂佹挻娼担宥囩枂鐠佸墽鐤嗛崚鐨�de閼哄倻鍋ｉ崘鍛畱缂佹挻娼担宥囩枂
         * @name  setEndAtLast
         * @grammar range.setEndAtLast(node)  => Range
         */
        setEndAtLast:function (node) {
            return this.setEnd(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },

        /**
         * 闁鑵戠�灞炬殻閻ㄥ嫭瀵氱�姘冲Ν閻愶拷楠炴儼绻戦崶鐐插瘶閸氼偉顕氶懞鍌滃仯閻ㄥ墔ange
         * @name  selectNode
         * @grammar range.selectNode(node)  => Range
         */
        selectNode:function (node) {
            return this.setStartBefore(node).setEndAfter(node);
        },
        /**
         * 闁鑵憂ode閸愬懘鍎撮惃鍕閺堝濡悙鐧哥礉楠炴儼绻戦崶鐐差嚠鎼存梻娈憆ange
         * @name selectNodeContents
         * @grammar range.selectNodeContents(node)  => Range
         * @example
         * <b>xx[x<i>xxx</i>]xxx</b>
         * 閹笛嗩攽閸氾拷
         * <b>[xxx<i>xxx</i>xxx]</b>
         * range.startContainer =>b
         * range.startOffset =>0
         * range.endContainer =>b
         * range.endOffset =>3
         */
        selectNodeContents:function (node) {
            return this.setStart(node, 0).setEndAtLast(node);
        },

        /**
         * 閸忓娈曟稉锟介嚋閺傛壆娈憆ange鐎电钖�
         * @name  cloneRange
         * @grammar range.cloneRange() => Range
         */
        cloneRange:function () {
            var me = this;
            return new Range(me.document).setStart(me.startContainer, me.startOffset).setEnd(me.endContainer, me.endOffset);

        },

        /**
         * 鐠佲晠锟介崠娲４閸氬牆鍩岀亸楣冨劥閿涘矁瀚oStart娑撹櫣婀￠敍灞藉灟闂傤厼鎮庨崚鏉裤仈闁拷
         * @name  collapse
         * @grammar range.collapse() => Range
         * @grammar range.collapse(true) => Range   //闂傤厼鎮庨柅澶婂隘閸掓澘銇旈柈锟�
         */
        collapse:function (toStart) {
            var me = this;
            if (toStart) {
                me.endContainer = me.startContainer;
                me.endOffset = me.startOffset;
            } else {
                me.startContainer = me.endContainer;
                me.startOffset = me.endOffset;
            }
            me.collapsed = true;
            return me;
        },

        /**
         * 鐠嬪啯鏆ange閻ㄥ嫯绔熼悾宀嬬礉娴ｅ灝鍙�閺�墎缂�閸掔増娓剁亸蹇曟畱娴ｅ秶鐤�
         * @name  shrinkBoundary
         * @grammar range.shrinkBoundary()  => Range  //range瀵拷顬婃担宥囩枂閸滃瞼绮ㄩ弶鐔剁秴缂冾噣鍏樼拫鍐╂殻閿涘苯寮憴锟絚ode><a href="#adjustmentboundary">adjustmentBoundary</a></code>
         * @grammar range.shrinkBoundary(true)  => Range  //娴犲懓鐨熼弫鏉戠磻婵缍呯純顕嗙礉韫囩晫鏆愮紒鎾存将娴ｅ秶鐤�
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx]</b><i>xxx</i>
         * [<b><i>xxxx</i>xxxxxxx</b>] ==> <b><i>[xxxx</i>xxxxxxx]</b>
         */
        shrinkBoundary:function (ignoreEnd) {
            var me = this, child,
                collapsed = me.collapsed;
            function check(node){
                return node.nodeType == 1 && !domUtils.isBookmarkNode(node) && !dtd.$empty[node.tagName] && !dtd.$nonChild[node.tagName]
            }
            while (me.startContainer.nodeType == 1 //閺勭棜lement
                && (child = me.startContainer.childNodes[me.startOffset]) //鐎涙劘濡悙閫涚瘍閺勭棜lement
                && check(child)) {
                me.setStart(child, 0);
            }
            if (collapsed) {
                return me.collapse(true);
            }
            if (!ignoreEnd) {
                while (me.endContainer.nodeType == 1//閺勭棜lement
                    && me.endOffset > 0 //婵″倹鐏夐弰顖溾敄閸忓啰绀岀亸閬嶏拷閸戯拷endOffset=0闁絼绠瀍ndOffst-1娑撻缚绀嬮崐纭风礉childNodes[endOffset]閹躲儵鏁�
                    && (child = me.endContainer.childNodes[me.endOffset - 1]) //鐎涙劘濡悙閫涚瘍閺勭棜lement
                    && check(child)) {
                    me.setEnd(child, child.childNodes.length);
                }
            }
            return me;
        },
        /**
         * 閼惧嘲褰囪ぐ鎾冲range閹碉拷婀担宥囩枂閻ㄥ嫬鍙曢崗杈╊毑閸忓牐濡悙鐧哥礉瑜版挸澧爎ange娴ｅ秶鐤嗛崣顖欎簰娴ｅ秳绨弬鍥ㄦ拱閼哄倻鍋ｉ崘鍜冪礉娑旂喎褰叉禒銉ュ瘶閸氼偅鏆ｆ稉顏勫帗缁辩姾濡悙鐧哥礉娑旂喎褰叉禒銉ょ秴娴滃簼琚辨稉顏囧Ν閻愰�绠ｉ梻锟�
         * @name  getCommonAncestor
         * @grammar range.getCommonAncestor([includeSelf, ignoreTextNode])  => Element
         * @example
         * <b>xx[xx<i>xx]x</i>xxx</b> ==>getCommonAncestor() ==> b
         * <b>[<img/>]</b>
         * range.startContainer ==> b
         * range.startOffset ==> 0
         * range.endContainer ==> b
         * range.endOffset ==> 1
         * range.getCommonAncestor() ==> b
         * range.getCommonAncestor(true) ==> img
         * <b>xxx|xx</b>
         * range.startContainer ==> textNode
         * range.startOffset ==> 3
         * range.endContainer ==> textNode
         * range.endOffset ==> 3
         * range.getCommonAncestor() ==> textNode
         * range.getCommonAncestor(null,true) ==> b
         */
        getCommonAncestor:function (includeSelf, ignoreTextNode) {
            var me = this,
                start = me.startContainer,
                end = me.endContainer;
            if (start === end) {
                if (includeSelf && selectOneNode(this)) {
                    start = start.childNodes[me.startOffset];
                    if(start.nodeType == 1)
                        return start;
                }
                //閸欘亝婀侀崷銊ょ瑐閺夈儱姘ㄩ惄鍝ョ搼閻ㄥ嫭鍎忛崘鍏哥瑓閹靛秳绱伴崙铏瑰箛閺勵垱鏋冮張顒傛畱閹懎鍠�
                return ignoreTextNode && start.nodeType == 3 ? start.parentNode : start;
            }
            return domUtils.getCommonAncestor(start, end);
        },
        /**
         * 鐠嬪啯鏆ｆ潏鍦櫕鐎圭懓娅掗敍灞筋渾閺嬫粍妲竧extNode,鐏忚精鐨熼弫鏉戝煂elementNode娑擄拷
         * @name trimBoundary
         * @grammar range.trimBoundary([ignoreEnd])  => Range //true韫囩晫鏆愮紒鎾存将鏉堝湱鏅�
         * @example
         * DOM Element :
         * <b>|xxx</b>
         * startContainer = xxx; startOffset = 0
         * //閹笛嗩攽閸氬孩婀伴弬瑙勭《閸氾拷
         * startContainer = <b>;  startOffset = 0
         * @example
         * Dom Element :
         * <b>xx|x</b>
         * startContainer = xxx;  startOffset = 2
         * //閹笛嗩攽閺堫剚鏌熷▔鏇炴倵閿涘瘓xx鐞氼偄鐤勭�鐐叉躬閸︺劌婀撮崚鍥у瀻閹存劒琚辨稉鐚卐xtNode
         * startContainer = <b>; startOffset = 1
         */
        trimBoundary:function (ignoreEnd) {
            this.txtToElmBoundary();
            var start = this.startContainer,
                offset = this.startOffset,
                collapsed = this.collapsed,
                end = this.endContainer;
            if (start.nodeType == 3) {
                if (offset == 0) {
                    this.setStartBefore(start);
                } else {
                    if (offset >= start.nodeValue.length) {
                        this.setStartAfter(start);
                    } else {
                        var textNode = domUtils.split(start, offset);
                        //鐠虹喐鏌婄紒鎾存将鏉堝湱鏅�
                        if (start === end) {
                            this.setEnd(textNode, this.endOffset - offset);
                        } else if (start.parentNode === end) {
                            this.endOffset += 1;
                        }
                        this.setStartBefore(textNode);
                    }
                }
                if (collapsed) {
                    return this.collapse(true);
                }
            }
            if (!ignoreEnd) {
                offset = this.endOffset;
                end = this.endContainer;
                if (end.nodeType == 3) {
                    if (offset == 0) {
                        this.setEndBefore(end);
                    } else {
                        offset < end.nodeValue.length && domUtils.split(end, offset);
                        this.setEndAfter(end);
                    }
                }
            }
            return this;
        },
        /**
         * 婵″倹鐏夐柅澶婂隘閸︺劍鏋冮張顒傛畱鏉堝湱鏅稉濠忕礉鐏忚鲸澧跨仦鏇拷閸栧搫鍩岄弬鍥ㄦ拱閻ㄥ嫮鍩楅懞鍌滃仯娑擄拷
         * @name  txtToElmBoundary
         * @example
         * Dom Element :
         * <b> |xxx</b>
         * startContainer = xxx;  startOffset = 0
         * //閺堫剚鏌熷▔鏇熷⒔鐞涘苯鎮�
         * startContainer = <b>; startOffset = 0
         * @example
         * Dom Element :
         * <b> xxx| </b>
         * startContainer = xxx; startOffset = 3
         * //閺堫剚鏌熷▔鏇熷⒔鐞涘苯鎮�
         * startContainer = <b>; startOffset = 1
         */
        txtToElmBoundary:function () {
            function adjust(r, c) {
                var container = r[c + 'Container'],
                    offset = r[c + 'Offset'];
                if (container.nodeType == 3) {
                    if (!offset) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'Before'](container);
                    } else if (offset >= container.nodeValue.length) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'After' ](container);
                    }
                }
            }

            if (!this.collapsed) {
                adjust(this, 'start');
                adjust(this, 'end');
            }
            return this;
        },

        /**
         * 閸︺劌缍嬮崜宥夛拷閸栬櫣娈戝锟筋瀶娴ｅ秶鐤嗛崜宥嗗絻閸忋儰绔存稉顏囧Ν閻愯鍨ㄩ懓鍗攔agment閿涘ange閻ㄥ嫬绱戞慨瀣╃秴缂冾喕绱伴崷銊﹀絻閸忋儴濡悙鍦畱閸撳秷绔�
         * @name  insertNode
         * @grammar range.insertNode(node)  => Range //node閸欘垯浜掗弰鐥秂xtNode,elementNode,fragment
         * @example
         * Range :
         * xxx[x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         * 瀵板懏褰冮崗顧玱de :
         * <p>ssss</p>
         * 閹笛嗩攽閺堫剚鏌熷▔鏇炴倵閻ㄥ嚧ange :
         * xxx[<p>ssss</p>x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         */
        insertNode:function (node) {
            var first = node, length = 1;
            if (node.nodeType == 11) {
                first = node.firstChild;
                length = node.childNodes.length;
            }
            this.trimBoundary(true);
            var start = this.startContainer,
                offset = this.startOffset;
            var nextNode = start.childNodes[ offset ];
            if (nextNode) {
                start.insertBefore(node, nextNode);
            } else {
                start.appendChild(node);
            }
            if (first.parentNode === this.endContainer) {
                this.endOffset = this.endOffset + length;
            }
            return this.setStartBefore(first);
        },
        /**
         * 鐠佸墽鐤嗛崗澶嬬垼闂傤厼鎮庢担宥囩枂,toEnd鐠佸墽鐤嗘稉绨峳ue閺冭泛鍘滈弽鍥х殺闂傤厼鎮庨崚浼达拷閸栬櫣娈戠紒鎾崇啲
         * @name  setCursor
         * @grammar range.setCursor([toEnd])  =>  Range   //toEnd娑撶皪rue閺冭绱濋崗澶嬬垼闂傤厼鎮庨崚浼达拷閸栬櫣娈戦張顐㈢啲
         */
        setCursor:function (toEnd, noFillData) {
            return this.collapse(!toEnd).select(noFillData);
        },
        /**
         * 閸掓稑缂撹ぐ鎾冲range閻ㄥ嫪绔存稉顏冨姛缁涙拝绱濈拋鏉跨秿娑撳缍嬮崜宄砤nge閻ㄥ嫪缍呯純顕嗙礉閺傞�绌惰ぐ鎻筼m閺嶆垶鏁奸崣妯绘閿涘矁绻曢懗鑺ュ閸ョ偛甯弶銉ф畱闁灏担宥囩枂
         * @name createBookmark
         * @grammar range.createBookmark([serialize])  => Object  //{start:瀵拷顬婇弽鍥唶,end:缂佹挻娼弽鍥唶,id:serialize} serialize娑撹櫣婀￠弮璁圭礉瀵拷顬婄紒鎾存将閺嶅洩顔囬弰顖涘絻閸忋儴濡悙鍦畱id閿涘苯鎯侀崚娆愭Ц閹绘帒鍙嗛懞鍌滃仯閻ㄥ嫬绱╅悽锟�
         */
        createBookmark:function (serialize, same) {
            var endNode,
                startNode = this.document.createElement('span');
            startNode.style.cssText = 'display:none;line-height:0px;';
            startNode.appendChild(this.document.createTextNode('\uFEFF'));
            startNode.id = '_baidu_bookmark_start_' + (same ? '' : guid++);

            if (!this.collapsed) {
                endNode = startNode.cloneNode(true);
                endNode.id = '_baidu_bookmark_end_' + (same ? '' : guid++);
            }
            this.insertNode(startNode);
            if (endNode) {
                this.collapse().insertNode(endNode).setEndBefore(endNode);
            }
            this.setStartAfter(startNode);
            return {
                start:serialize ? startNode.id : startNode,
                end:endNode ? serialize ? endNode.id : endNode : null,
                id:serialize
            }
        },
        /**
         *  缁夎濮╂潏鍦櫕閸掗鍔熺粵鍙ョ秴缂冾噯绱濋獮璺哄灩闂勩倖褰冮崗銉ф畱娑旓妇顒烽懞鍌滃仯
         *  @name  moveToBookmark
         *  @grammar range.moveToBookmark(bookmark)  => Range //鐠佲晛缍嬮崜宥囨畱range闁鍩岀紒娆忕暰bookmark閻ㄥ嫪缍呯純锟絙ookmark鐎电钖勯弰顖滄暠range.createBookmark閸掓稑缂撻惃锟�
         */
        moveToBookmark:function (bookmark) {
            var start = bookmark.id ? this.document.getElementById(bookmark.start) : bookmark.start,
                end = bookmark.end && bookmark.id ? this.document.getElementById(bookmark.end) : bookmark.end;
            this.setStartBefore(start);
            domUtils.remove(start);
            if (end) {
                this.setEndBefore(end);
                domUtils.remove(end);
            } else {
                this.collapse(true);
            }
            return this;
        },
        /**
         * 鐠嬪啯鏆ange閻ㄥ嫯绔熼悾宀嬬礉娴ｅ灝鍙�閺�儳銇�閸掔増娓舵潻鎴犳畱閻栫Ωlock閼哄倻鍋�
         * @name  enlarge
         * @grammar range.enlarge()  =>  Range
         * @example
         * <p><span>xxx</span><b>x[x</b>xxxxx]</p><p>xxx</p> ==> [<p><span>xxx</span><b>xx</b>xxxxx</p>]<p>xxx</p>
         */
        enlarge:function (toBlock, stopFn) {
            var isBody = domUtils.isBody,
                pre, node, tmp = this.document.createTextNode('');
            if (toBlock) {
                node = this.startContainer;
                if (node.nodeType == 1) {
                    if (node.childNodes[this.startOffset]) {
                        pre = node = node.childNodes[this.startOffset]
                    } else {
                        node.appendChild(tmp);
                        pre = node = tmp;
                    }
                } else {
                    pre = node;
                }
                while (1) {
                    if (domUtils.isBlockElm(node)) {
                        node = pre;
                        while ((pre = node.previousSibling) && !domUtils.isBlockElm(pre)) {
                            node = pre;
                        }
                        this.setStartBefore(node);
                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                node = this.endContainer;
                if (node.nodeType == 1) {
                    if (pre = node.childNodes[this.endOffset]) {
                        node.insertBefore(tmp, pre);
                    } else {
                        node.appendChild(tmp);
                    }
                    pre = node = tmp;
                } else {
                    pre = node;
                }
                while (1) {
                    if (domUtils.isBlockElm(node)) {
                        node = pre;
                        while ((pre = node.nextSibling) && !domUtils.isBlockElm(pre)) {
                            node = pre;
                        }
                        this.setEndAfter(node);
                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                if (tmp.parentNode === this.endContainer) {
                    this.endOffset--;
                }
                domUtils.remove(tmp);
            }

            // 閹碘晛鐫嶆潏鍦櫕閸掔増娓舵径锟�
            if (!this.collapsed) {
                while (this.startOffset == 0) {
                    if (stopFn && stopFn(this.startContainer)) {
                        break;
                    }
                    if (isBody(this.startContainer)) {
                        break;
                    }
                    this.setStartBefore(this.startContainer);
                }
                while (this.endOffset == (this.endContainer.nodeType == 1 ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length)) {
                    if (stopFn && stopFn(this.endContainer)) {
                        break;
                    }
                    if (isBody(this.endContainer)) {
                        break;
                    }
                    this.setEndAfter(this.endContainer);
                }
            }
            return this;
        },
        /**
         * 鐠嬪啯鏆ange閻ㄥ嫯绔熼悾宀嬬礉娴ｅ灝鍙�缂傗晛鐨�閸掔増娓堕崥鍫ワ拷閻ㄥ嫪缍呯純锟�
         * @name adjustmentBoundary
         * @grammar range.adjustmentBoundary() => Range   //閸欏倽顬�code><a href="#shrinkboundary">shrinkBoundary</a></code>
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx</b>]<i>xxx</i>
         */
        adjustmentBoundary:function () {
            if (!this.collapsed) {
                while (!domUtils.isBody(this.startContainer) &&
                    this.startOffset == this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                    ) {
                    this.setStartAfter(this.startContainer);
                }
                while (!domUtils.isBody(this.endContainer) && !this.endOffset) {
                    this.setEndBefore(this.endContainer);
                }
            }
            return this;
        },
        /**
         * 缂佹獧ange闁灏稉顓犳畱閸愬懎顔愬ǎ璇插缂佹瑥鐣鹃惃鍕垼缁涙拝绱濇稉鏄忣渽閻劋绨琲nline閺嶅洨顒�
         * @name applyInlineStyle
         * @grammar range.applyInlineStyle(tagName)        =>  Range    //tagName娑撴椽娓剁憰浣瑰潑閸旂姷娈戦弽宄扮础閺嶅洨顒烽崥锟�
         * @grammar range.applyInlineStyle(tagName,attrs)  =>  Range    //attrs娑撳搫鐫橀幀顫猻on鐎电钖�
         * @desc
         * <code type="html"><p>xxxx[xxxx]x</p>  ==>  range.applyInlineStyle("strong")  ==>  <p>xxxx[<strong>xxxx</strong>]x</p>
         * <p>xx[dd<strong>yyyy</strong>]x</p>  ==>  range.applyInlineStyle("strong")  ==>  <p>xx[<strong>ddyyyy</strong>]x</p>
         * <p>xxxx[xxxx]x</p>  ==>  range.applyInlineStyle("strong",{"style":"font-size:12px"})  ==>  <p>xxxx[<strong style="font-size:12px">xxxx</strong>]x</p></code>
         */
        applyInlineStyle:function (tagName, attrs, list) {
            if (this.collapsed)return this;
            this.trimBoundary().enlarge(false,
                function (node) {
                    return node.nodeType == 1 && domUtils.isBlockElm(node)
                }).adjustmentBoundary();
            var bookmark = this.createBookmark(),
                end = bookmark.end,
                filterFn = function (node) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace(node);
                },
                current = domUtils.getNextDomNode(bookmark.start, false, filterFn),
                node,
                pre,
                range = this.cloneRange();
            while (current && (domUtils.getPosition(current, end) & domUtils.POSITION_PRECEDING)) {
                if (current.nodeType == 3 || dtd[tagName][current.tagName]) {
                    range.setStartBefore(current);
                    node = current;
                    while (node && (node.nodeType == 3 || dtd[tagName][node.tagName]) && node !== end) {
                        pre = node;
                        node = domUtils.getNextDomNode(node, node.nodeType == 1, null, function (parent) {
                            return dtd[tagName][parent.tagName];
                        });
                    }
                    var frag = range.setEndAfter(pre).extractContents(), elm;
                    if (list && list.length > 0) {
                        var level, top;
                        top = level = list[0].cloneNode(false);
                        for (var i = 1, ci; ci = list[i++];) {
                            level.appendChild(ci.cloneNode(false));
                            level = level.firstChild;
                        }
                        elm = level;
                    } else {
                        elm = range.document.createElement(tagName);
                    }
                    if (attrs) {
                        domUtils.setAttributes(elm, attrs);
                    }
                    elm.appendChild(frag);
                    range.insertNode(list ? top : elm);
                    //婢跺嫮鎮婃稉瀣拨缁惧灝婀猘娑撳﹦娈戦幆鍛枌
                    var aNode;
                    if (tagName == 'span' && attrs.style && /text\-decoration/.test(attrs.style) && (aNode = domUtils.findParentByTagName(elm, 'a', true))) {
                        domUtils.setAttributes(aNode, attrs);
                        domUtils.remove(elm, true);
                        elm = aNode;
                    } else {
                        domUtils.mergeSibling(elm);
                        domUtils.clearEmptySibling(elm);
                    }
                    //閸樺娅庣�鎰Ν閻愬湱娴夐崥宀�畱
                    domUtils.mergeChild(elm, attrs);
                    current = domUtils.getNextDomNode(elm, false, filterFn);
                    domUtils.mergeToParent(elm);
                    if (node === end) {
                        break;
                    }
                } else {
                    current = domUtils.getNextDomNode(current, true, filterFn);
                }
            }
            return this.moveToBookmark(bookmark);
        },
        /**
         * 鐎电懓缍嬮崜宄砤nge闁鑵戦惃鍕Ν閻愮櫢绱濋崢缁樺竴缂佹瑥鐣鹃惃鍕垼缁涙崘濡悙鐧哥礉娴ｅ棙鐖ｇ粵鍙ヨ厬閻ㄥ嫬鍞寸�閫涚箽閻ｆ瑱绱濇稉鏄忣渽閻劋绨径鍕倞inline閸忓啰绀�
         * @name removeInlineStyle
         * @grammar range.removeInlineStyle(tagNames)  => Range  //tagNames 娑撴椽娓剁憰浣稿箵閹哄娈戦弽宄扮础閺嶅洨顒烽崥锟介弨顖涘瘮"b"閹存牞锟絒"b","i","u"]
         * @desc
         * <code type="html">xx[x<span>xxx<em>yyy</em>zz]z</span>  => range.removeInlineStyle(["em"])  => xx[x<span>xxxyyyzz]z</span></code>
         */
        removeInlineStyle:function (tagNames) {
            if (this.collapsed)return this;
            tagNames = utils.isArray(tagNames) ? tagNames : [tagNames];
            this.shrinkBoundary().adjustmentBoundary();
            var start = this.startContainer, end = this.endContainer;
            while (1) {
                if (start.nodeType == 1) {
                    if (utils.indexOf(tagNames, start.tagName.toLowerCase()) > -1) {
                        break;
                    }
                    if (start.tagName.toLowerCase() == 'body') {
                        start = null;
                        break;
                    }
                }
                start = start.parentNode;
            }
            while (1) {
                if (end.nodeType == 1) {
                    if (utils.indexOf(tagNames, end.tagName.toLowerCase()) > -1) {
                        break;
                    }
                    if (end.tagName.toLowerCase() == 'body') {
                        end = null;
                        break;
                    }
                }
                end = end.parentNode;
            }
            var bookmark = this.createBookmark(),
                frag,
                tmpRange;
            if (start) {
                tmpRange = this.cloneRange().setEndBefore(bookmark.start).setStartBefore(start);
                frag = tmpRange.extractContents();
                tmpRange.insertNode(frag);
                domUtils.clearEmptySibling(start, true);
                start.parentNode.insertBefore(bookmark.start, start);
            }
            if (end) {
                tmpRange = this.cloneRange().setStartAfter(bookmark.end).setEndAfter(end);
                frag = tmpRange.extractContents();
                tmpRange.insertNode(frag);
                domUtils.clearEmptySibling(end, false, true);
                end.parentNode.insertBefore(bookmark.end, end.nextSibling);
            }
            var current = domUtils.getNextDomNode(bookmark.start, false, function (node) {
                return node.nodeType == 1;
            }), next;
            while (current && current !== bookmark.end) {
                next = domUtils.getNextDomNode(current, true, function (node) {
                    return node.nodeType == 1;
                });
                if (utils.indexOf(tagNames, current.tagName.toLowerCase()) > -1) {
                    domUtils.remove(current, true);
                }
                current = next;
            }
            return this.moveToBookmark(bookmark);
        },
        /**
         * 瀵版鍩屾稉锟介嚋閼奉亪妫撮崥鍫㈡畱閼哄倻鍋�鐢摜鏁ゆ禍搴ゅ箯閸欐牞鍤滈梻顓炴嫲閻ㄥ嫯濡悙鐧哥礉娓氬顪嗛崶鍓у閼哄倻鍋�
         * @name  getClosedNode
         * @grammar range.getClosedNode()  => node|null
         * @example
         * <b>xxxx[<img />]xxx</b>
         */
        getClosedNode:function () {
            var node;
            if (!this.collapsed) {
                var range = this.cloneRange().adjustmentBoundary().shrinkBoundary();
                if (selectOneNode(range)) {
                    var child = range.startContainer.childNodes[range.startOffset];
                    if (child && child.nodeType == 1 && (dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName])) {
                        node = child;
                    }
                }
            }
            return node;
        },
        /**
         * 閺嶈宓佽ぐ鎾冲range闁鑵戦崘鍛啇閼哄倻鍋ｉ敍鍫濇躬妞ょ敻娼版稉濠呫�閻滈璐熼崣宥囨閺勫墽銇氶敍锟�
         * @name select
         * @grammar range.select();  => Range
         */
        select:browser.ie ? function (noFillData, textRange) {
            var nativeRange;
            if (!this.collapsed)
                this.shrinkBoundary();
            var node = this.getClosedNode();
            if (node && !textRange) {
                try {
                    nativeRange = this.document.body.createControlRange();
                    nativeRange.addElement(node);
                    nativeRange.select();
                } catch (e) {}
                return this;
            }
            var bookmark = this.createBookmark(),
                start = bookmark.start,
                end;
            nativeRange = this.document.body.createTextRange();
            nativeRange.moveToElementText(start);
            nativeRange.moveStart('character', 1);
            if (!this.collapsed) {
                var nativeRangeEnd = this.document.body.createTextRange();
                end = bookmark.end;
                nativeRangeEnd.moveToElementText(end);
                nativeRange.setEndPoint('EndToEnd', nativeRangeEnd);
            } else {
                if (!noFillData && this.startContainer.nodeType != 3) {
                    //娴ｈ法鏁�span>|x<span>閸ュ搫鐣炬担蹇撳帨閺嶏拷
                    var tmpText = this.document.createTextNode(fillChar),
                        tmp = this.document.createElement('span');
                    tmp.appendChild(this.document.createTextNode(fillChar));
                    start.parentNode.insertBefore(tmp, start);
                    start.parentNode.insertBefore(tmpText, start);
                    //瑜版挾鍋,i,u閺冭绱濇稉宥堝厴濞撳懘娅巌娑撳﹨绔熼惃鍒�
                    removeFillData(this.document, tmpText);
                    fillData = tmpText;
                    mergeSibling(tmp, 'previousSibling');
                    mergeSibling(start, 'nextSibling');
                    nativeRange.moveStart('character', -1);
                    nativeRange.collapse(true);
                }
            }
            this.moveToBookmark(bookmark);
            tmp && domUtils.remove(tmp);
            //IE閸︺劑娈ｉ挊蹇曞Ц閹椒绗呮稉宥嗘暜閹镐购ange閹垮秳缍旈敍瀹慳tch娑擄拷绗�
            try {
                nativeRange.select();
            } catch (e) {
            }
            return this;
        } : function (notInsertFillData) {
            var win = domUtils.getWindow(this.document),
                sel = win.getSelection(),
                txtNode;
            //FF娑撳鍙ч梻顓″殰閸斻劑鏆辨妯绘濠婃艾濮╅弶鈥虫躬閸忔娊妫磀ialog閺冩湹绱扮捄锟�
            //ff娑撳顪嗛弸婊�瑝body.focus鐏忓棔绗夐懗钘夌暰娴ｅ秹妫撮崥鍫濆帨閺嶅洤鍩岀紓鏍帆閸ｃ劌鍞�
            browser.gecko ? this.document.body.focus() : win.focus();
            if (sel) {
                sel.removeAllRanges();
                // trace:870 chrome/safari閸氬氦绔熼弰鐥搑鐎甸�绨梻顓炴値瀵版ⅳange娑撳秷鍏樼�姘秴 閹碉拷浜掗崢缁樺竴娴滃棗鍨介弬锟�
                // this.startContainer.nodeType != 3 &&! ((child = this.startContainer.childNodes[this.startOffset]) && child.nodeType == 1 && child.tagName == 'BR'
                if (this.collapsed) {
                    //opear婵″倹鐏夊▽鈩冩箒閼哄倻鍋ｉ幒銉ф絻閿涘苯甯悽鐔烘畱娑撳秷鍏樻径鐔风暰娴ｏ拷娑撳秷鍏橀崷鈺瀘dy閻ㄥ嫮顑囨稉锟介獓閹绘帒鍙嗙粚铏规閼哄倻鍋�
                    if (notInsertFillData && browser.opera && !domUtils.isBody(this.startContainer) && this.startContainer.nodeType == 1) {
                        var tmp = this.document.createTextNode('');
                        this.insertNode(tmp).setStart(tmp, 0).collapse(true);
                    }

                    //婢跺嫮鎮婇崗澶嬬垼閽�棄婀弬鍥ㄦ拱閼哄倻鍋ｉ惃鍕剰閸愶拷
                    //婢跺嫮鎮婃禒銉ょ瑓閻ㄥ嫭鍎忛崘锟�
                    //<b>|xxxx</b>
                    //<b>xxxx</b>|xxxx
                    //xxxx<b>|</b>
                    if (!notInsertFillData && (
                        this.startContainer.nodeType != 3 ||
                            this.startOffset == 0 && (!this.startContainer.previousSibling || this.startContainer.previousSibling.nodeType !=3)
                        )) {
                        txtNode = this.document.createTextNode(fillChar);
                        //鐠虹喓娼冮崜宥堢珶鐠э拷
                        this.insertNode(txtNode);
                        removeFillData(this.document, txtNode);
                        mergeSibling(txtNode, 'previousSibling');
                        mergeSibling(txtNode, 'nextSibling');
                        fillData = txtNode;
                        this.setStart(txtNode, browser.webkit ? 1 : 0).collapse(true);
                    }
                }
                var nativeRange = this.document.createRange();
                nativeRange.setStart(this.startContainer, this.startOffset);
                nativeRange.setEnd(this.endContainer, this.endOffset);
                sel.addRange(nativeRange);
            }
            return this;
        },
        /**
         * 濠婃艾濮╅弶陇鐑﹂崚鏉跨秼閻掔ange瀵拷顬婇惃鍕秴缂冿拷
         * @name scrollToView
         * @grammar range.scrollToView([win,offset]) => Range //闁藉牆顕畐indow鐎电钖勯敍宀冨娑撳秵瀵氱�姘剧礉鐏忓棔浜掔紓鏍帆閸栧搫鐓欓惃鍕崶閸欙絼璐熼崙锟給ffset閸嬪繒些闁诧拷
         */
        scrollToView:function (win, offset) {
            win = win ? window : domUtils.getWindow(this.document);
            var me = this,
                span = me.document.createElement('span');
            //trace:717
            span.innerHTML = '&nbsp;';
            me.cloneRange().insertNode(span);
            domUtils.scrollToView(span, win, offset);
            domUtils.remove(span);
            return me;
        }
    };
})();
///import editor.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
///import core/dom/Range.js
/**
 * @class baidu.editor.dom.Selection    Selection缁拷
 */
(function () {

    function getBoundaryInformation( range, start ) {
        var getIndex = domUtils.getNodeIndex;
        range = range.duplicate();
        range.collapse( start );
        var parent = range.parentElement();
        //婵″倹鐏夐懞鍌滃仯闁插本鐥呴張澶婄摍閼哄倻鍋ｉ敍宀�纯閹恒儵锟介崙锟�
        if ( !parent.hasChildNodes() ) {
            return  {container:parent, offset:0};
        }
        var siblings = parent.children,
                child,
                testRange = range.duplicate(),
                startIndex = 0, endIndex = siblings.length - 1, index = -1,
                distance;
        while ( startIndex <= endIndex ) {
            index = Math.floor( (startIndex + endIndex) / 2 );
            child = siblings[index];
            testRange.moveToElementText( child );
            var position = testRange.compareEndPoints( 'StartToStart', range );
            if ( position > 0 ) {
                endIndex = index - 1;
            } else if ( position < 0 ) {
                startIndex = index + 1;
            } else {
                //trace:1043
                return  {container:parent, offset:getIndex( child )};
            }
        }
        if ( index == -1 ) {
            testRange.moveToElementText( parent );
            testRange.setEndPoint( 'StartToStart', range );
            distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
            siblings = parent.childNodes;
            if ( !distance ) {
                child = siblings[siblings.length - 1];
                return  {container:child, offset:child.nodeValue.length};
            }

            var i = siblings.length;
            while ( distance > 0 ){
                distance -= siblings[ --i ].nodeValue.length;
            }
            return {container:siblings[i], offset:-distance};
        }
        testRange.collapse( position > 0 );
        testRange.setEndPoint( position > 0 ? 'StartToStart' : 'EndToStart', range );
        distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
        if ( !distance ) {
            return  dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName] ?
                {container:parent, offset:getIndex( child ) + (position > 0 ? 0 : 1)} :
                {container:child, offset:position > 0 ? 0 : child.childNodes.length}
        }
        while ( distance > 0 ) {
            try {
                var pre = child;
                child = child[position > 0 ? 'previousSibling' : 'nextSibling'];
                distance -= child.nodeValue.length;
            } catch ( e ) {
                return {container:parent, offset:getIndex( pre )};
            }
        }
        return  {container:child, offset:position > 0 ? -distance : child.nodeValue.length + distance}
    }

    /**
     * 鐏忓攨eRange鏉烆剚宕叉稉绡焌nge鐎电钖�
     * @param {Range}   ieRange    ieRange鐎电钖�
     * @param {Range}   range      Range鐎电钖�
     * @return  {Range}  range       鏉╂柨娲栨潪顒佸床閸氬海娈慠ange鐎电钖�
     */
    function transformIERangeToRange( ieRange, range ) {
        if ( ieRange.item ) {
            range.selectNode( ieRange.item( 0 ) );
        } else {
            var bi = getBoundaryInformation( ieRange, true );
            range.setStart( bi.container, bi.offset );
            if ( ieRange.compareEndPoints( 'StartToEnd', ieRange ) != 0 ) {
                bi = getBoundaryInformation( ieRange, false );
                range.setEnd( bi.container, bi.offset );
            }
        }
        return range;
    }

    /**
     * 閼惧嘲绶眎eRange
     * @param {Selection} sel    Selection鐎电钖�
     * @return {ieRange}    瀵版鍩宨eRange
     */
    function _getIERange( sel ) {
        var ieRange;
        //ie娑撳婀侀崣顖濆厴閹躲儵鏁�
        try {
            ieRange = sel.getNative().createRange();
        } catch ( e ) {
            return null;
        }
        var el = ieRange.item ? ieRange.item( 0 ) : ieRange.parentElement();
        if ( ( el.ownerDocument || el ) === sel.document ) {
            return ieRange;
        }
        return null;
    }

    var Selection = dom.Selection = function ( doc ) {
        var me = this, iframe;
        me.document = doc;
        if ( ie ) {
            iframe = domUtils.getWindow( doc ).frameElement;
            domUtils.on( iframe, 'beforedeactivate', function () {
                me._bakIERange = me.getIERange();
            } );
            domUtils.on( iframe, 'activate', function () {
                try {
                    if ( !_getIERange( me ) && me._bakIERange ) {
                        me._bakIERange.select();
                    }
                } catch ( ex ) {
                }
                me._bakIERange = null;
            } );
        }
        iframe = doc = null;
    };

    Selection.prototype = {
        /**
         * 閼惧嘲褰囬崢鐔烘晸seleciton鐎电钖�
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getNative
         * @return {Selection}    閼惧嘲绶眘election鐎电钖�
         */
        getNative:function () {
            var doc = this.document;
            try {
                return !doc ? null : ie ? doc.selection : domUtils.getWindow( doc ).getSelection();
            } catch ( e ) {
                return null;
            }
        },
        /**
         * 閼惧嘲绶眎eRange
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getIERange
         * @return {ieRange}    鏉╂柨娲杋e閸樼喓鏁撻惃鍑碼nge
         */
        getIERange:function () {
            var ieRange = _getIERange( this );
            if ( !ieRange ) {
                if ( this._bakIERange ) {
                    return this._bakIERange;
                }
            }
            return ieRange;
        },

        /**
         * 缂傛挸鐡ㄨぐ鎾冲闁灏惃鍓卆nge閸滃矂锟介崠铏规畱瀵拷顬婇懞鍌滃仯
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.cache
         */
        cache:function () {
            this.clear();
            this._cachedRange = this.getRange();
            this._cachedStartElement = this.getStart();
            this._cachedStartElementPath = this.getStartElementPath();
        },

        getStartElementPath:function () {
            if ( this._cachedStartElementPath ) {
                return this._cachedStartElementPath;
            }
            var start = this.getStart();
            if ( start ) {
                return domUtils.findParents( start, true, null, true )
            }
            return [];
        },
        /**
         * 濞撳懐鈹栫紓鎾崇摠
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.clear
         */
        clear:function () {
            this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null;
        },
        /**
         * 缂傛牞绶崳銊︽Ц閸氾箑绶遍崚棰佺啊闁灏�
         */
        isFocus:function () {
            try {
                return browser.ie && _getIERange( this ) || !browser.ie && this.getNative().rangeCount ? true : false;
            } catch ( e ) {
                return false;
            }

        },
        /**
         * 閼惧嘲褰囬柅澶婂隘鐎电懓绨查惃鍑碼nge
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getRange
         * @returns {baidu.editor.dom.Range}    瀵版鍩孯ange鐎电钖�
         */
        getRange:function () {
            var me = this;
            function optimze( range ) {
                var child = me.document.body.firstChild,
                        collapsed = range.collapsed;
                while ( child && child.firstChild ) {
                    range.setStart( child, 0 );
                    child = child.firstChild;
                }
                if ( !range.startContainer ) {
                    range.setStart( me.document.body, 0 )
                }
                if ( collapsed ) {
                    range.collapse( true );
                }
            }

            if ( me._cachedRange != null ) {
                return this._cachedRange;
            }
            var range = new baidu.editor.dom.Range( me.document );
            if ( ie ) {
                var nativeRange = me.getIERange();
                if ( nativeRange ) {
                    transformIERangeToRange( nativeRange, range );
                } else {
                    optimze( range );
                }
            } else {
                var sel = me.getNative();
                if ( sel && sel.rangeCount ) {
                    var firstRange = sel.getRangeAt( 0 );
                    var lastRange = sel.getRangeAt( sel.rangeCount - 1 );
                    range.setStart( firstRange.startContainer, firstRange.startOffset ).setEnd( lastRange.endContainer, lastRange.endOffset );
                    if ( range.collapsed && domUtils.isBody( range.startContainer ) && !range.startOffset ) {
                        optimze( range );
                    }
                } else {
                    //trace:1734 閺堝褰查懗钘夊嚒缂佸繋绗夐崷鈺爋m閺嶆垳绗傛禍鍡礉閺嶅洩鐦戦惃鍕Ν閻愶拷
                    if ( this._bakRange && domUtils.inDoc( this._bakRange.startContainer, this.document ) ){
                        return this._bakRange;
                    }
                    optimze( range );
                }
            }
            return this._bakRange = range;
        },

        /**
         * 閼惧嘲褰囧锟筋瀶閸忓啰绀岄敍宀�暏娴滃海濮搁幀浣稿冀鐏忥拷
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getStart
         * @return {Element}     閼惧嘲绶卞锟筋瀶閸忓啰绀�
         */
        getStart:function () {
            if ( this._cachedStartElement ) {
                return this._cachedStartElement;
            }
            var range = ie ? this.getIERange() : this.getRange(),
                    tmpRange,
                    start, tmp, parent;
            if ( ie ) {
                if ( !range ) {
                    //todo 缂佹瑧顑囨稉锟介嚋閸婄厧褰查懗鎴掔窗閺堝妫舵０锟�
                    return this.document.body.firstChild;
                }
                //control閸忓啰绀�
                if ( range.item ){
                    return range.item( 0 );
                }
                tmpRange = range.duplicate();
                //娣囶喗顒渋e娑擄拷b>x</b>[xx] 闂傤厼鎮庨崥锟�b>x|</b>xx
                tmpRange.text.length > 0 && tmpRange.moveStart( 'character', 1 );
                tmpRange.collapse( 1 );
                start = tmpRange.parentElement();
                parent = tmp = range.parentElement();
                while ( tmp = tmp.parentNode ) {
                    if ( tmp == start ) {
                        start = parent;
                        break;
                    }
                }
            } else {
                range.shrinkBoundary();
                start = range.startContainer;
                if ( start.nodeType == 1 && start.hasChildNodes() ){
                    start = start.childNodes[Math.min( start.childNodes.length - 1, range.startOffset )];
                }
                if ( start.nodeType == 3 ){
                    return start.parentNode;
                }
            }
            return start;
        },
        /**
         * 瀵版鍩岄柅澶婂隘娑擃厾娈戦弬鍥ㄦ拱
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getText
         * @return  {String}    闁灏稉顓炲瘶閸氼偆娈戦弬鍥ㄦ拱
         */
        getText:function () {
            var nativeSel, nativeRange;
            if ( this.isFocus() && (nativeSel = this.getNative()) ) {
                nativeRange = browser.ie ? nativeSel.createRange() : nativeSel.getRangeAt( 0 );
                return browser.ie ? nativeRange.text : nativeRange.toString();
            }
            return '';
        }
    };
})();
/**
 * @file
 * @name UE.Editor
 * @short Editor
 * @import editor.js,core/utils.js,core/EventBase.js,core/browser.js,core/dom/dtd.js,core/dom/domUtils.js,core/dom/Range.js,core/dom/Selection.js,plugins/serialize.js
 * @desc 缂傛牞绶崳銊ゅ瘜缁紮绱濋崠鍛儓缂傛牞绶崳銊﹀絹娓氭稓娈戞径褔鍎撮崚鍡楀彆閻劍甯撮崣锟�
 */
(function () {
    var uid = 0,_selectionChangeTimer;

    /**
     * 閺囨寧宕瞫rc閸滃ref
     * @private
     * @ignore
     * @param div
     */
    function replaceSrc( div ) {
        var imgs = div.getElementsByTagName( "img" ),
                orgSrc;
        for ( var i = 0, img; img = imgs[i++]; ) {
            if ( orgSrc = img.getAttribute( "orgSrc" ) ) {
                img.src = orgSrc;
                img.removeAttribute( "orgSrc" );
            }
        }
        var as = div.getElementsByTagName( "a" );
        for ( var i = 0, ai; ai = as[i++]; i++ ) {
            if ( ai.getAttribute( 'data_ue_src' ) ) {
                ai.setAttribute( 'href', ai.getAttribute( 'data_ue_src' ) )
            }
        }
    }

    /**
     * @private
     * @ignore
     * @param form  缂傛牞绶崳銊﹀閸︺劎娈慺orm閸忓啰绀�
     * @param editor  缂傛牞绶崳銊ョ杽娓氬顕挒锟�
     */
    function setValue( form, editor ) {
        var textarea;
        if ( editor.textarea ) {
            if ( utils.isString( editor.textarea ) ) {
                for ( var i = 0, ti, tis = domUtils.getElementsByTagName( form, 'textarea' ); ti = tis[i++]; ) {
                    if ( ti.id == 'ueditor_textarea_' + editor.options.textarea ) {
                        textarea = ti;
                        break;
                    }
                }
            } else {
                textarea = editor.textarea;
            }
        }
        if ( !textarea ) {
            form.appendChild( textarea = domUtils.createElement( document, 'textarea', {
                'name':editor.options.textarea,
                'id':'ueditor_textarea_' + editor.options.textarea,
                'style':"display:none"
            } ) );
            //娑撳秷顪呮禍褏鏁撴径姘嚋textarea
            editor.textarea = textarea;
        }
        textarea.value = editor.hasContents() ?
            (editor.options.allHtmlEnabled ? editor.getAllHtml() : editor.getContent(null,null,true)):
            ''
    }

    /**
     * UEditor缂傛牞绶崳銊ц
     * @name Editor
     * @desc 閸掓稑缂撴稉锟介嚋鐠虹喓绱潏鎴濇珤鐎圭偘绶�
     * - ***container*** 缂傛牞绶崳銊ヮ啇閸ｃ劌顕挒锟�
     * - ***iframe*** 缂傛牞绶崠鍝勭厵閹碉拷婀惃鍒琭rame鐎电钖�
     * - ***window*** 缂傛牞绶崠鍝勭厵閹碉拷婀惃鍓媔ndow
     * - ***document*** 缂傛牞绶崠鍝勭厵閹碉拷婀惃鍒cument鐎电钖�
     * - ***body*** 缂傛牞绶崠鍝勭厵閹碉拷婀惃鍒dy鐎电钖�
     * - ***selection*** 缂傛牞绶崠鍝勭厵閻ㄥ嫰锟介崠鍝勵嚠鐠烇拷
     */
    var Editor = UE.Editor = function ( options ) {
        var me = this;
        me.uid = uid++;
        EventBase.call( me );
        me.commands = {};
        me.options = utils.extend( utils.clone(options || {}),UEDITOR_CONFIG, true );
        //鐠佸墽鐤嗘妯款吇閻ㄥ嫬鐖堕悽銊ョ潣閹拷
        me.setOpt( {
            isShow:true,
            autoClearinitialContent:false,
            iframeCssUrl:me.options.UEDITOR_HOME_URL + 'themes/iframe.css',
            textarea:'editorValue',
            focus:false,
            initialFrameHeight:me.options.minFrameHeight||320,//閸忕厧顔愰懓浣哄閺堫剟鍘ょ純顕��
            minFrameWidth:800,
            minFrameHeight:220,
            autoClearEmptyNode:true,
            fullscreen:false,
            readonly:false,
            imagePopup:true,
            enterTag:'p',
            pageBreakTag:'_baidu_page_break_tag_',
            customDomain:false,
            lang:'zh-cn',
            langPath:me.options.UEDITOR_HOME_URL + 'lang/',
            theme:'default',
            themePath:me.options.UEDITOR_HOME_URL + 'themes/',
            allHtmlEnabled:false,
            scaleEnabled:false,
            tableNativeEditInFF:false
        } );

        utils.loadFile( document, {
            src:me.options.langPath + me.options.lang + "/" + me.options.lang + ".js",
            tag:"script",
            type:"text/javascript",
            defer:"defer"
        }, function () {
            //閸掓繂顬婇崠鏍ㄥ絻娴狅拷
            for ( var pi in UE.plugins ) {
                UE.plugins[pi].call( me );
            }
            me.langIsReady = true;

            me.fireEvent( "langReady" );
        });
        UE.instants['ueditorInstant' + me.uid] = me;
    };
    Editor.prototype = {
        /**
         * 瑜版挾绱潏鎴濇珤ready閸氬孩澧界悰灞肩炊閸忋儳娈慺n,婵″倹鐏夌紓鏍帆閸ｃ劌鍑＄紒蹇撶暚閹存仧eady閿涘苯姘ㄦす顑跨瑐閹笛嗩攽fn閿涘畺n閻ㄥ嫪鑵戦惃鍓噃is閺勵垳绱潏鎴濇珤鐎圭偘绶ラ妴锟�
         * 婢堆囧劥閸掑棛娈戠�鐐扮伐閹恒儱褰涢柈浠嬫付鐟曚焦鏂侀崷銊嚉閺傝纭堕崘鍛村劥閹笛嗩攽閿涘苯鎯侀崚娆忔躬IE娑撳褰查懗鎴掔窗閹躲儵鏁婇妴锟�
         * @name ready
         * @grammar editor.ready(fn) fn閺勵垰缍嬬紓鏍帆閸ｃ劍瑕嗛弻鎾炽偨閸氬孩澧界悰宀�畱function
         * @example
         * var editor = new UE.ui.Editor();
         * editor.render("myEditor");
         * editor.ready(function(){
         *     editor.setContent("濞嗐垼绻嬫担璺ㄦ暏UEditor閿涳拷);
         * })
         */
        ready:function ( fn ) {
            var me = this;
            if ( fn ){
                me.isReady ? fn.apply( me ) : me.addListener( 'ready', fn );
            }
        },
        /**
         * 娑撹櫣绱潏鎴濇珤鐠佸墽鐤嗘妯款吇閸欏倹鏆熼崐绗猴拷閼汇儳鏁ら幋鐑藉帳缂冾喕璐熺粚鐚寸礉閸掓瑤浜掓妯款吇闁板秶鐤嗘稉鍝勫櫙
         * @grammar editor.setOpt(key,value);      //娴肩姴鍙嗘稉锟介嚋闁款喓锟介崐鐓庮嚠
         * @grammar editor.setOpt({ key:value});   //娴肩姴鍙嗘稉锟介嚋json鐎电钖�
         */
        setOpt:function ( key, val ) {
            var obj = {};
            if ( utils.isString( key ) ) {
                obj[key] = val
            } else {
                obj = key;
            }
            utils.extend( this.options, obj, true );
        },
        /**
         * 闁匡拷鐦夌紓鏍帆閸ｃ劌鐤勬笟瀣嚠鐠烇拷
         * @name destroy
         * @grammar editor.destroy();
         */
        destroy:function () {

            var me = this;
            me.fireEvent( 'destroy' );
            var container = me.container.parentNode;
            var textarea = me.textarea;
            if(!textarea){
                textarea = document.createElement('textarea');
                container.parentNode.insertBefore(textarea,container);
            }else{
                textarea.style.display = ''
            }
            textarea.style.width = container.offsetWidth + 'px';
            textarea.style.height = container.offsetHeight + 'px';
            textarea.value = me.getContent();
            textarea.id = me.key;
            container.innerHTML = '';
            domUtils.remove( container );
            var key = me.key;
            //trace:2004
            for ( var p in me ) {
                if ( me.hasOwnProperty( p ) ) {
                    delete this[p];
                }
            }
            UE.delEditor(key);

        },
        /**
         * 濞撳弶鐓嬬紓鏍帆閸ｃ劎娈慏OM閸掔増瀵氱�姘啇閸ｎ煉绱濊箛鍛淬�娑撴柨褰ч懗鍊熺殶閻劋绔村▎锟�
         * @name render
         * @grammar editor.render(containerId);    //閸欘垯浜掗幐鍥х暰娑擄拷閲滅�鐟版珤ID
         * @grammar editor.render(containerDom);   //娑旂喎褰叉禒銉ф纯閹恒儲瀵氱�姘啇閸ｃ劌顕挒锟�
         */
        render:function ( container ) {
            var me = this, options = me.options;
            if ( utils.isString(container) ) {
                container = document.getElementById( container );
            }
            if ( container ) {
                var useBodyAsViewport = ie && browser.version < 9,
                        html = ( ie && browser.version < 9 ? '' : '<!DOCTYPE html>') +
                                '<html xmlns=\'http://www.w3.org/1999/xhtml\'' + (!useBodyAsViewport ? ' class=\'view\'' : '') + '><head>' +
                                ( options.iframeCssUrl ? '<link rel=\'stylesheet\' type=\'text/css\' href=\'' + utils.unhtml( options.iframeCssUrl ) + '\'/>' : '' ) +
                                '<style type=\'text/css\'>' +
                            //鐠佸墽鐤嗛崶娑樻噯閻ㄥ嫮鏆�潏锟�
                                '.view{padding:0;word-wrap:break-word;cursor:text;height:100%;}\n' +
                            //鐠佸墽鐤嗘妯款吇鐎涙ぞ缍嬮崪灞界摟閸欙拷
                            //font-family娑撳秷鍏橀崨銏ゆ娓氭寧鏁奸敍灞芥躬safari娑撳獝illchar娴兼碍婀佺憴锝嗙�闂傤噣顣�
                                'body{margin:8px;font-family:sans-serif;font-size:16px;}' +
                            //鐠佸墽鐤嗗▓浣冩儰闂傜绐�
                                'p{margin:5px 0;}'
                                + ( options.initialStyle || '' ) +
                                '</style></head><body' + (useBodyAsViewport ? ' class=\'view\'' : '') + '></body>';
                if ( options.customDomain && document.domain != location.hostname ) {
                    html += '<script>window.parent.UE.instants[\'ueditorInstant' + me.uid + '\']._setup(document);</script></html>';
                    container.appendChild( domUtils.createElement( document, 'iframe', {
                        id:'baidu_editor_' + me.uid,
                        width:"100%",
                        height:"100%",
                        frameborder:"0",
                        src:'javascript:void(function(){document.open();document.domain="' + document.domain + '";' +
                                'document.write("' + html + '");document.close();}())'
                    } ) );
                } else {
                    container.innerHTML = '<iframe id="' + 'baidu_editor_' + this.uid + '"' + 'width="100%" height="100%" scroll="no" frameborder="0" ></iframe>';
                    var doc = container.firstChild.contentWindow.document;
                    //閸樼粯甯�禍鍡楀斧閺夈儳娈戦崚銈嗘焽!browser.webkit閿涘苯娲滄稉杞扮窗鐎佃壈鍤nload濞夈劌鍞介惃鍕皑娴犳湹绗夌憴锕�絺
                    doc.open();
                    doc.write( html + '</html>' );
                    doc.close();
                    me._setup( doc );
                }
                container.style.overflow = 'hidden';
            }
        },
        /**
         * 缂傛牞绶崳銊ュ灥婵瀵�
         * @private
         * @ignore
         * @param {Element} doc 缂傛牞绶崳鈫杅rame娑擃厾娈戦弬鍥ㄣ�鐎电钖�
         */
        _setup:function ( doc ) {
            var me = this,
                    options = me.options;
            if ( ie ) {
                doc.body.disabled = true;
                doc.body.contentEditable = true;
                doc.body.disabled = false;
            } else {
                doc.body.contentEditable = true;
                doc.body.spellcheck = false;
            }
            me.document = doc;
            me.window = doc.defaultView || doc.parentWindow;
            me.iframe = me.window.frameElement;
            me.body = doc.body;
            //鐠佸墽鐤嗙紓鏍帆閸ｃ劍娓剁亸蹇涚彯鎼达拷
            me.setHeight( Math.max(options.minFrameHeight, options.initialFrameHeight));
            me.selection = new dom.Selection( doc );
            //gecko閸掓繂顬婇崠鏍ф皑閼宠棄绶遍崚鐨塧nge,閺冪姵纭堕崚銈嗘焽isFocus娴滐拷
            var geckoSel;
            if ( browser.gecko && (geckoSel = this.selection.getNative()) ) {
                geckoSel.removeAllRanges();
            }
            this._initEvents();
            if ( options.initialContent ) {
                if ( options.autoClearinitialContent ) {
                    var oldExecCommand = me.execCommand;
                    me.execCommand = function () {
                        me.fireEvent( 'firstBeforeExecCommand' );
                        oldExecCommand.apply( me, arguments );
                    };
                    this._setDefaultContent( options.initialContent );
                } else
                    this.setContent( options.initialContent, true );
            }
            //娑撶orm閹绘劒姘﹂幓鎰返娑擄拷閲滈梾鎰閻ㄥ墖extarea
            for ( var form = this.iframe.parentNode; !domUtils.isBody( form ); form = form.parentNode ) {
                if ( form.tagName == 'FORM' ) {
                    domUtils.on( form, 'submit', function () {
                        setValue( this, me );
                    } );
                    break;
                }
            }
            //缂傛牞绶崳銊ょ瑝閼虫垝璐熺粚鍝勫敶鐎癸拷
            if ( domUtils.isEmptyNode( me.body ) ) {
                me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
            }
            //婵″倹鐏夌憰浣圭湴focus, 鐏忚鲸濡搁崗澶嬬垼鐎规矮缍呴崚鏉垮敶鐎圭懓绱戞慨锟�
            if ( options.focus ) {
                setTimeout( function () {
                    me.focus();
                    //婵″倹鐏夐懛顏勫З濞撳懘娅庡锟芥絻閿涘苯姘ㄦ稉宥夋付鐟曚礁浠泂electionchange;
                    !me.options.autoClearinitialContent && me._selectionChange();
                },0);
            }
            if ( !me.container ) {
                me.container = this.iframe.parentNode;
            }
            if ( options.fullscreen && me.ui ) {
                me.ui.setFullScreen( true );
            }
            try {
                me.document.execCommand( '2D-position', false, false );
            } catch ( e ) {}
            try {
                me.document.execCommand( 'enableInlineTableEditing', false, options.tableNativeEditInFF );
            } catch ( e ) {}
            try {
                me.document.execCommand( 'enableObjectResizing', false, false );
            } catch ( e ) {
                domUtils.on(me.body,browser.ie ? 'resizestart' : 'resize', function( evt ) {
                    domUtils.preventDefault(evt)
                });

            }
            me.isReady = 1;
            me.fireEvent( 'ready' );
            options.onready && options.onready.call(me);
            if ( !browser.ie ) {
                domUtils.on( me.window, ['blur', 'focus'], function ( e ) {
                    //chrome娑撳绱伴崙铏瑰箛alt+tab閸掑洦宕查弮璁圭礉鐎佃壈鍤ч柅澶婂隘娴ｅ秶鐤嗘稉宥咁嚠
                    if ( e.type == 'blur' ) {
                        me._bakRange = me.selection.getRange();
                        try{
                            me.selection.getNative().removeAllRanges();
                        }catch(e){}

                    } else {
                        try {
                            me._bakRange && me._bakRange.select();
                        } catch ( e ) {
                        }
                    }
                } );
            }
            //trace:1518 ff3.6body娑撳秴顧愮�娑崇礉娴兼艾顕遍懛瀵稿仯閸戣崵鈹栭惂钘夘樀閺冪姵纭堕懢宄扮繁閻掞妇鍋�
            if ( browser.gecko && browser.version <= 10902 ) {
                //娣囶喖顦緁f3.6閸掓繂顬婇崠鏍箻閺夈儻绱濇稉宥堝厴閻愮懓鍤懢宄扮繁閻掞妇鍋�
                me.body.contentEditable = false;
                setTimeout( function () {
                    me.body.contentEditable = true;
                }, 100 );
                setInterval( function () {
                    me.body.style.height = me.iframe.offsetHeight - 20 + 'px'
                }, 100 )
            }
            !options.isShow && me.setHide();
            options.readonly && me.setDisabled();
        },
        /**
         * 閸氬本顒炵紓鏍帆閸ｃ劎娈戦弫鐗堝祦閿涘奔璐熼幓鎰唉閺佺増宓侀崑姘櫙婢跺浄绱濇稉鏄忣渽閻劋绨担鐘虫Ц閹靛濮╅幓鎰唉閻ㄥ嫭鍎忛崘锟�
         * @name sync
         * @grammar editor.sync(); //娴犲海绱潏鎴濇珤閻ㄥ嫬顔愰崳銊ユ倻娑撳﹥鐓￠幍鎾呯礉婵″倹鐏夐幍鎯у煂鐏忓崬鎮撳銉︽殶閹癸拷
         * @grammar editor.sync(formID); //formID閸掕泛鐣炬稉锟介嚋鐟曚礁鎮撳銉︽殶閹诡喚娈慺orm閻ㄥ埇d,缂傛牞绶崳銊ф畱閺佺増宓佹导姘倱濮濄儱鍩屾担鐘冲瘹鐎规瓲orm娑擄拷
         * @desc
         * 閸氬骸褰撮崣鏍х繁閺佺増宓佸妤呮暛閸婇棿濞囬悽銊ょ稑鐎圭懓娅掓稉濠傜繁''name''鐏炵偞锟介敍灞筋渾閺嬫粍鐥呴張澶婃皑娴ｈ法鏁ら崣鍌涙殶娴肩姴鍙嗛惃锟�textarea''
         * @example
         * editor.sync();
         * form.sumbit(); //form閸欐﹢鍣哄鑼病閹稿洤鎮滄禍鍞俹rm閸忓啰绀�
         *
         */
        sync:function ( formId ) {
            var me = this,
                    form = formId ? document.getElementById( formId ) :
                            domUtils.findParent( me.iframe.parentNode, function ( node ) {
                                return node.tagName == 'FORM'
                            }, true );
            form && setValue( form, me );
        },
        /**
         * 鐠佸墽鐤嗙紓鏍帆閸ｃ劑鐝惔锟�
         * @name setHeight
         * @grammar editor.setHeight(number);  //缁绢垱鏆熼崐纭风礉娑撳秴鐢崡鏇氱秴
         */
        setHeight:function ( height ) {
            if ( height !== parseInt( this.iframe.parentNode.style.height ) ) {
                this.iframe.parentNode.style.height = height + 'px';
            }
            this.document.body.style.height = height - 20 + 'px';
        },

        /**
         * 閼惧嘲褰囩紓鏍帆閸ｃ劌鍞寸�锟�
         * @name getContent
         * @grammar editor.getContent()  => String //閼汇儳绱潏鎴濇珤娑擃厼褰ч崠鍛儓鐎涙顑�&lt;p&gt;&lt;br /&gt;&lt;/p/&gt;"娴兼俺绻戦崶鐐碘敄閵嗭拷
         * @grammar editor.getContent(fn)  => String
         * @example
         * getContent姒涙顓婚弰顖欑窗閻滄媽鐨熼悽鈺sContents閺夈儱鍨介弬顓犵椽鏉堟垵娅掗弰顖氭儊娑撹櫣鈹栭敍灞筋渾閺嬫粍妲搁敍灞芥皑閻╁瓨甯存潻鏂挎礀缁屽搫鐡х粭锔胯
         * 娴ｇ姳绡冮崣顖欎簰娴肩姴鍙嗘稉锟介嚋fn閺夈儲甯撮弴绺sContents閻ㄥ嫬浼愭担婊愮礉鐎规艾鍩楅崚銈嗘焽閻ㄥ嫯顬冮崚锟�
         * editor.getContent(function(){
         *     return false //缂傛牞绶崳銊︾梾閺堝鍞寸�锟介敍瀹焑tContent閻╁瓨甯存潻鏂挎礀缁岋拷
         * })
         */
        getContent:function ( cmd, fn, isPreview ) {
            var me = this;
            if ( cmd && utils.isFunction( cmd ) ) {
                fn = cmd;
                cmd = '';
            }
            if ( fn ? !fn() : !this.hasContents() ) {
                return '';
            }
            me.fireEvent( 'beforegetcontent', cmd );
            var reg = new RegExp( domUtils.fillChar, 'g' ),
            //ie娑撳褰囧妤冩畱html閸欘垵鍏樻导姘箒\n鐎涙ê婀敍宀冾渽閸樼粯甯�敍灞芥躬婢跺嫮鎮妑eplace(/[\t\r\n]*/g,'');娴狅絿鐖滄姗�櫤閻ㄥ垞n娑撳秷鍏橀崢濠氭珟
                    html = me.body.innerHTML.replace( reg, '' ).replace( />[\t\r\n]*?</g, '><' );
            me.fireEvent( 'aftergetcontent', cmd );
            if ( me.serialize ) {
                var node = me.serialize.parseHTML( html );
                node = me.serialize.transformOutput( node );
                html = me.serialize.toHTML( node );
            }

            if ( ie && isPreview ) {
                //trace:2471
                //娑撱倓閲渂r娴兼艾顕遍懛瀵糕敄鐞涘矉绱濋幍锟戒簰鏉╂瑩鍣烽崗鍫熸暈鐟欏棙甯�
                html = html//.replace(/<\s*br\s*\/?\s*>/gi,'<br/><br/>')
                        .replace( /<p>\s*?<\/p>/g, '<p>&nbsp;</p>' );
            } else {
                //婢舵矮閲�nbsp;鐟曚浇娴嗛幑銏″灇缁岀儤鐗搁崝锟絥bsp;閻ㄥ嫬鑸板蹇ョ礉鐟曚椒绗夋０鍕瀲閺冩湹绱伴幍锟藉灇娑擄拷閲�
                html = html.replace( /(&nbsp;)+/g, function ( s ) {
                    for ( var i = 0, str = [], l = s.split( ';' ).length - 1; i < l; i++ ) {
                        str.push( i % 2 == 0 ? ' ' : '&nbsp;' );
                    }
                    return str.join( '' );
                } );
            }

            return  html;

        },
        /**
         * 閸欐牕绶辩�灞炬殻閻ㄥ埅tml娴狅絿鐖滈敍灞藉讲娴犮儳娲块幒銉︽▔缁�儤鍨氱�灞炬殻閻ㄥ埅tml閺傚洦銆�
         * @name getAllHtml
         * @grammar editor.getAllHtml()  => String
         */
        getAllHtml:function () {
            var me = this,
                    headHtml = {html:''},
                    html = '';
            me.fireEvent( 'getAllHtml', headHtml );
            return '<html><head>' + (me.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + me.options.charset + '"/>' : '') + me.document.getElementsByTagName( 'head' )[0].innerHTML + headHtml.html + '</head>'
                    + '<body ' + (ie && browser.version < 9 ? 'class="view"' : '') + '>' + me.getContent( null, null, true ) + '</body></html>';
        },
        /**
         * 瀵版鍩岀紓鏍帆閸ｃ劎娈戠痪顖涙瀮閺堫剙鍞寸�鐧哥礉娴ｅ棔绱版穱婵堟殌濞堜絻鎯ら弽鐓庣础
         * @name getPlainTxt
         * @grammar editor.getPlainTxt()  => String
         */
        getPlainTxt:function () {
            var reg = new RegExp( domUtils.fillChar, 'g' ),
                    html = this.body.innerHTML.replace( /[\n\r]/g, '' );//ie鐟曚礁鍘涢崢璁崇啊\n閸︺劌顦甸悶锟�
            html = html.replace( /<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n' )
                    .replace( /<br\/?>/gi, '\n' )
                    .replace( /<[^>/]+>/g, '' )
                    .replace( /(\n)?<\/([^>]+)>/g, function ( a, b, c ) {
                        return dtd.$block[c] ? '\n' : b ? b : '';
                    } );
            //閸欐牕鍤弶銉ф畱缁岀儤鐗告导姘箒c2a0娴兼艾褰夐幋鎰础閻緤绱濇径鍕倞鏉╂瑧顬岄幆鍛枌\u00a0
            return html.replace( reg, '' ).replace( /\u00a0/g, ' ' ).replace( /&nbsp;/g, ' ' );
        },

        /**
         * 閼惧嘲褰囩紓鏍帆閸ｃ劋鑵戦惃鍕嚱閺傚洦婀伴崘鍛啇,濞屸剝婀佸▓浣冩儰閺嶇厧绱�
         * @name getContentTxt
         * @grammar editor.getContentTxt()  => String
         */
        getContentTxt:function () {
            var reg = new RegExp( domUtils.fillChar, 'g' );
            //閸欐牕鍤弶銉ф畱缁岀儤鐗告导姘箒c2a0娴兼艾褰夐幋鎰础閻緤绱濇径鍕倞鏉╂瑧顬岄幆鍛枌\u00a0
            return this.body[browser.ie ? 'innerText' : 'textContent'].replace( reg, '' ).replace( /\u00a0/g, ' ' );
        },

        /**
         * 鐏忓攧tml鐠佸墽鐤嗛崚鎵椽鏉堟垵娅掓稉锟�婵″倹鐏夐弰顖滄暏娴滃骸鍨垫慨瀣閺冨墎绮扮紓鏍帆閸ｃ劏绁撮崚婵嗭拷閿涘苯鍨箛鍛淬�閺�儳婀猺eady閺傝纭堕崘鍛村劥閹笛嗩攽
         * @name setContent
         * @grammar editor.setContent(html)
         * @example
         * var editor = new UE.ui.Editor()
         * editor.ready(function(){
         *     //闂囷拷顪卹eady閸氬孩澧界悰宀嬬礉閸氾箑鍨崣顖濆厴閹躲儵鏁�
         *     editor.setContent("濞嗐垼绻嬫担璺ㄦ暏UEditor閿涳拷);
         * })
         */
        setContent:function ( html, notFireSelectionchange ) {
            var me = this,
                    inline = utils.extend( {a:1, A:1}, dtd.$inline, true ),
                    lastTagName;

            html = html
                    .replace( /^[ \t\r\n]*?</, '<' )
                    .replace( />[ \t\r\n]*?$/, '>' )
                    .replace( />[\t\r\n]*?</g, '><' )//娴狅絿鐖滄姗�櫤閻ㄥ垞n娑撳秷鍏橀崢濠氭珟
                    .replace( /[\s\/]?(\w+)?>[ \t\r\n]*?<\/?(\w+)/gi, function ( a, b, c ) {
                        if ( b ) {
                            lastTagName = c;
                        } else {
                            b = lastTagName;
                        }
                        return !inline[b] && !inline[c] ? a.replace( />[ \t\r\n]*?</, '><' ) : a;
                    } );
            html = {'html':html};
            me.fireEvent( 'beforesetcontent',html );
            html = html.html;
            var serialize = this.serialize;
            if ( serialize ) {
                var node = serialize.parseHTML( html );
                node = serialize.transformInput( node );
                node = serialize.filter( node );
                html = serialize.toHTML( node );
            }
            //html.replace(new RegExp('[\t\n\r' + domUtils.fillChar + ']*','g'),'');
            //閸樼粯甯�禍鍝眛\n\r 婵″倹鐏夐張澶嬪絻閸忋儳娈戞禒锝囩垳閿涘苯婀┃鎰垳閸掑洦宕查幍锟筋瀫閸楄櫕澧嶅妤伳佸蹇旀閿涘本宕茬悰宀勫厴娑撱垺甯�禍锟�
            //\r閸︹暐e娑撳娈戞稉宥呭讲鐟欎礁鐡х粭锔肩礉閸︺劍绨惍浣稿瀼閹广垺妞傛导姘綁閹存劕顧嬫稉锟絥bsp;
            //trace:1559
            this.body.innerHTML = html.replace( new RegExp( '[\r' + domUtils.fillChar + ']*', 'g' ), '' );
            //婢跺嫮鎮奿e6娑撳獢nnerHTML閼奉亜濮╃亸鍡欐祲鐎电鐭惧鍕祮閸栨牗鍨氱紒婵嗩嚠鐠侯垰绶為惃鍕６妫帮拷
            if ( browser.ie && browser.version < 7 ) {
                replaceSrc( this.document.body );
            }
            //缂佹瑦鏋冮張顒佸灗閼板崨nline閼哄倻鍋ｆ總姊￠弽鍥╊劮
            if ( me.options.enterTag == 'p' ) {

                var child = this.body.firstChild, tmpNode;
                if ( !child || child.nodeType == 1 &&
                        (dtd.$cdata[child.tagName] ||
                                domUtils.isCustomeNode( child )
                                )
                        && child === this.body.lastChild ) {
                    this.body.innerHTML = '<p>' + (browser.ie ? '&nbsp;' : '<br/>') + '</p>' + this.body.innerHTML;

                } else {
                    var p = me.document.createElement( 'p' );
                    while ( child ) {
                        while ( child && (child.nodeType == 3 || child.nodeType == 1 && dtd.p[child.tagName] && !dtd.$cdata[child.tagName]) ) {
                            tmpNode = child.nextSibling;
                            p.appendChild( child );
                            child = tmpNode;
                        }
                        if ( p.firstChild ) {
                            if ( !child ) {
                                me.body.appendChild( p );
                                break;
                            } else {
                                me.body.insertBefore( p, child );
                                p = me.document.createElement( 'p' );
                            }
                        }
                        child = child.nextSibling;
                    }
                }
            }
            me.fireEvent( 'aftersetcontent' );
            me.fireEvent( 'contentchange' );
            !notFireSelectionchange && me._selectionChange();
            //濞撳懘娅庢穱婵嗙摠閻ㄥ嫰锟介崠锟�
            me._bakRange = me._bakIERange = null;
            //trace:1742 setContent閸氬穵ecko閼宠棄绶遍崚鎵妽閻愬綊妫舵０锟�
            var geckoSel;
            if ( browser.gecko && (geckoSel = this.selection.getNative()) ) {
                geckoSel.removeAllRanges();
            }
        },

        /**
         * 鐠佲晝绱潏鎴濇珤閼惧嘲绶遍悞锔惧仯閿涘oEnd绾喖鐣緁ocus娴ｅ秶鐤�
         * @name focus
         * @grammar editor.focus([toEnd])   //姒涙顓籪ocus閸掓壆绱潏鎴濇珤婢舵挳鍎撮敍瀹紀End娑撶皪rue閺冪ocus閸掓澘鍞寸�鐟扮啲闁拷
         */
        focus:function ( toEnd ) {
            try {
                var me = this,
                        rng = me.selection.getRange();
                if ( toEnd ) {
                    rng.setStartAtLast( me.body.lastChild ).setCursor( false, true );
                } else {
                    rng.select( true );
                }
            } catch ( e ) {
            }
        },

        /**
         * 閸掓繂顬婇崠鏈娴滃娆㈤崣濠囧劥閸掑棔绨ㄦ禒鏈靛敩閻烇拷
         * @private
         * @ignore
         */
        _initEvents:function () {
            var me = this,
                    doc = me.document,
                    win = me.window;
            me._proxyDomEvent = utils.bind( me._proxyDomEvent, me );
            domUtils.on( doc, ['click', 'contextmenu', 'mousedown', 'keydown', 'keyup', 'keypress', 'mouseup', 'mouseover', 'mouseout', 'selectstart'], me._proxyDomEvent );
            domUtils.on( win, ['focus', 'blur'], me._proxyDomEvent );
            domUtils.on( doc, ['mouseup', 'keydown'], function ( evt ) {
                //閻楄鐣╅柨顔荤瑝鐟欙箑褰俿electionchange
                if ( evt.type == 'keydown' && (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey) ) {
                    return;
                }
                if ( evt.button == 2 )return;
                me._selectionChange( 250, evt );
            } );
            //婢跺嫮鎮婇幏鏍ㄥ
            //ie ff娑撳秷鍏樻禒搴☆檱鏉堣瀚嬮崗锟�
            //chrome閸欘亪鎷＄�閫涚矤婢舵牞绔熼幏鏍у弳閻ㄥ嫬鍞寸�纭呯箖濠婏拷
            var innerDrag = 0, source = browser.ie ? me.body : me.document, dragoverHandler;
            domUtils.on( source, 'dragstart', function () {
                innerDrag = 1;
            } );
            domUtils.on( source, browser.webkit ? 'dragover' : 'drop', function () {
                return browser.webkit ?
                        function () {
                            clearTimeout( dragoverHandler );
                            dragoverHandler = setTimeout( function () {
                                if ( !innerDrag ) {
                                    var sel = me.selection,
                                            range = sel.getRange();
                                    if ( range ) {
                                        var common = range.getCommonAncestor();
                                        if ( common && me.serialize ) {
                                            var f = me.serialize,
                                                    node =
                                                            f.filter(
                                                                    f.transformInput(
                                                                            f.parseHTML(
                                                                                    f.word( common.innerHTML )
                                                                            )
                                                                    )
                                                            );
                                            common.innerHTML = f.toHTML( node );
                                        }
                                    }
                                }
                                innerDrag = 0;
                            }, 200 );
                        } :
                        function ( e ) {
                            if ( !innerDrag ) {
                                e.preventDefault ? e.preventDefault() : (e.returnValue = false);
                            }
                            innerDrag = 0;
                        }
            }() );
        },
        /**
         * 鐟欙箑褰傛禍瀣╂娴狅絿鎮�
         * @private
         * @ignore
         */
        _proxyDomEvent:function ( evt ) {
            return this.fireEvent( evt.type.replace( /^on/, '' ), evt );
        },
        /**
         * 閸欐ê瀵查柅澶婂隘
         * @private
         * @ignore
         */
        _selectionChange:function ( delay, evt ) {
            var me = this;
            //閺堝鍘滈弽鍥ㄥ閸嬫electionchange 娑撹桨绨＄憴锝呭枀閺堢專ocus閺冨墎鍋ｉ崙绫筼urce娑撳秷鍏樼憴锕�絺閺囧瓨鏁煎銉ュ徔閺嶅繒濮搁幀浣烘畱闂傤噣顣介敍鍧皁urce閸涙垝鎶otNeedUndo=1閿涳拷
//            if ( !me.selection.isFocus() ){
//                return;
//            }
            var hackForMouseUp = false;
            var mouseX, mouseY;
            if ( browser.ie && browser.version < 9 && evt && evt.type == 'mouseup' ) {
                var range = this.selection.getRange();
                if ( !range.collapsed ) {
                    hackForMouseUp = true;
                    mouseX = evt.clientX;
                    mouseY = evt.clientY;
                }
            }
            clearTimeout( _selectionChangeTimer );
            _selectionChangeTimer = setTimeout( function () {
                if ( !me.selection.getNative() ) {
                    return;
                }
                //娣囶喖顦炬稉锟介嚋IE娑撳娈慴ug: 姒х姵鐖ｉ悙鐟板毊娑擄拷顔屽鏌ワ拷閹封晝娈戦弬鍥ㄦ拱娑擃參妫块弮璁圭礉閸欘垵鍏橀崷鈺﹐useup閸氬海娈戞稉锟筋唽閺冨爼妫块崘鍛絿閸掓壆娈憆ange閺勵垰婀猻election閻ㄥ墖ype娑撶瘶one娑撳娈戦柨娆掝嚖閸婏拷
                //IE娑撳顪嗛弸婊呮暏閹撮攱妲搁幏鏍ㄥ娑擄拷顔屽鏌ワ拷閹封晜鏋冮張顒婄礉閸掓瑤绗夋导姘承曢崣鎲乷useup娴滃娆㈤敍灞惧娴犮儴绻栭柌宀�畱閻楄鐣╂径鍕倞娑撳秳绱扮�鐟板従閺堝濂栭崫锟�
                var ieRange;
                if ( hackForMouseUp && me.selection.getNative().type == 'None' ) {
                    ieRange = me.document.body.createTextRange();
                    try {
                        ieRange.moveToPoint( mouseX, mouseY );
                    } catch ( ex ) {
                        ieRange = null;
                    }
                }
                var bakGetIERange;
                if ( ieRange ) {
                    bakGetIERange = me.selection.getIERange;
                    me.selection.getIERange = function () {
                        return ieRange;
                    };
                }
                me.selection.cache();
                if ( bakGetIERange ) {
                    me.selection.getIERange = bakGetIERange;
                }
                if ( me.selection._cachedRange && me.selection._cachedStartElement ) {
                    me.fireEvent( 'beforeselectionchange' );
                    // 缁楊兛绨╂稉顏勫棘閺佺櫛auseByUi娑撶皪rue娴狅綀銆冮悽杈╂暏閹磋渹姘︽禍鎺楋拷閹存劗娈憇electionchange.
                    me.fireEvent( 'selectionchange', !!evt );
                    me.fireEvent( 'afterselectionchange' );
                    me.selection.clear();
                }
            }, delay || 50 );
        },
        _callCmdFn:function ( fnName, args ) {
            var cmdName = args[0].toLowerCase(),
                    cmd, cmdFn;
            cmd = this.commands[cmdName] || UE.commands[cmdName];
            cmdFn = cmd && cmd[fnName];
            //濞屸剝婀乹uerycommandstate閹存牞锟藉▽鈩冩箒command閻ㄥ嫰鍏樻妯款吇鏉╂柨娲�
            if ( (!cmd || !cmdFn) && fnName == 'queryCommandState' ) {
                return 0;
            } else if ( cmdFn ) {
                return cmdFn.apply( this, args );
            }
        },

        /**
         * 閹笛嗩攽缂傛牞绶崨鎴掓姢cmdName閿涘苯鐣幋鎰槣閺傚洦婀扮紓鏍帆閺佸牊鐏�
         * @name execCommand
         * @grammar editor.execCommand(cmdName)   => {*}
         */
        execCommand:function ( cmdName ) {
            cmdName = cmdName.toLowerCase();
            var me = this,
                    result,
                    cmd = me.commands[cmdName] || UE.commands[cmdName];
            if ( !cmd || !cmd.execCommand ) {
                return null;
            }
            if ( !cmd.notNeedUndo && !me.__hasEnterExecCommand ) {
                me.__hasEnterExecCommand = true;
                if ( me.queryCommandState( cmdName ) != -1 ) {
                    me.fireEvent( 'beforeexeccommand', cmdName );
                    result = this._callCmdFn( 'execCommand', arguments );
                    me.fireEvent( 'afterexeccommand', cmdName );
                }
                me.__hasEnterExecCommand = false;
            } else {
                result = this._callCmdFn( 'execCommand', arguments );
            }
            !me.__hasEnterExecCommand && me._selectionChange();
            return result;
        },
        /**
         * 閺嶈宓佹导鐘插弳閻ㄥ垻ommand閸涙垝鎶ら敍灞剧叀闁绱潏鎴濇珤瑜版挸澧犻惃鍕拷閸栫尨绱濇潻鏂挎礀閸涙垝鎶ら惃鍕Ц閹拷
         * @name  queryCommandState
         * @grammar editor.queryCommandState(cmdName)  => (-1|0|1)
         * @desc
         * * ''-1'' 瑜版挸澧犻崨鎴掓姢娑撳秴褰查悽锟�
         * * ''0'' 瑜版挸澧犻崨鎴掓姢閸欘垳鏁�
         * * ''1'' 瑜版挸澧犻崨鎴掓姢瀹歌尙绮￠幍褑顢戞潻鍥︾啊
         */
        queryCommandState:function ( cmdName ) {
            return this._callCmdFn( 'queryCommandState', arguments );
        },

        /**
         * 閺嶈宓佹导鐘插弳閻ㄥ垻ommand閸涙垝鎶ら敍灞剧叀闁绱潏鎴濇珤瑜版挸澧犻惃鍕拷閸栫尨绱濋弽瑙勫祦閸涙垝鎶ゆ潻鏂挎礀閻╃鍙ч惃鍕拷
         * @name  queryCommandValue
         * @grammar editor.queryCommandValue(cmdName)  =>  {*}
         */
        queryCommandValue:function ( cmdName ) {
            return this._callCmdFn( 'queryCommandValue', arguments );
        },
        /**
         * 濡拷鐓＄紓鏍帆閸栧搫鐓欐稉顓熸Ц閸氾附婀侀崘鍛啇閿涘矁瀚㈤崠鍛儓tags娑擃厾娈戦懞鍌滃仯缁鐎烽敍宀�纯閹恒儴绻戦崶鐎焤ue
         * @name  hasContents
         * @desc
         * 姒涙顓婚張澶嬫瀮閺堫剙鍞寸�鐧哥礉閹存牞锟介張澶変簰娑撳濡悙褰掑厴娑撳秷顓绘稉鐑樻Ц缁岋拷
         * <code>{table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}</code>
         * @grammar editor.hasContents()  => (true|false)
         * @grammar editor.hasContents(tags)  =>  (true|false)  //閼汇儲鏋冨锝勮厬閸栧懎鎯坱ags閺佹壆绮嶉柌灞筋嚠鎼存梻娈憈ag閿涘瞼娲块幒銉ㄧ箲閸ョ�rue
         * @example
         * editor.hasContents(['span']) //婵″倹鐏夌紓鏍帆閸ｃ劑鍣烽張澶庣箹娴滄冻绱濇稉宥堫吇娑撶儤妲哥粚锟�
         */
        hasContents:function ( tags ) {
            if ( tags ) {
                for ( var i = 0, ci; ci = tags[i++]; ) {
                    if ( this.document.getElementsByTagName( ci ).length > 0 ) {
                        return true;
                    }
                }
            }
            if ( !domUtils.isEmptyBlock( this.body ) ) {
                return true
            }
            //闂呭繑妞傚ǎ璇插,鐎规矮绠熼惃鍕濞堝﹥鐖ｇ粵鎯ь渾閺嬫粌鐡ㄩ崷顭掔礉娑撳秷鍏樼拋銈勮礋閺勵垳鈹�
            tags = ['div'];
            for ( i = 0; ci = tags[i++]; ) {
                var nodes = domUtils.getElementsByTagName( this.document, ci );
                for ( var n = 0, cn; cn = nodes[n++]; ) {
                    if ( domUtils.isCustomeNode( cn ) ) {
                        return true;
                    }
                }
            }
            return false;
        },
        /**
         * 闁插秶鐤嗙紓鏍帆閸ｎ煉绱濋崣顖滄暏閺夈儱浠涙径姘嚋tab娴ｈ法鏁ら崥灞肩娑擃亞绱潏鎴濇珤鐎圭偘绶�
         * @name  reset
         * @desc
         * * 濞撳懐鈹栫紓鏍帆閸ｃ劌鍞寸�锟�
         * * 濞撳懐鈹栭崶鐐猴拷閸掓銆�
         * @grammar editor.reset()
         */
        reset:function () {
            this.fireEvent( 'reset' );
        },
        setEnabled:function () {
            var me = this, range;
            if ( me.body.contentEditable == 'false' ) {
                me.body.contentEditable = true;
                range = me.selection.getRange();
                //閺堝褰查懗钘夊敶鐎归�娑径鍙樼啊
                try {
                    range.moveToBookmark( me.lastBk );
                    delete me.lastBk
                } catch ( e ) {
                    range.setStartAtFirst( me.body ).collapse( true )
                }
                range.select( true );
                if ( me.bkqueryCommandState ) {
                    me.queryCommandState = me.bkqueryCommandState;
                    delete me.bkqueryCommandState;
                }
                me.fireEvent( 'selectionchange' );
            }
        },
        /**
         * 鐠佸墽鐤嗚ぐ鎾冲缂傛牞绶崠鍝勭厵閸欘垯浜掔紓鏍帆
         * @name enable
         * @grammar editor.enable()
         */
        enable:function(){
            return this.setEnabled();
        },
        setDisabled:function ( except ) {
            var me = this;
            except = except ? utils.isArray( except ) ? except : [except] : [];
            if ( me.body.contentEditable == 'true' ) {
                if ( !me.lastBk ) {
                    me.lastBk = me.selection.getRange().createBookmark( true );
                }
                me.body.contentEditable = false;
                me.bkqueryCommandState = me.queryCommandState;
                me.queryCommandState = function ( type ) {
                    if ( utils.indexOf( except, type ) != -1 ) {
                        return me.bkqueryCommandState.apply( me, arguments );
                    }
                    return -1;
                };
                me.fireEvent( 'selectionchange' );
            }
        },
        /** 鐠佸墽鐤嗚ぐ鎾冲缂傛牞绶崠鍝勭厵娑撳秴褰茬紓鏍帆,except娑擃厾娈戦崨鎴掓姢闂勩倕顧�
         * @name disable
         * @grammar editor.disable()
         * @grammar editor.disable(except)  //娓氬顧囬惃鍕嚒娴犮倧绱濇稊鐔峰祮閸楀厖濞囩拋鍓х枂娴滃摼isable閿涘本顒濇径鍕帳缂冾喚娈戦崨鎴掓姢娴犲秶鍔ч崣顖欎簰閹笛嗩攽
         * @example
         * //缁備胶鏁ゅ銉ュ徔閺嶅繋鑵戦梽銈呭缁鎷伴幓鎺戝弳閸ュ墽澧栨稊瀣檱閻ㄥ嫭澧嶉張澶婂閼筹拷
         * editor.disable(['bold','insertimage']);//閸欘垯浜掗弰顖氬礋娑擄拷娈慡tring,娑旂喎褰叉禒銉︽ЦArray
        */
        disable:function(except){
            return this.setDisabled(except);
        },
        /**
         * 鐠佸墽鐤嗘妯款吇閸愬懎顔�
         * @ignore
         * @private
         * @param  {String} cont 鐟曚礁鐡ㄩ崗銉ф畱閸愬懎顔�
         */
        _setDefaultContent:function () {
            function clear() {
                var me = this;
                if ( me.document.getElementById( 'initContent' ) ) {
                    me.body.innerHTML = '<p>' + (ie ? '' : '<br/>') + '</p>';
                    me.removeListener( 'firstBeforeExecCommand focus', clear );
                    setTimeout( function () {
                        me.focus();
                        me._selectionChange();
                    },0 )
                }
            }
            return function ( cont ) {
                var me = this;
                me.body.innerHTML = '<p id="initContent">' + cont + '</p>';
                if ( browser.ie && browser.version < 7 ) {
                    replaceSrc( me.body );
                }
                me.addListener( 'firstBeforeExecCommand focus', clear );
            }
        }(),
        /**
         * show閺傝纭堕惃鍕悑鐎瑰湱澧楅張锟�
         * @private
         * @ignore
         */
        setShow:function () {
            var me = this,range = me.selection.getRange();
            if ( me.container.style.display == 'none' ) {
                //閺堝褰查懗钘夊敶鐎归�娑径鍙樼啊
                try {
                    range.moveToBookmark( me.lastBk );
                    delete me.lastBk
                } catch ( e ) {
                    range.setStartAtFirst( me.body ).collapse( true )
                }
                //ie娑撳獝ocus鐎圭偞鏅ラ敍灞惧娴犮儱浠涙禍鍡曢嚋瀵ゆ儼绻�
               setTimeout(function(){
                   range.select( true );
               },100);
                me.container.style.display = '';
            }

        },
        /**
         * 閺勫墽銇氱紓鏍帆閸ｏ拷
         * @name show
         * @grammar editor.show()
         */
        show:function(){
            return this.setShow();
        },
        /**
         * hide閺傝纭堕惃鍕悑鐎瑰湱澧楅張锟�
         * @private
         * @ignore
         */
        setHide:function () {
            var me = this;
            if ( !me.lastBk ) {
                me.lastBk = me.selection.getRange().createBookmark( true );
            }
            me.container.style.display = 'none'
        },
        /**
         * 闂呮劘妫岀紓鏍帆閸ｏ拷
         * @name hide
         * @grammar editor.hide()
         */
        hide:function(){
            return this.setHide();
        },
        /**
         * 閺嶈宓侀崚璺虹暰閻ㄥ嫯鐭惧鍕剁礉閼惧嘲褰囩�鐟扮安閻ㄥ嫯顕㈢懛锟界カ濠э拷
         * @name  getLang
         * @grammar editor.getLang(path)  =>  閿涘湞SON|String) 鐠侯垰绶為弽瑙勫祦閻ㄥ嫭妲竘ang閻╊喖缍嶆稉瀣畱鐠囶叀鈻堥弬鍥︽閻ㄥ嫯鐭惧鍕波閺嬶拷
         * @example
         * editor.getLang('contextMenu.delete') //婵″倹鐏夎ぐ鎾冲閺勵垯鑵戦弬鍥风礉闁綀绻戦崶鐐存Ц閻ㄥ嫭妲搁崚鐘绘珟
         */
        getLang:function ( path ) {
            var lang = UE.I18N[this.options.lang];
            path = (path || "").split( "." );
            for ( var i = 0, ci; ci = path[i++]; ) {
                lang = lang[ci];
                if ( !lang )break;
            }
            return lang;
        }
        /**
         * 瀵版鍩宒ialog鐎圭偘绶ョ�纭呰杽
         * @name getDialog
         * @grammar editor.getDialog(dialogName) => Object
         * @example
         * var dialog = editor.getDialog("insertimage");
         * dialog.open();   //閹垫挸绱慸ialog
         * dialog.close();  //閸忔娊妫磀ialog
         */
    };
    utils.inherits( Editor, EventBase );
})();


/**
 * @file
 * @name UE.ajax
 * @short Ajax
 * @desc UEditor閸愬懐鐤嗛惃鍒焜ax鐠囬攱鐪板Ο鈥虫健
 * @import core/utils.js
 * @user: taoqili
 * @date: 11-8-18
 * @time: 娑撳宕�:18
 */
UE.ajax = function() {
    /**
     * 閸掓稑缂撴稉锟介嚋ajaxRequest鐎电钖�
     */
    var fnStr = 'XMLHttpRequest()';
    try {
        new ActiveXObject("Msxml2.XMLHTTP");
        fnStr = 'ActiveXObject(\'Msxml2.XMLHTTP\')';
    } catch (e) {
        try {
            new ActiveXObject("Microsoft.XMLHTTP");
            fnStr = 'ActiveXObject(\'Microsoft.XMLHTTP\')'
        } catch (e) {
        }
    }
    var creatAjaxRequest = new Function('return new ' + fnStr);


    /**
     * 鐏忓攬son閸欏倹鏆熸潪顒�閹存劙锟介崥鍧卝ax閹绘劒姘﹂惃鍕棘閺佹澘鍨悰锟�
     * @param json
     */
    function json2str(json) {
        var strArr = [];
        for (var i in json) {
            //韫囩晫鏆愭妯款吇閻ㄥ嫬鍤戞稉顏勫棘閺侊拷
            if(i=="method" || i=="timeout" || i=="async") continue;
            //娴肩娀锟芥潻鍥ㄦ降閻ㄥ嫬顕挒鈥虫嫲閸戣姤鏆熸稉宥呮躬閹绘劒姘︽稊瀣灙
            if (!((typeof json[i]).toLowerCase() == "function" || (typeof json[i]).toLowerCase() == "object")) {
                strArr.push( encodeURIComponent(i) + "="+encodeURIComponent(json[i]) );
            }
        }
        return strArr.join("&");

    }


    return {
		/**
         * @name request
         * @desc 閸欐垵鍤璦jax鐠囬攱鐪伴敍瀹巎axOpt娑擃參绮拋銈呭瘶閸氱幀ethod閿涘imeout閿涘畮sync閿涘畳ata閿涘nsuccess娴犮儱寮穙nerror缁涘鍙氭稉顏庣礉閺�垱瀵旈懛顏勭暰娑斿鍧婇崝鐘插棘閺侊拷
         * @grammar UE.ajax.request(url,ajaxOpt);
         * @example
         * UE.ajax.request('http://www.xxxx.com/test.php',{
         *     //閸欘垳娓烽悾銉礉姒涙顓籔OST
         *     method:'POST',
         *     //閸欘垯浜掗懛顏勭暰娑斿寮弫锟�
         *     content:'鏉╂瑩鍣烽弰顖涘絹娴溿倗娈戦崘鍛啇',
         *     //娑旂喎褰叉禒銉ф纯閹恒儰绱秊son閿涘奔绲鹃弰顖氬涧閼宠棄鎳￠崥宥勮礋data閿涘苯鎯侀崚娆忕秼閸嬫矮绔撮懜顒�摟缁楋缚瑕嗘径鍕倞
         *     data:{
         *         name:'UEditor',
         *         age:'1'
         *     }
         *     onsuccess:function(xhr){
         *         console.log(xhr.responseText);
         *     },
         *     onerror:function(xhr){
         *         console.log(xhr.responseText);
         *     }
         * })
		 * @param ajaxOptions
		 */
		request:function(url, ajaxOptions) {
            var ajaxRequest = creatAjaxRequest(),
                //閺勵垰鎯佺搾鍛
                timeIsOut = false,
                //姒涙顓婚崣鍌涙殶
                defaultAjaxOptions = {
                    method:"POST",
                    timeout:5000,
                    async:true,
                    data:{},//闂囷拷顪呮导鐘伙拷鐎电钖勯惃鍕樈閸欘亣鍏樼憰鍡欐磰
                    onsuccess:function() {
                    },
                    onerror:function() {
                    }
                };

			if (typeof url === "object") {
				ajaxOptions = url;
				url = ajaxOptions.url;
			}
			if (!ajaxRequest || !url) return;
			var ajaxOpts = ajaxOptions ? utils.extend(defaultAjaxOptions,ajaxOptions) : defaultAjaxOptions;

			var submitStr = json2str(ajaxOpts);  // { name:"Jim",city:"Beijing" } --> "name=Jim&city=Beijing"
			//婵″倹鐏夐悽銊﹀煕閻╁瓨甯撮柅姘崇箖data閸欏倹鏆熸导鐘伙拷json鐎电钖勬潻鍥ㄦ降閿涘苯鍨稊鐔活渽鐏忓棙顒漥son鐎电钖勬潪顒�娑撳搫鐡х粭锔胯
			if (!utils.isEmptyObject(ajaxOpts.data)){
                submitStr += (submitStr? "&":"") + json2str(ajaxOpts.data);
			}
            //鐡掑懏妞傚Λ锟界ゴ
            var timerID = setTimeout(function() {
                if (ajaxRequest.readyState != 4) {
                    timeIsOut = true;
                    ajaxRequest.abort();
                    clearTimeout(timerID);
                }
            }, ajaxOpts.timeout);

			var method = ajaxOpts.method.toUpperCase();
            var str = url + (url.indexOf("?")==-1?"?":"&") + (method=="POST"?"":submitStr+ "&noCache=" + +new Date);
			ajaxRequest.open(method, str, ajaxOpts.async);
			ajaxRequest.onreadystatechange = function() {
				if (ajaxRequest.readyState == 4) {
					if (!timeIsOut && ajaxRequest.status == 200) {
						ajaxOpts.onsuccess(ajaxRequest);
					} else {
						ajaxOpts.onerror(ajaxRequest);
					}
				}
			};
			if (method == "POST") {
				ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajaxRequest.send(submitStr);
			} else {
				ajaxRequest.send(null);
			}
		}
	};


}();

/**
 * @file
 * @name UE.filterWord
 * @short filterWord
 * @desc 閻劍娼垫潻鍥ㄦ姢word缁鍒涙潻鍥ㄦ降閻ㄥ嫬鐡х粭锔胯
 * @import editor.js,core/utils.js
 * @anthor zhanyi
 */
var filterWord = UE.filterWord = function () {

    //閺勵垰鎯侀弰鐥簅rd鏉╁洦娼甸惃鍕敶鐎癸拷
    function isWordDocument( str ) {
        return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<v:)/ig.test( str );
    }
    //閸樼粯甯�亸蹇旀殶
    function transUnit( v ) {
        v = v.replace( /[\d.]+\w+/g, function ( m ) {
            return utils.transUnitToPx(m);
        } );
        return v;
    }

    function filterPasteWord( str ) {
        return str.replace( /[\t\r\n]+/g, "" )
                .replace( /<!--[\s\S]*?-->/ig, "" )
                //鏉烆剚宕查崶鍓у
                .replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(str){
                    //opera閼冲�鍤滃杈掗弸鎰毉image閹碉拷绻栭柌宀�纯閹恒儴绻戦崶鐐碘敄
                    if(browser.opera){
                        return '';
                    }
                    try{
                        var width = str.match(/width:([ \d.]*p[tx])/i)[1],
                            height = str.match(/height:([ \d.]*p[tx])/i)[1],
                            src =  str.match(/src=\s*"([^"]*)"/i)[1];
                        return '<img width="'+ transUnit(width) +'" height="'+transUnit(height) +'" src="' + src + '" />';
                    } catch(e){
                        return '';
                    }
                })
                //闁藉牆顕畐ps濞ｈ濮為惃鍕檵娴ｆ瑦鐖ｇ粵鎯ь樀閻烇拷
                .replace(/<\/?div[^>]*>/g,'')
                //閸樼粯甯�径姘稇閻ㄥ嫬鐫橀幀锟�
                .replace( /v:\w+=(["']?)[^'"]+\1/g, '' )
                .replace( /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "" )
                .replace( /<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>" )
                //閸樼粯甯�径姘稇閻ㄥ嫬鐫橀幀锟�
                .replace( /\s+(class|lang|align)\s*=\s*(['"]?)[\w-]+\2/ig, "" )
                //濞撳懘娅庢径姘稇閻ㄥ垿ont/span娑撳秷鍏橀崠褰掑帳&nbsp;閺堝褰查懗鑺ユЦ缁岀儤鐗�
                .replace( /<(font|span)[^>]*>\s*<\/\1>/gi, '' )
                //婢跺嫮鎮妔tyle閻ㄥ嫰妫舵０锟�
                .replace( /(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function( str, tag, tmp, style ) {
                    var n = [],
                        s = style.replace( /^\s+|\s+$/, '' )
                            .replace(/&#39;/g,'\'')
                            .replace( /&quot;/gi, "'" )
                            .split( /;\s*/g );

                    for ( var i = 0,v; v = s[i];i++ ) {

                        var name, value,
                            parts = v.split( ":" );

                        if ( parts.length == 2 ) {
                            name = parts[0].toLowerCase();
                            value = parts[1].toLowerCase();
                            if(/^(background)\w*/.test(name) && value.replace(/(initial|\s)/g,'').length == 0
                                ||
                                /^(margin)\w*/.test(name) && /^0\w+$/.test(value)
                            ){
                                continue;
                            }

                            switch ( name ) {
                                case "mso-padding-alt":
                                case "mso-padding-top-alt":
                                case "mso-padding-right-alt":
                                case "mso-padding-bottom-alt":
                                case "mso-padding-left-alt":
                                case "mso-margin-alt":
                                case "mso-margin-top-alt":
                                case "mso-margin-right-alt":
                                case "mso-margin-bottom-alt":
                                case "mso-margin-left-alt":
                                //ie娑撳绱伴崙铏瑰箛閹搞倕鍩屾稉锟芥崳閻ㄥ嫭鍎忛崘锟�
                               //case "mso-table-layout-alt":
                                case "mso-height":
                                case "mso-width":
                                case "mso-vertical-align-alt":
                                    //trace:1819 ff娑撳绱扮憴锝嗙�閸戠皢adding閸︹暟able娑擄拷
                                    if(!/<table/.test(tag))
                                        n[i] = name.replace( /^mso-|-alt$/g, "" ) + ":" + transUnit( value );
                                    continue;
                                case "horiz-align":
                                    n[i] = "text-align:" + value;
                                    continue;

                                case "vert-align":
                                    n[i] = "vertical-align:" + value;
                                    continue;

                                case "font-color":
                                case "mso-foreground":
                                    n[i] = "color:" + value;
                                    continue;

                                case "mso-background":
                                case "mso-highlight":
                                    n[i] = "background:" + value;
                                    continue;

                                case "mso-default-height":
                                    n[i] = "min-height:" + transUnit( value );
                                    continue;

                                case "mso-default-width":
                                    n[i] = "min-width:" + transUnit( value );
                                    continue;

                                case "mso-padding-between-alt":
                                    n[i] = "border-collapse:separate;border-spacing:" + transUnit( value );
                                    continue;

                                case "text-line-through":
                                    if ( (value == "single") || (value == "double") ) {
                                        n[i] = "text-decoration:line-through";
                                    }
                                    continue;
                                case "mso-zero-height":
                                    if ( value == "yes" ) {
                                        n[i] = "display:none";
                                    }
                                    continue;
                                case 'background':
                                    if(value == 'initial'){

                                    }
                                    break;
                                case 'margin':
                                    if ( !/[1-9]/.test( value ) ) {
                                        continue;
                                    }

                            }

                            if ( /^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test( name )
                                ||
                                /text\-indent|padding|margin/.test(name) && /\-[\d.]+/.test(value)
                            ) {
                                continue;
                            }

                            n[i] = name + ":" + parts[1];
                        }
                    }
                    return tag + (n.length ? ' style="' + n.join( ';').replace(/;{2,}/g,';') + '"' : '');
                })
            .replace(/[\d.]+(cm|pt)/g,function(str){
                return utils.transUnitToPx(str)
            })

    }

    return function ( html ) {
        return (isWordDocument( html ) ? filterPasteWord( html ) : html).replace( />[ \t\r\n]*</g, '><' );
    };
}();
///import core
/**
 * @description 閹绘帒鍙嗛崘鍛啇
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     inserthtml閹绘帒鍙嗛崘鍛啇閻ㄥ嫬鎳℃禒锟�
 * @param   {String}   html                鐟曚焦褰冮崗銉ф畱閸愬懎顔�
 * @author zhanyi
    */
    UE.commands['inserthtml'] = {
        execCommand: function (command,html,notSerialize){
            var me = this,
                range,
                div,
                tds = me.currentSelectedArr;

            range = me.selection.getRange();

            div = range.document.createElement( 'div' );
            div.style.display = 'inline';
            var serialize = me.serialize;
            if (!notSerialize && serialize) {
                var node = serialize.parseHTML(html);
                node = serialize.transformInput(node);
                node = serialize.filter(node);
                html = serialize.toHTML(node);
            }
            div.innerHTML = utils.trim( html );
            try{
                me.adjustTable && me.adjustTable(div);
            }catch(e){}


            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    ti.className = '';
                }
                tds[0].innerHTML = '';
                range.setStart(tds[0],0).collapse(true);
                me.currentSelectedArr = [];
            }

            if ( !range.collapsed ) {

                range.deleteContents();
                if(range.startContainer.nodeType == 1){
                    var child = range.startContainer.childNodes[range.startOffset],pre;
                    if(child && domUtils.isBlockElm(child) && (pre = child.previousSibling) && domUtils.isBlockElm(pre)){
                        range.setEnd(pre,pre.childNodes.length).collapse();
                        while(child.firstChild){
                            pre.appendChild(child.firstChild);

                        }
                        domUtils.remove(child);
                    }
                }

            }


            var child,parent,pre,tmp,hadBreak = 0;
            while ( child = div.firstChild ) {
                range.insertNode( child );
                if ( !hadBreak && child.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm( child ) ){

                    parent = domUtils.findParent( child,function ( node ){ return domUtils.isBlockElm( node ); } );
                    if ( parent && parent.tagName.toLowerCase() != 'body' && !(dtd[parent.tagName][child.nodeName] && child.parentNode === parent)){
                        if(!dtd[parent.tagName][child.nodeName]){
                            pre = parent;
                        }else{
                            tmp = child.parentNode;
                            while (tmp !== parent){
                                pre = tmp;
                                tmp = tmp.parentNode;
    
                            }    
                        }
                        
                       
                        domUtils.breakParent( child, pre || tmp );
                        //閸樼粯甯�reak閸氬骸澧犳稉锟介嚋婢舵矮缍戦惃鍕Ν閻愶拷 <p>|<[p> ==> <p></p><div></div><p>|</p>
                        var pre = child.previousSibling;
                        domUtils.trimWhiteTextNode(pre);
                        if(!pre.childNodes.length){
                            domUtils.remove(pre);
                        }
                        //trace:2012,閸︺劑娼猧e閻ㄥ嫭鍎忛崘纰夌礉閸掑洤绱戦崥搴″⒖娑撳娈戦懞鍌滃仯閺堝褰查懗鎴掔瑝閼崇晫鍋ｉ崗銉ュ帨閺嶅洦鍧婇崝鐕絩閸楃姳缍�

                        if(!browser.ie &&
                            (next = child.nextSibling) &&
                            domUtils.isBlockElm(next) &&
                            next.lastChild &&
                            !domUtils.isBr(next.lastChild)){
                            next.appendChild(me.document.createElement('br'));
                        }
                        hadBreak = 1;
                    }
                }
                var next = child.nextSibling;
                if(!div.firstChild && next && domUtils.isBlockElm(next)){

                    range.setStart(next,0).collapse(true);
                    break;
                }
                range.setEndAfter( child ).collapse();

            }


            child = range.startContainer;

            //閻⑩暉hrome閸欘垵鍏橀張澶屸敄閻ц棄鐫嶆担宥囶儊
            if(domUtils.isBlockElm(child) && domUtils.isEmptyNode(child)){
                child.innerHTML = browser.ie ? '' : '<br/>';
            }
            //閸旂姳绗倀rue閸ョ姳璐熼崷銊ュ灩闂勩倛銆冮幆鍛搼閺冩湹绱伴崚鐘辫⒈濞嗏槄绱濈粭顑跨濞嗏剝妲搁崚鐘垫畱fillData
            range.select(true);


            setTimeout(function(){
                range = me.selection.getRange();
                range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
            },200);



            
        }
    };

///import core
///commands 閼奉亜濮╅幒鎺斿
///commandsName  autotypeset
///commandsTitle  閼奉亜濮╅幒鎺斿
/**
 * 閼奉亜濮╅幒鎺斿
 * @function
 * @name baidu.editor.execCommands
 */

UE.plugins['autotypeset'] = function(){

    this.setOpt({'autotypeset':{
        mergeEmptyline : true,          //閸氬牆鑻熺粚楦款攽
            removeClass : true,            //閸樼粯甯�崘妞剧稇閻ㄥ垻lass
            removeEmptyline : false,        //閸樼粯甯�粚楦款攽
            textAlign : "left",             //濞堜絻鎯ら惃鍕笓閻楀牊鏌熷蹇ョ礉閸欘垯浜掗弰锟絣eft,right,center,justify 閸樼粯甯�潻娆庨嚋鐏炵偞锟界悰銊с仛娑撳秵澧界悰灞惧笓閻楋拷
            imageBlockLine : 'center',      //閸ュ墽澧栭惃鍕癁閸斻劍鏌熷蹇ョ礉閻欘剙宕版稉锟筋攽閸撗傝厬,瀹革箑褰稿ù顔煎З閿涘矂绮拋锟�center,left,right,none 閸樼粯甯�潻娆庨嚋鐏炵偞锟界悰銊с仛娑撳秵澧界悰灞惧笓閻楋拷
            pasteFilter : false,             //閺嶈宓佺憴鍕灟鏉╁洦鎶ゅ▽鈥茬皑缁鍒涙潻娑欐降閻ㄥ嫬鍞寸�锟�
            clearFontSize : false,           //閸樼粯甯�幍锟芥箒閻ㄥ嫬鍞村畵灞界摟閸欏嚖绱濇担璺ㄦ暏缂傛牞绶崳銊╃帛鐠併倗娈戠�妤�娇
            clearFontFamily : false,         //閸樼粯甯�幍锟芥箒閻ㄥ嫬鍞村畵灞界摟娴ｆ搫绱濇担璺ㄦ暏缂傛牞绶崳銊╃帛鐠併倗娈戠�妞剧秼
            removeEmptyNode : false,         // 閸樼粯甯�粚楦垮Ν閻愶拷
            //閸欘垯浜掗崢缁樺竴閻ㄥ嫭鐖ｇ粵锟�
            removeTagNames : utils.extend({div:1},dtd.$removeEmpty),
            indent : false,                  // 鐞涘矂顪氱紓鈺勭箻
            indentValue : '2em'             //鐞涘矂顪氱紓鈺勭箻閻ㄥ嫬銇囩亸锟�
    }});
    var me = this,
        opt = me.options.autotypeset,
        remainClass = {
            'selectTdClass':1,
            'pagebreak':1,
            'anchorclass':1
        },
        remainTag = {
            'li':1
        },
        tags = {
            div:1,
            p:1,
            //trace:2183 鏉╂瑤绨烘稊鐔活吇娑撶儤妲哥悰锟�
            blockquote:1,center:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,
            span:1
        },
        highlightCont;
    //閸楀洨楠囨禍鍡欏閺堫剨绱濇担鍡涘帳缂冾噣銆嶉惄顕�櫡濞屸剝婀乤utotypeset
    if(!opt){
        return;
    }
    function isLine(node,notEmpty){
        if(!node || node.nodeType == 3)
            return 0;
        if(domUtils.isBr(node))
            return 1;
        if(node && node.parentNode && tags[node.tagName.toLowerCase()]){
            if(highlightCont && highlightCont.contains(node)
                ||
                node.getAttribute('pagebreak')
            ){
                return 0;
            }

            return notEmpty ? !domUtils.isEmptyBlock(node) : domUtils.isEmptyBlock(node);
        }
    }

    function removeNotAttributeSpan(node){
        if(!node.style.cssText){
            domUtils.removeAttributes(node,['style']);
            if(node.tagName.toLowerCase() == 'span' && domUtils.hasNoAttributes(node)){
                domUtils.remove(node,true);
            }
        }
    }
    function autotype(type,html){

        var cont;
        if(html){
            if(!opt.pasteFilter){
                return;
            }
            cont = me.document.createElement('div');
            cont.innerHTML = html.html;
        }else{
            cont = me.document.body;
        }
        var nodes = domUtils.getElementsByTagName(cont,'*');

          // 鐞涘矂顪氱紓鈺勭箻閿涘本顔岄拃鑺ユ煙閸氭埊绱濆▓鐢告？鐠烘繐绱濆▓闈涘敶闂傜绐�
        for(var i=0,ci;ci=nodes[i++];){
            if(!highlightCont && ci.tagName == 'DIV' && ci.getAttribute('highlighter')){
                highlightCont = ci;
            }
             //font-size
            if(opt.clearFontSize && ci.style.fontSize){
                domUtils.removeStyle(ci,'font-size');

                removeNotAttributeSpan(ci);

            }
            //font-family
            if(opt.clearFontFamily && ci.style.fontFamily){
                domUtils.removeStyle(ci,'font-family');
                removeNotAttributeSpan(ci);
            }

            if(isLine(ci)){
                //閸氬牆鑻熺粚楦款攽
                if(opt.mergeEmptyline ){
                    var next = ci.nextSibling,tmpNode,isBr = domUtils.isBr(ci);
                    while(isLine(next)){
                        tmpNode = next;
                        next = tmpNode.nextSibling;
                        if(isBr && (!next || next && !domUtils.isBr(next))){
                            break;
                        }
                        domUtils.remove(tmpNode);
                    }

                }
                 //閸樼粯甯�粚楦款攽閿涘奔绻氶悾娆忓窗娴ｅ秶娈戠粚楦款攽
                if(opt.removeEmptyline && domUtils.inDoc(ci,cont) && !remainTag[ci.parentNode.tagName.toLowerCase()] ){
                    if(domUtils.isBr(ci)){
                        next = ci.nextSibling;
                        if(next && !domUtils.isBr(next)){
                            continue;
                        }
                    }
                    domUtils.remove(ci);
                    continue;

                }

            }
            if(isLine(ci,true) && ci.tagName != 'SPAN'){
                if(opt.indent){
                    ci.style.textIndent = opt.indentValue;
                }
                if(opt.textAlign){
                    ci.style.textAlign = opt.textAlign;
                }
//                if(opt.lineHeight)
//                    ci.style.lineHeight = opt.lineHeight + 'cm';


            }

            //閸樼粯甯�lass,娣囨繄鏆�惃鍒ass娑撳秴骞撻幒锟�
            if(opt.removeClass && ci.className && !remainClass[ci.className.toLowerCase()]){

                if(highlightCont && highlightCont.contains(ci)){
                     continue;
                }
                domUtils.removeAttributes(ci,['class']);
            }

            //鐞涖劍鍎忔稉宥咁樀閻烇拷
            if(opt.imageBlockLine && ci.tagName.toLowerCase() == 'img' && !ci.getAttribute('emotion')){
                if(html){
                    var img = ci;
                    switch (opt.imageBlockLine){
                        case 'left':
                        case 'right':
                        case 'none':
                            var pN = img.parentNode,tmpNode,pre,next;
                            while(dtd.$inline[pN.tagName] || pN.tagName == 'A'){
                                pN = pN.parentNode;
                            }
                            tmpNode = pN;
                            if(tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode,'text-align') == 'center'){
                                if(!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1){
                                    pre = tmpNode.previousSibling;
                                    next = tmpNode.nextSibling;
                                    if(pre && next && pre.nodeType == 1 &&  next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)){
                                        pre.appendChild(tmpNode.firstChild);
                                        while(next.firstChild){
                                            pre.appendChild(next.firstChild);
                                        }
                                        domUtils.remove(tmpNode);
                                        domUtils.remove(next);
                                    }else{
                                        domUtils.setStyle(tmpNode,'text-align','');
                                    }


                                }


                            }
                            domUtils.setStyle(img,'float',opt.imageBlockLine);
                            break;
                        case 'center':
                            if(me.queryCommandValue('imagefloat') != 'center'){
                                pN = img.parentNode;
                                domUtils.setStyle(img,'float','none');
                                tmpNode = img;
                                while(pN && domUtils.getChildCount(pN,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1
                                    && (dtd.$inline[pN.tagName] || pN.tagName == 'A')){
                                    tmpNode = pN;
                                    pN = pN.parentNode;
                                }
                                var pNode = me.document.createElement('p');
                                domUtils.setAttributes(pNode,{

                                    style:'text-align:center'
                                });
                                tmpNode.parentNode.insertBefore(pNode,tmpNode);
                                pNode.appendChild(tmpNode);
                                domUtils.setStyle(tmpNode,'float','');

                            }


                    }
                }else{
                    var range = me.selection.getRange();
                    range.selectNode(ci).select();
                    me.execCommand('imagefloat',opt.imageBlockLine);
                }



            }

            //閸樼粯甯�崘妞剧稇閻ㄥ嫭鐖ｇ粵锟�
            if(opt.removeEmptyNode){
                if(opt.removeTagNames[ci.tagName.toLowerCase()] && domUtils.hasNoAttributes(ci) && domUtils.isEmptyBlock(ci)){
                    domUtils.remove(ci);
                }
            }
        }
        if(html){
            html.html = cont.innerHTML;
        }
    }
    if(opt.pasteFilter){
        me.addListener('beforepaste',autotype);
    }

    me.commands['autotypeset'] = {
        execCommand:function () {
            me.removeListener('beforepaste',autotype);
            if(opt.pasteFilter){
                me.addListener('beforepaste',autotype);
            }
            autotype();
        }

    };

};


UE.commands['autosubmit'] = {
    execCommand:function () {
        var me=this,
            form = domUtils.findParentByTagName(me.iframe,"form", false);

        if (form)    {
            if(me.fireEvent("beforesubmit")===false){
                return;
            }
            me.sync();
            form.submit();
        }

    }
};
(function() {
    UE.plugins['background'] = function(){
        var me = this;
        UE.commands['background'] = {
            queryCommandState : function(){
                return this.highlight ? -1 : 0;
            }
        };
        me.addListener("getAllHtml",function(type,headHtml){
            var body = this.body,
                su = domUtils.getComputedStyle(body,"background-image"),
                url="";
            if(su.indexOf(me.options.imagePath)>0){
                url =  su.substring(su.indexOf(me.options.imagePath),su.length-1).replace(/"|\(|\)/ig,"");
            }else{
                url =  su!="none" ? su.replace(/url\("?|"?\)/ig,""):"";
            }
            headHtml.html += '<style type="text/css">body{';
            var bgObj = {
                "background-color" : domUtils.getComputedStyle(body,"background-color")||"#ffffff",
                'background-image' : url ? 'url('+url+')' : '',
                'background-repeat':domUtils.getComputedStyle(body,"background-repeat")||"",
                'background-position': browser.ie?(domUtils.getComputedStyle(body,"background-position-x")+" "+domUtils.getComputedStyle(body,"background-position-y")):domUtils.getComputedStyle(body,"background-position"),
                'height':domUtils.getComputedStyle(body,"height")
            };
            for ( var name in bgObj ) {
                if ( bgObj.hasOwnProperty( name ) ) {
                    headHtml.html += name+":"+bgObj[name]+";";
                }
            }
            headHtml.html += '}</style> ';
        });
    }
})();
///import core
///import plugins\inserthtml.js
///import plugins\catchremoteimage.js
///commands 閹绘帒鍙嗛崶鍓у閿涘本鎼锋担婊冩禈閻楀洨娈戠�褰掔秷閺傜懓绱�
///commandsName  InsertImage,ImageNone,ImageLeft,ImageRight,ImageCenter
///commandsTitle  閸ュ墽澧�姒涙顓�鐏炲懎涔�鐏炲懎褰�鐏炲懍鑵�
///commandsDialog  dialogs\image\image.html
/**
 * Created by .
 * User: zhanyi
 * for image
 */

UE.commands['imagefloat'] = {
    execCommand:function ( cmd, align ) {
        var me = this,
                range = me.selection.getRange();
        if ( !range.collapsed ) {
            var img = range.getClosedNode();
            if ( img && img.tagName == 'IMG' ) {
                switch ( align ) {
                    case 'left':
                    case 'right':
                    case 'none':
                        var pN = img.parentNode, tmpNode, pre, next;
                        while ( dtd.$inline[pN.tagName] || pN.tagName == 'A' ) {
                            pN = pN.parentNode;
                        }
                        tmpNode = pN;
                        if ( tmpNode.tagName == 'P' && domUtils.getStyle( tmpNode, 'text-align' ) == 'center' ) {
                            if ( !domUtils.isBody( tmpNode ) && domUtils.getChildCount( tmpNode, function ( node ) {
                                return !domUtils.isBr( node ) && !domUtils.isWhitespace( node );
                            } ) == 1 ) {
                                pre = tmpNode.previousSibling;
                                next = tmpNode.nextSibling;
                                if ( pre && next && pre.nodeType == 1 && next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm( pre ) ) {
                                    pre.appendChild( tmpNode.firstChild );
                                    while ( next.firstChild ) {
                                        pre.appendChild( next.firstChild );
                                    }
                                    domUtils.remove( tmpNode );
                                    domUtils.remove( next );
                                } else {
                                    domUtils.setStyle( tmpNode, 'text-align', '' );
                                }


                            }

                            range.selectNode( img ).select();
                        }
                        domUtils.setStyle( img, 'float', align );
                        break;
                    case 'center':
                        if ( me.queryCommandValue( 'imagefloat' ) != 'center' ) {
                            pN = img.parentNode;
                            domUtils.setStyle( img, 'float', 'none' );
                            tmpNode = img;
                            while ( pN && domUtils.getChildCount( pN, function ( node ) {
                                return !domUtils.isBr( node ) && !domUtils.isWhitespace( node );
                            } ) == 1
                                    && (dtd.$inline[pN.tagName] || pN.tagName == 'A') ) {
                                tmpNode = pN;
                                pN = pN.parentNode;
                            }
                            range.setStartBefore( tmpNode ).setCursor( false );
                            pN = me.document.createElement( 'div' );
                            pN.appendChild( tmpNode );
                            domUtils.setStyle( tmpNode, 'float', '' );

                            me.execCommand( 'insertHtml', '<p id="_img_parent_tmp" style="text-align:center">' + pN.innerHTML + '</p>' );

                            tmpNode = me.document.getElementById( '_img_parent_tmp' );
                            tmpNode.removeAttribute( 'id' );
                            tmpNode = tmpNode.firstChild;
                            range.selectNode( tmpNode ).select();
                            //閸樼粯甯�崥搴ょ珶婢舵矮缍戦惃鍕帗缁憋拷
                            next = tmpNode.parentNode.nextSibling;
                            if ( next && domUtils.isEmptyNode( next ) ) {
                                domUtils.remove( next );
                            }

                        }

                        break;
                }

            }
        }
    },
    queryCommandValue:function () {
        var range = this.selection.getRange(),
                startNode, floatStyle;
        if ( range.collapsed ) {
            return 'none';
        }
        startNode = range.getClosedNode();
        if ( startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG' ) {
            floatStyle = domUtils.getComputedStyle( startNode, 'float' );
            if ( floatStyle == 'none' ) {
                floatStyle = domUtils.getComputedStyle( startNode.parentNode, 'text-align' ) == 'center' ? 'center' : floatStyle;
            }
            return {
                left:1,
                right:1,
                center:1
            }[floatStyle] ? floatStyle : 'none';
        }
        return 'none';


    },
    queryCommandState:function () {
        if ( this.highlight ) {
            return -1;
        }
        var range = this.selection.getRange(),
                startNode;
        if ( range.collapsed ) {
            return -1;
        }
        startNode = range.getClosedNode();
        if ( startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG' ) {
            return 0;
        }
        return -1;
    }
};

UE.commands['insertimage'] = {
    execCommand:function ( cmd, opt ) {

        opt = utils.isArray( opt ) ? opt : [opt];
        if ( !opt.length ) {
            return;
        }
        var me = this,
                range = me.selection.getRange(),
                img = range.getClosedNode();
        if ( img && /img/i.test( img.tagName ) && img.className != "edui-faked-video" && !img.getAttribute( "word_img" ) ) {
            var first = opt.shift();
            var floatStyle = first['floatStyle'];
            delete first['floatStyle'];
////                img.style.border = (first.border||0) +"px solid #000";
////                img.style.margin = (first.margin||0) +"px";
//                img.style.cssText += ';margin:' + (first.margin||0) +"px;" + 'border:' + (first.border||0) +"px solid #000";
            domUtils.setAttributes( img, first );
            me.execCommand( 'imagefloat', floatStyle );
            if ( opt.length > 0 ) {
                range.setStartAfter( img ).setCursor( false, true );
                me.execCommand( 'insertimage', opt );
            }

        } else {
            var html = [], str = '', ci;
            ci = opt[0];
            if ( opt.length == 1 ) {
                str = '<img src="' + ci.src + '" ' + (ci.data_ue_src ? ' data_ue_src="' + ci.data_ue_src + '" ' : '') +
                        (ci.width ? 'width="' + ci.width + '" ' : '') +
                        (ci.height ? ' height="' + ci.height + '" ' : '') +
                        (ci['floatStyle'] == 'left' || ci['floatStyle'] == 'right' ? ' style="float:' + ci['floatStyle'] + ';"' : '') +
                        (ci.title && ci.title != "" ? ' title="' + ci.title + '"' : '') +
                        (ci.border && ci.border != "0" ? ' border="' + ci.border + '"' : '') +
                        (ci.alt && ci.alt != "" ? ' alt="' + ci.alt + '"' : '') +
                        (ci.hspace && ci.hspace != "0" ? ' hspace = "' + ci.hspace + '"' : '') +
                        (ci.vspace && ci.vspace != "0" ? ' vspace = "' + ci.vspace + '"' : '') + '/>';
                if ( ci['floatStyle'] == 'center' ) {
                    str = '<p style="text-align: center">' + str + '</p>';
                }
                html.push( str );

            } else {
                for ( var i = 0; ci = opt[i++]; ) {
                    str = '<p ' + (ci['floatStyle'] == 'center' ? 'style="text-align: center" ' : '') + '><img src="' + ci.src + '" ' +
                            (ci.width ? 'width="' + ci.width + '" ' : '') + (ci.data_ue_src ? ' data_ue_src="' + ci.data_ue_src + '" ' : '') +
                            (ci.height ? ' height="' + ci.height + '" ' : '') +
                            ' style="' + (ci['floatStyle'] && ci['floatStyle'] != 'center' ? 'float:' + ci['floatStyle'] + ';' : '') +
                            (ci.border || '') + '" ' +
                            (ci.title ? ' title="' + ci.title + '"' : '') + ' /></p>';
                    html.push( str );
                }
            }

            me.execCommand( 'insertHtml', html.join( '' ) );
        }
    },
    queryCommandState:function () {
        return this.highlight ? -1 : 0;
    }
};
///import core
///commands 濞堜絻鎯ら弽鐓庣础,鐏炲懎涔�鐏炲懎褰�鐏炲懍鑵�娑撱倗顏�褰掔秷
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  鐏炲懎涔忕�褰掔秷,鐏炲懍鑵戠�褰掔秷,鐏炲懎褰哥�褰掔秷,娑撱倗顏�褰掔秷
/**
 * @description 鐏炲懎涔忛崣鍏呰厬
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     justify閹笛嗩攽鐎靛綊缍堥弬鐟扮础閻ㄥ嫬鎳℃禒锟�
 * @param   {String}   align               鐎靛綊缍堥弬鐟扮础閿涙eft鐏炲懎涔忛敍瀹篿ght鐏炲懎褰搁敍瀹慹nter鐏炲懍鑵戦敍瀹﹗stify娑撱倗顏�褰掔秷
 * @author zhanyi
 */
(function(){
    var block = domUtils.isBlockElm,
        defaultValue = {
            left : 1,
            right : 1,
            center : 1,
            justify : 1
        },
        doJustify = function(range,style){
            var bookmark = range.createBookmark(),
                filterFn = function( node ) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node );
                };

            range.enlarge(true);
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode(bookmark2.start,false,filterFn),
                tmpRange = range.cloneRange(),
                tmpNode;
            while(current &&  !(domUtils.getPosition(current,bookmark2.end)&domUtils.POSITION_FOLLOWING)){
                if(current.nodeType == 3 || !block(current)){
                    tmpRange.setStartBefore(current);
                    while(current && current!==bookmark2.end &&  !block(current)){
                        tmpNode = current;
                        current = domUtils.getNextDomNode(current,false,null,function(node){
                            return !block(node);
                        });
                    }
                    tmpRange.setEndAfter(tmpNode);
                    var common = tmpRange.getCommonAncestor();
                    if( !domUtils.isBody(common) && block(common)){
                        domUtils.setStyles(common,utils.isString(style) ? {'text-align':style} : style);
                        current = common;
                    }else{
                        var p = range.document.createElement('p');
                         domUtils.setStyles(p,utils.isString(style) ? {'text-align':style} : style);
                        var frag = tmpRange.extractContents();
                        p.appendChild(frag);
                        tmpRange.insertNode(p);
                        current = p;
                    }
                    current = domUtils.getNextDomNode(current,false,filterFn);
                }else{
                    current = domUtils.getNextDomNode(current,true,filterFn);
                }
            }
            return range.moveToBookmark(bookmark2).moveToBookmark(bookmark);
        };
    UE.commands['justify'] =  {
        execCommand : function( cmdName,align ) {

            var  range = this.selection.getRange(),
                txt;
           
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    if(domUtils.isEmptyNode(ti)){
                        txt = this.document.createTextNode('p');
                        range.setStart(ti,0).collapse(true).insertNode(txt).selectNode(txt);
                        
                    }else{
                        range.selectNodeContents(ti);
                    }

                    doJustify(range,align.toLowerCase());
                    txt && domUtils.remove(txt);
                }
                range.selectNode(this.currentSelectedArr[0]).select();
            }else{

                //闂傤厼鎮庨弮璺哄礋閻欘剙顦甸悶锟�
                if(range.collapsed){
                    txt = this.document.createTextNode('p');
                    range.insertNode(txt);
                }
                doJustify(range,align);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }
                
                range.select();

            }
            return true;
        },
        queryCommandValue : function() {
            var startNode = this.selection.getStart(),
                value = domUtils.getComputedStyle(startNode,'text-align');
            return defaultValue[value] ? value : 'left';
        },
        queryCommandState : function(){
            return this.highlight ? -1 : 0;
                
        }

    };


})();

///import core
///import plugins\removeformat.js
///commands 鐎涙ぞ缍嬫０婊嗗,閼冲本娅欓懝锟界�妤�娇,鐎涙ぞ缍�娑撳鍨濈痪锟介崚鐘绘珟缁撅拷
///commandsName  ForeColor,BackColor,FontSize,FontFamily,Underline,StrikeThrough
///commandsTitle  鐎涙ぞ缍嬫０婊嗗,閼冲本娅欓懝锟界�妤�娇,鐎涙ぞ缍�娑撳鍨濈痪锟介崚鐘绘珟缁撅拷
/**
 * @description 鐎涙ぞ缍�
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    閹笛嗩攽閻ㄥ嫬濮涢懗钘夋倳缁夛拷
 * @param {String}    value             娴肩姴鍙嗛惃鍕拷
 */
UE.plugins['font'] = function() {
    var me = this,
        fonts = {
            'forecolor':'color',
            'backcolor':'background-color',
            'fontsize':'font-size',
            'fontfamily':'font-family',
            'underline':'text-decoration',
            'strikethrough':'text-decoration'
        };
    me.setOpt({
        'fontfamily':[
            { name:'songti',val:'鐎瑰缍�SimSun'},
            { name:'yahei',val:'瀵邦喛钂嬮梿鍛寸拨,Microsoft YaHei'},
            { name:'kaiti',val:'濡よ渹缍�濡よ渹缍媉GB2312, SimKai'},
            { name:'heiti',val:'姒涙垳缍� SimHei'},
            { name:'lishu',val:'闂呮湹鍔� SimLi'},
            { name:'andaleMono',val:'andale mono'},
            { name:'arial',val:'arial, helvetica,sans-serif'},
            { name:'arialBlack',val:'arial black,avant garde'},
            { name:'comicSansMs',val:'comic sans ms'},
            { name:'impact',val:'impact,chicago'},
            { name:'timesNewRoman',val:'times new roman'}
          ],
        'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]
    });

    for ( var p in fonts ) {
        (function( cmd, style ) {
            UE.commands[cmd] = {
                execCommand : function( cmdName, value ) {
                    value = value || (this.queryCommandState(cmdName) ? 'none' : cmdName == 'underline' ? 'underline' : 'line-through');
                    var me = this,
                        range = this.selection.getRange(),
                        text;

                    if ( value == 'default' ) {

                        if(range.collapsed){
                            text = me.document.createTextNode('font');
                            range.insertNode(text).select();

                        }
                        me.execCommand( 'removeFormat', 'span,a', style);
                        if(text){
                            range.setStartBefore(text).setCursor();
                            domUtils.remove(text);
                        }


                    } else {
                        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                                range.selectNodeContents(ci);
                                range.applyInlineStyle( 'span', {'style':style + ':' + value} );

                            }
                            range.selectNodeContents(this.currentSelectedArr[0]).select();
                        }else{
                            if ( !range.collapsed ) {
                                if((cmd == 'underline'||cmd=='strikethrough') && me.queryCommandValue(cmd)){
                                     me.execCommand( 'removeFormat', 'span,a', style );
                                }
                                range = me.selection.getRange();

                                range.applyInlineStyle( 'span', {'style':style + ':' + value} ).select();
                            } else {

                                var span = domUtils.findParentByTagName(range.startContainer,'span',true);
                                text = me.document.createTextNode('font');
                                if(span && !span.children.length && !span[browser.ie ? 'innerText':'textContent'].replace(fillCharReg,'').length){
                                    //for ie hack when enter
                                    range.insertNode(text);
                                     if(cmd == 'underline'||cmd=='strikethrough'){
                                         range.selectNode(text).select();
                                         me.execCommand( 'removeFormat','span,a', style, null );

                                         span = domUtils.findParentByTagName(text,'span',true);
                                         range.setStartBefore(text);

                                    }
                                    span.style.cssText += ';' + style + ':' + value;
                                    range.collapse(true).select();


                                }else{
                                    range.insertNode(text);
                                    range.selectNode(text).select();
                                    span = range.document.createElement( 'span' );

                                    if(cmd == 'underline'||cmd=='strikethrough'){
                                        //a閺嶅洨顒烽崘鍛畱娑撳秴顦甸悶鍡氱儲鏉╋拷
                                        if(domUtils.findParentByTagName(text,'a',true)){
                                            range.setStartBefore(text).setCursor();
                                             domUtils.remove(text);
                                             return;
                                         }
                                         me.execCommand( 'removeFormat','span,a', style );
                                    }

                                    span.style.cssText = style + ':' + value;


                                    text.parentNode.insertBefore(span,text);
                                    //娣囶喖顦鹃敍瀹籶an婵傛ⅴpan 娴ｅ棙鐗卞蹇庣瑝缂佈勫閻ㄥ嫰妫舵０锟�
                                    if(!browser.ie || browser.ie && browser.version == 9){
                                        var spanParent = span.parentNode;
                                        while(!domUtils.isBlockElm(spanParent)){
                                            if(spanParent.tagName == 'SPAN'){
                                                //opera閸氬牆鑻焥tyle娑撳秳绱伴崝鐘插弳";"
                                                span.style.cssText = spanParent.style.cssText + ";" + span.style.cssText;
                                            }
                                            spanParent = spanParent.parentNode;
                                        }
                                    }


                                    if(opera){
                                        setTimeout(function(){
                                            range.setStart(span,0).setCursor();
                                        });
                                    }else{
                                        range.setStart(span,0).setCursor();
                                    }

                                    //trace:981
                                    //domUtils.mergeToParent(span)


                                }
                                domUtils.remove(text);
                            }
                        }

                    }
                    return true;
                },
                queryCommandValue : function (cmdName) {
                    var startNode = this.selection.getStart();

                    //trace:946
                    if(cmdName == 'underline'||cmdName=='strikethrough' ){
                        var tmpNode = startNode,value;
                        while(tmpNode && !domUtils.isBlockElm(tmpNode) && !domUtils.isBody(tmpNode)){
                            if(tmpNode.nodeType == 1){
                                value = domUtils.getComputedStyle( tmpNode, style );

                                if(value != 'none'){
                                    return value;
                                }
                            }

                            tmpNode = tmpNode.parentNode;
                        }
                        return 'none';
                    }
                    return  domUtils.getComputedStyle( startNode, style );
                },
                queryCommandState : function(cmdName){
                    if(this.highlight){
                       return -1;
                   }
                    if(!(cmdName == 'underline'||cmdName=='strikethrough')){
                        return 0;
                    }
                    return this.queryCommandValue(cmdName) == (cmdName == 'underline' ? 'underline' : 'line-through');
                }
            };
        })( p, fonts[p] );
    }


};
///import core
///commands 鐡掑懘鎽奸幒锟介崣鏍ㄧХ闁剧偓甯�
///commandsName  Link,Unlink
///commandsTitle  鐡掑懘鎽奸幒锟介崣鏍ㄧХ闁剧偓甯�
///commandsDialog  dialogs\link\link.html
/**
 * 鐡掑懘鎽奸幒锟�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     link閹绘帒鍙嗙搾鍛存懠閹猴拷
 * @param   {Object}  options         url閸︽澘娼冮敍瀹糹tle閺嶅洭顣介敍瀹糰rget閺勵垰鎯侀幍鎾崇磻閺備即銆�
 * @author zhanyi
 */
/**
 * 閸欐牗绉烽柧鐐复
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     unlink閸欐牗绉烽柧鐐复
 * @author zhanyi
 */
(function() {
    function optimize( range ) {
        var start = range.startContainer,end = range.endContainer;

        if ( start = domUtils.findParentByTagName( start, 'a', true ) ) {
            range.setStartBefore( start );
        }
        if ( end = domUtils.findParentByTagName( end, 'a', true ) ) {
            range.setEndAfter( end );
        }
    }


    UE.commands['unlink'] = {
        execCommand : function() {
            var as,
                range = new dom.Range(this.document),
                tds = this.currentSelectedArr,
                bookmark;
            if(tds && tds.length >0){
                for(var i=0,ti;ti=tds[i++];){
                    as = domUtils.getElementsByTagName(ti,'a');
                    for(var j=0,aj;aj=as[j++];){
                        domUtils.remove(aj,true);
                    }
                }
                if(domUtils.isEmptyNode(tds[0])){
                    range.setStart(tds[0],0).setCursor();
                }else{
                    range.selectNodeContents(tds[0]).select();
                }
            }else{
                range = this.selection.getRange();
                if(range.collapsed && !domUtils.findParentByTagName( range.startContainer, 'a', true )){
                    return;
                }
                bookmark = range.createBookmark();
                optimize( range );
                range.removeInlineStyle( 'a' ).moveToBookmark( bookmark ).select();
            }
        },
        queryCommandState : function(){
            return !this.highlight && this.queryCommandValue('link') ?  0 : -1;
        }

    };
    function doLink(range,opt,me){
        var rngClone = range.cloneRange(),
            link = me.queryCommandValue('link');
        optimize( range = range.adjustmentBoundary() );
        var start = range.startContainer;
        if(start.nodeType == 1 && link){
            start = start.childNodes[range.startOffset];
            if(start && start.nodeType == 1 && start.tagName == 'A' && /^(?:https?|ftp|file)\s*:\s*\/\//.test(start[browser.ie?'innerText':'textContent'])){
                start[browser.ie ? 'innerText' : 'textContent'] =  utils.html(opt.textValue||opt.href);

            }
        }
        if( !rngClone.collapsed || link){
            range.removeInlineStyle( 'a' );
            rngClone = range.cloneRange();
        }

        if ( rngClone.collapsed ) {
            var a = range.document.createElement( 'a'),
                text = '';
            if(opt.textValue){

                text =   utils.html(opt.textValue);
                delete opt.textValue;
            }else{
                text =   utils.html(opt.href);

            }
            domUtils.setAttributes( a, opt );
            start =  domUtils.findParentByTagName( rngClone.startContainer, 'a', true );
            if(start && domUtils.isInNodeEndBoundary(rngClone,start)){
                range.setStartAfter(start).collapse(true);

            }
            a[browser.ie ? 'innerText' : 'textContent'] = text;
            range.insertNode(a).selectNode( a );
        } else {
            range.applyInlineStyle( 'a', opt );

        }
    }
    UE.commands['link'] = {
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        },
        execCommand : function( cmdName, opt ) {

            var range = new dom.Range(this.document),
                tds = this.currentSelectedArr;

            opt.data_ue_src && (opt.data_ue_src = utils.unhtml(opt.data_ue_src,/[<">]/g));
            opt.href && (opt.href = utils.unhtml(opt.href,/[<">]/g));
            opt.textValue && (opt.textValue = utils.unhtml(opt.textValue,/[<">]/g));
            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    if(domUtils.isEmptyNode(ti)){
                        ti[browser.ie ? 'innerText' : 'textContent'] =   utils.html(opt.textValue || opt.href);
                    }
                    doLink(range.selectNodeContents(ti),opt,this);
                }
                range.selectNodeContents(tds[0]).select();


            }else{
                doLink(range=this.selection.getRange(),opt,this);
                //闂傤厼鎮庨柈鎴掔瑝閸旂姴宕版担宥囶儊閿涘苯顪嗛弸婊冨娴滃棔绱伴崷鈺濋崥搴ょ珶婢舵矮閲滈崡鐘辩秴缁楋箒濡悙鐧哥礉鐎佃壈鍤閺勵垰娴橀悧鍥剹閺咁垳绮嶉幋鎰畱閸掓銆冮敍灞藉毉閻滄壆鈹栭惂浠嬫６妫帮拷
                range.collapse().select(true);

            }
        },
        queryCommandValue : function() {


            var range = new dom.Range(this.document),
                tds = this.currentSelectedArr,
                as,
                node;
            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    as = ti.getElementsByTagName('a');
                    if(as[0]){
                        return as[0];
                    }
                }
            }else{
                range = this.selection.getRange();



                if ( range.collapsed ) {
//                    node = this.selection.getStart();
                    //閸︹暐e娑撳獞etstart()閸欐牕锟介崑蹇庣瑐娴滐拷
                    node = range.startContainer;
                    node = node.nodeType == 1 ? node : node.parentNode;

                    if ( node && (node = domUtils.findParentByTagName( node, 'a', true )) && ! domUtils.isInNodeEndBoundary(range,node)) {

                        return node;
                    }
                } else {
                    //trace:1111  婵″倹鐏夐弰锟絧><a>xx</a></p> startContainer閺勭棷鐏忓彉绱伴幍鍙ョ瑝閸掔櫘
                    range.shrinkBoundary();
                    var start = range.startContainer.nodeType  == 3 || !range.startContainer.childNodes[range.startOffset] ? range.startContainer : range.startContainer.childNodes[range.startOffset],
                        end =  range.endContainer.nodeType == 3 || range.endOffset == 0 ? range.endContainer : range.endContainer.childNodes[range.endOffset-1],

                        common = range.getCommonAncestor();


                    node = domUtils.findParentByTagName( common, 'a', true );
                    if ( !node && common.nodeType == 1){

                        var as = common.getElementsByTagName( 'a' ),
                            ps,pe;

                        for ( var i = 0,ci; ci = as[i++]; ) {
                            ps = domUtils.getPosition( ci, start ),pe = domUtils.getPosition( ci,end);
                            if ( (ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                                &&
                                (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                                ) {
                                node = ci;
                                break;
                            }
                        }
                    }

                    return node;
                }
            }


        }
    };


})();

///import core
///import plugins\inserthtml.js
///commands 閸︽澘娴�
///commandsName  Map,GMap
///commandsTitle  Baidu閸︽澘娴�Google閸︽澘娴�
///commandsDialog  dialogs\map\map.html,dialogs\gmap\gmap.html
UE.commands['gmap'] =
UE.commands['map'] = {
     queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///import plugins\inserthtml.js
///commands 閹绘帒鍙嗗鍡樼仸
///commandsName  InsertFrame
///commandsTitle  閹绘帒鍙咺frame
///commandsDialog  dialogs\insertframe\insertframe.html

UE.plugins['insertframe'] = function() {
   var me =this;
    function deleteIframe(){
        me._iframe && delete me._iframe;
    }

    me.addListener("selectionchange",function(){
        deleteIframe();
    });
    me.commands["insertframe"] = {

        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};


/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-7-2
 * Time: 娑撳宕�:22
 * To change this template use File | Settings | File Templates.
 */
UE.commands['scrawl'] = {
    queryCommandState : function(){
        return this.highlight|| ( browser.ie && browser.version  <= 8 ) ? -1 :0;
    }
};

///import core
///commands 濞撳懘娅庨弽鐓庣础
///commandsName  RemoveFormat
///commandsTitle  濞撳懘娅庨弽鐓庣础
/**
 * @description 濞撳懘娅庨弽鐓庣础
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     removeformat濞撳懘娅庨弽鐓庣础閸涙垝鎶�
 * @param   {String}   tags                娴犮儵锟介崣鐑芥瀵拷娈戦弽鍥╊劮閵嗗倸顪嗛敍姝磒an,a
 * @param   {String}   style               閺嶅嘲绱�
 * @param   {String}   attrs               鐏炵偞锟�
 * @param   {String}   notIncluedA    閺勵垰鎯侀幎濂遍弽鍥╊劮閸掑洤绱�
 * @author zhanyi
 */
UE.plugins['removeformat'] = function(){
    var me = this;
    me.setOpt({
       'removeFormatTags': 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var',
       'removeFormatAttributes':'class,style,lang,width,height,align,hspace,valign'
    });
    me.commands['removeformat'] = {
        execCommand : function( cmdName, tags, style, attrs,notIncludeA ) {

            var tagReg = new RegExp( '^(?:' + (tags || this.options.removeFormatTags).replace( /,/g, '|' ) + ')$', 'i' ) ,
                removeFormatAttributes = style ? [] : (attrs || this.options.removeFormatAttributes).split( ',' ),
                range = new dom.Range( this.document ),
                bookmark,node,parent,
                filter = function( node ) {
                    return node.nodeType == 1;
                };

            function isRedundantSpan (node) {
                if (node.nodeType == 3 || node.tagName.toLowerCase() != 'span'){
                    return 0;
                }
                if (browser.ie) {
                    //ie 娑撳鍨介弬顓炵杽閺佸牞绱濋幍锟戒簰閸欘亣鍏樼粻锟藉礋閻⑩暞tyle閺夈儱鍨介弬锟�
                    //return node.style.cssText == '' ? 1 : 0;
                    var attrs = node.attributes;
                    if ( attrs.length ) {
                        for ( var i = 0,l = attrs.length; i<l; i++ ) {
                            if ( attrs[i].specified ) {
                                return 0;
                            }
                        }
                        return 1;
                    }
                }
                return !node.attributes.length;
            }
            function doRemove( range ) {

                var bookmark1 = range.createBookmark();
                if ( range.collapsed ) {
                    range.enlarge( true );
                }

                //娑撳秷鍏橀幎濂遍弽鍥╊劮閸掑洣绨�
                if(!notIncludeA){
                    var aNode = domUtils.findParentByTagName(range.startContainer,'a',true);
                    if(aNode){
                        range.setStartBefore(aNode);
                    }

                    aNode = domUtils.findParentByTagName(range.endContainer,'a',true);
                    if(aNode){
                        range.setEndAfter(aNode);
                    }

                }


                bookmark = range.createBookmark();

                node = bookmark.start;

                //閸掑洤绱戞慨锟�
                while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                    domUtils.breakParent( node, parent );

                    domUtils.clearEmptySibling( node );
                }
                if ( bookmark.end ) {
                    //閸掑洨绮ㄩ弶锟�
                    node = bookmark.end;
                    while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                        domUtils.breakParent( node, parent );
                        domUtils.clearEmptySibling( node );
                    }

                    //瀵拷顬婇崢濠氭珟閺嶅嘲绱�
                    var current = domUtils.getNextDomNode( bookmark.start, false, filter ),
                        next;
                    while ( current ) {
                        if ( current == bookmark.end ) {
                            break;
                        }

                        next = domUtils.getNextDomNode( current, true, filter );

                        if ( !dtd.$empty[current.tagName.toLowerCase()] && !domUtils.isBookmarkNode( current ) ) {
                            if ( tagReg.test( current.tagName ) ) {
                                if ( style ) {
                                    domUtils.removeStyle( current, style );
                                    if ( isRedundantSpan( current ) && style != 'text-decoration'){
                                        domUtils.remove( current, true );
                                    }
                                } else {
                                    domUtils.remove( current, true );
                                }
                            } else {
                                //trace:939  娑撳秷鍏橀幎濡塱st娑撳﹦娈戦弽宄扮础閸樼粯甯�
                                if(!dtd.$tableContent[current.tagName] && !dtd.$list[current.tagName]){
                                    domUtils.removeAttributes( current, removeFormatAttributes );
                                    if ( isRedundantSpan( current ) ){
                                        domUtils.remove( current, true );
                                    }
                                }

                            }
                        }
                        current = next;
                    }
                }
                //trace:1035
                //trace:1096 娑撳秷鍏橀幎濡昫娑撳﹦娈戦弽宄扮础閸樼粯甯�敍灞剧槷婵″倽绔熷锟�
                var pN = bookmark.start.parentNode;
                if(domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName] && !dtd.$list[pN.tagName]){
                    domUtils.removeAttributes(  pN,removeFormatAttributes );
                }
                pN = bookmark.end.parentNode;
                if(bookmark.end && domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName]&& !dtd.$list[pN.tagName]){
                    domUtils.removeAttributes(  pN,removeFormatAttributes );
                }
                range.moveToBookmark( bookmark ).moveToBookmark(bookmark1);
                //濞撳懘娅庨崘妞剧稇閻ㄥ嫪鍞惍锟�b><bookmark></b>
                var node = range.startContainer,
                    tmp,
                    collapsed = range.collapsed;
                while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                    tmp = node.parentNode;
                    range.setStartBefore(node);
                    //trace:937
                    //閺囧瓨鏌婄紒鎾存将鏉堝湱鏅�
                    if(range.startContainer === range.endContainer){
                        range.endOffset--;
                    }
                    domUtils.remove(node);
                    node = tmp;
                }

                if(!collapsed){
                    node = range.endContainer;
                    while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                        tmp = node.parentNode;
                        range.setEndBefore(node);
                        domUtils.remove(node);

                        node = tmp;
                    }


                }
            }

            if ( this.currentSelectedArr && this.currentSelectedArr.length ) {
                for ( var i = 0,ci; ci = this.currentSelectedArr[i++]; ) {
                    range.selectNodeContents( ci );
                    doRemove( range );
                }
                range.selectNodeContents( this.currentSelectedArr[0] ).select();
            } else {

                range = this.selection.getRange();
                doRemove( range );
                range.select();
            }
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }

    };

};

///import core
///commands 瀵洜鏁�
///commandsName  BlockQuote
///commandsTitle  瀵洜鏁�
/**
 * 
 * 瀵洜鏁ゅΟ鈥虫健鐎圭偟骞�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     blockquote瀵洜鏁�
 */


UE.plugins['blockquote'] = function(){
    var me = this;
    function getObj(editor){
        return domUtils.filterNodeList(editor.selection.getStartElementPath(),'blockquote');
    };
    me.commands['blockquote'] = {
        execCommand : function( cmdName, attrs ) {
            var range = this.selection.getRange(),
                obj = getObj(this),
                blockquote = dtd.blockquote,
                bookmark = range.createBookmark(),
                tds = this.currentSelectedArr;
            if ( obj ) {
                if(tds && tds.length){
                    domUtils.remove(obj,true);
                }else{
                    var start = range.startContainer,
                        startBlock = domUtils.isBlockElm(start) ? start : domUtils.findParent(start,function(node){return domUtils.isBlockElm(node)}),

                        end = range.endContainer,
                        endBlock = domUtils.isBlockElm(end) ? end :  domUtils.findParent(end,function(node){return domUtils.isBlockElm(node)});

                    //婢跺嫮鎮婃稉锟界瑓li
                    startBlock = domUtils.findParentByTagName(startBlock,'li',true) || startBlock;
                    endBlock = domUtils.findParentByTagName(endBlock,'li',true) || endBlock;


                    if(startBlock.tagName == 'LI' || startBlock.tagName == 'TD' || startBlock === obj){
                        domUtils.remove(obj,true);
                    }else{
                        domUtils.breakParent(startBlock,obj);
                    }

                    if(startBlock !== endBlock){
                        obj = domUtils.findParentByTagName(endBlock,'blockquote');
                        if(obj){
                            if(endBlock.tagName == 'LI' || endBlock.tagName == 'TD'){
                                domUtils.remove(obj,true);
                            }else{
                                domUtils.breakParent(endBlock,obj);
                            }

                        }
                    }

                    var blockquotes = domUtils.getElementsByTagName(this.document,'blockquote');
                    for(var i=0,bi;bi=blockquotes[i++];){
                        if(!bi.childNodes.length){
                            domUtils.remove(bi);
                        }else if(domUtils.getPosition(bi,startBlock)&domUtils.POSITION_FOLLOWING && domUtils.getPosition(bi,endBlock)&domUtils.POSITION_PRECEDING){
                            domUtils.remove(bi,true);
                        }
                    }
                }



            } else {

                var tmpRange = range.cloneRange(),
                    node = tmpRange.startContainer.nodeType == 1 ? tmpRange.startContainer : tmpRange.startContainer.parentNode,
                    preNode = node,
                    doEnd = 1;

                //鐠嬪啯鏆ｅ锟筋瀶
                while ( 1 ) {
                    if ( domUtils.isBody(node) ) {
                        if ( preNode !== node ) {
                            if ( range.collapsed ) {
                                tmpRange.selectNode( preNode );
                                doEnd = 0;
                            } else {
                                tmpRange.setStartBefore( preNode );
                            }
                        }else{
                            tmpRange.setStart(node,0);
                        }

                        break;
                    }
                    if ( !blockquote[node.tagName] ) {
                        if ( range.collapsed ) {
                            tmpRange.selectNode( preNode );
                        } else{
                            tmpRange.setStartBefore( preNode);
                        }
                        break;
                    }

                    preNode = node;
                    node = node.parentNode;
                }

                //鐠嬪啯鏆ｇ紒鎾存将
                if ( doEnd ) {
                    preNode = node =  node = tmpRange.endContainer.nodeType == 1 ? tmpRange.endContainer : tmpRange.endContainer.parentNode;
                    while ( 1 ) {

                        if ( domUtils.isBody( node ) ) {
                            if ( preNode !== node ) {

                                tmpRange.setEndAfter( preNode );

                            } else {
                                tmpRange.setEnd( node, node.childNodes.length );
                            }

                            break;
                        }
                        if ( !blockquote[node.tagName] ) {
                            tmpRange.setEndAfter( preNode );
                            break;
                        }

                        preNode = node;
                        node = node.parentNode;
                    }

                }


                node = range.document.createElement( 'blockquote' );
                domUtils.setAttributes( node, attrs );
                node.appendChild( tmpRange.extractContents() );
                tmpRange.insertNode( node );
                //閸樺娅庨柌宥咁樉閻拷
                var childs = domUtils.getElementsByTagName(node,'blockquote');
                for(var i=0,ci;ci=childs[i++];){
                    if(ci.parentNode){
                        domUtils.remove(ci,true);
                    }
                }

            }
            range.moveToBookmark( bookmark ).select();
        },
        queryCommandState : function() {
            if(this.highlight){
                return -1;
            }
            return getObj(this) ? 1 : 0;
        }
    };
};


///import core
///commands 婢堆冪毈閸愭瑨娴嗛幑锟�
///commandsName touppercase
///commandsName tolowercase
///commandsTitle  婢堆冪毈閸愭瑨娴嗛幑锟�
/**
 * 婢堆冪毈閸愭瑨娴嗛幑锟�
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName     cmdName="convertcase"
 */
UE.commands['touppercase'] =
UE.commands['tolowercase'] = {
    execCommand:function (cmd) {
        var me = this,rng = new dom.Range(me.document),
            convertCase = function(){
                var rng = me.selection.getRange();

                if(rng.collapsed){
                    return rng;
                }

                var bk = rng.createBookmark(),
                    bkEnd = bk.end,
                    filterFn = function( node ) {
                        return !domUtils.isBr(node) && !domUtils.isWhitespace( node );
                    },
                    curNode = domUtils.getNextDomNode( bk.start, false, filterFn );

                while ( curNode && (domUtils.getPosition( curNode, bkEnd ) & domUtils.POSITION_PRECEDING) ) {

                    if ( curNode.nodeType == 3 ) {
                        curNode.nodeValue = curNode.nodeValue[cmd == 'touppercase' ? 'toUpperCase' : 'toLowerCase']();
                    }
                    curNode = domUtils.getNextDomNode( curNode, true, filterFn );
                    if(curNode === bkEnd){
                        break;
                    }

                }
                return rng.moveToBookmark(bk);

            };

        //table閻ㄥ嫬顦甸悶锟�
        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                if(ci.style.display != 'none' && !domUtils.isEmptyBlock(ci)){
                    rng.selectNodeContents(ci).select();
                    convertCase();
                }

            }
            rng.selectNodeContents(me.currentSelectedArr[0]).select();
        }else{
            convertCase().select();
        }
    },
    queryCommandState:function () {
        return this.highlight ? -1 : 0;
    }
};


///import core
///import plugins\paragraph.js
///commands 妫ｆ牞顢戠紓鈺勭箻
///commandsName  Outdent,Indent
///commandsTitle  閸欐牗绉风紓鈺勭箻,妫ｆ牞顢戠紓鈺勭箻
/**
 * 妫ｆ牞顢戠紓鈺勭箻
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     outdent閸欐牗绉风紓鈺勭箻閿涘ndent缂傗晞绻�
 */
UE.commands['indent'] = {
    execCommand : function() {
         var me = this,value = me.queryCommandState("indent") ? "0em" : (me.options.indentValue || '2em');
         me.execCommand('Paragraph','p',{style:'text-indent:'+ value});
    },
    queryCommandState : function() {
        if(this.highlight){return -1;}
        var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
        return pN && pN.style.textIndent && parseInt(pN.style.textIndent) ?  1 : 0;
    }

};

///import core
///commands 閹垫挸宓�
///commandsName  Print
///commandsTitle  閹垫挸宓�
/**
 * @description 閹垫挸宓�
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     print閹垫挸宓冪紓鏍帆閸ｃ劌鍞寸�锟�
 * @author zhanyi
 */
UE.commands['print'] = {
    execCommand : function(){
        this.window.print();
    },
    notNeedUndo : 1
};


///import core
///commands 妫板嫯顬�
///commandsName  Preview
///commandsTitle  妫板嫯顬�
/**
 * 妫板嫯顬�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     preview妫板嫯顬囩紓鏍帆閸ｃ劌鍞寸�锟�
 */
UE.commands['preview'] = {
    execCommand : function(){
        var w = window.open('', '_blank', ''),
            d = w.document;
        d.open();
        d.write(this.getAllHtml());
        d.close();
    },
    notNeedUndo : 1
};

///import core
///import plugins\inserthtml.js
///commands 閻楄鐣╃�妤冾儊
///commandsName  Spechars
///commandsTitle  閻楄鐣╃�妤冾儊
///commandsDialog  dialogs\spechars\spechars.html
UE.commands['spechars'] = {
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///import plugins\image.js
///commands 閹绘帒鍙嗙悰銊﹀剰
///commandsName  Emotion
///commandsTitle  鐞涖劍鍎�
///commandsDialog  dialogs\emotion\emotion.html
UE.commands['emotion'] = {
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///commands 閸忋劑锟�
///commandsName  SelectAll
///commandsTitle  閸忋劑锟�
/**
 * 闁鑵戦幍锟芥箒
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    selectall闁鑵戠紓鏍帆閸ｃ劑鍣烽惃鍕閺堝鍞寸�锟�
 * @author zhanyi
*/
UE.plugins['selectall'] = function(){
    var me = this;
    me.commands['selectall'] = {
        execCommand : function(){
            //閸樼粯甯�禍鍡楀斧閻㈢喓娈憇electAll,閸ョ姳璐熸导姘毉閻滅増濮ら柨娆忔嫲瑜版挸鍞寸�閫涜礋缁岀儤妞傞敍灞肩瑝閼宠棄鍤悳浼存４閸氬牏濮搁幀浣烘畱閸忓鐖�
            var me = this,body = me.body,
                range = me.selection.getRange();
            range.selectNodeContents(body);
            if(domUtils.isEmptyBlock(body)){
                //opera娑撳秷鍏橀懛顏勫З閸氬牆鑻熼崚鏉垮帗缁辩姷娈戦柌宀冪珶閿涘矁顪呴幍瀣З婢跺嫮鎮婃稉锟界瑓
                if(browser.opera && body.firstChild && body.firstChild.nodeType == 1){
                    range.setStartAtFirst(body.firstChild);
                }
                range.collapse(true);
            }

            range.select(true);
            this.selectAll = true;
        },
        notNeedUndo : 1
    };

    me.addListener('ready',function(){

        domUtils.on(me.document,'click',function(evt){

            me.selectAll = false;
        });
    });

};

///import core
///commands 閺嶇厧绱�
///commandsName  Paragraph
///commandsTitle  濞堜絻鎯ら弽鐓庣础
/**
 * 濞堜絻鎯ら弽宄扮础
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     paragraph閹绘帒鍙嗗▓浣冩儰閹笛嗩攽閸涙垝鎶�
 * @param   {String}   style               閺嶅洨顒烽崐闂磋礋閿涳拷p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
 * @param   {String}   attrs               閺嶅洨顒烽惃鍕潣閹拷
 * @author zhanyi
 */
UE.plugins['paragraph'] = function() {
    var me = this,
        block = domUtils.isBlockElm,
        notExchange = ['TD','LI','PRE'],

        doParagraph = function(range,style,attrs,sourceCmdName){
            var bookmark = range.createBookmark(),
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node );
                },
                para;

            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current && !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node );
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    
                    para = range.document.createElement( style );
                    if(attrs){
                        domUtils.setAttributes(para,attrs);
                        if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                            para.style.cssText = attrs.style;
                        }
                    }
                    para.appendChild( tmpRange.extractContents() );
                    //闂囷拷顪呴崘鍛啇閸楃姳缍�
                    if(domUtils.isEmptyNode(para)){
                        domUtils.fillChar(range.document,para);
                        
                    }

                    tmpRange.insertNode( para );

                    var parent = para.parentNode;
                    //婵″倹鐏塸ara娑撳﹣绔寸痪褎妲告稉锟介嚋block閸忓啰绀屾稉鏂剧瑝閺勭棑ody,td鐏忓崬鍨归梽銈呯暊
                    if ( block( parent ) && !domUtils.isBody( para.parentNode ) && utils.indexOf(notExchange,parent.tagName)==-1) {
                        //鐎涙ê鍋峝ir,style
                        if(!(sourceCmdName && sourceCmdName == 'customstyle')){
                            parent.getAttribute('dir') && para.setAttribute('dir',parent.getAttribute('dir'));
                            //trace:1070
                            parent.style.cssText && (para.style.cssText = parent.style.cssText + ';' + para.style.cssText);
                            //trace:1030
                            parent.style.textAlign && !para.style.textAlign && (para.style.textAlign = parent.style.textAlign);
                            parent.style.textIndent && !para.style.textIndent && (para.style.textIndent = parent.style.textIndent);
                            parent.style.padding && !para.style.padding && (para.style.padding = parent.style.padding);
                        }

                        //trace:1706 闁瀚ㄩ惃鍕皑閺勭棢1-6鐟曚礁鍨归梽锟�
                        if(attrs && /h\d/i.test(parent.tagName) && !/h\d/i.test(para.tagName) ){
                            domUtils.setAttributes(parent,attrs);
                            if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                                parent.style.cssText = attrs.style;
                            }
                            domUtils.remove(para,true);
                            para = parent;
                        }else{
                            domUtils.remove( para.parentNode, true );
                        }

                    }
                    if(  utils.indexOf(notExchange,parent.tagName)!=-1){
                        current = parent;
                    }else{
                       current = para;
                    }


                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };
    me.setOpt('paragraph',{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''});
    me.commands['paragraph'] = {
        execCommand : function( cmdName, style,attrs,sourceCmdName ) {
            var range = new dom.Range(this.document);
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    //trace:1079 娑撳秵妯夌粈铏规畱娑撳秴顦甸悶鍡礉閹绘帒鍙嗛弬鍥ㄦ拱閿涘瞼鈹栭惃鍓嘾娑旂喕鍏橀崝鐘辩瑐閻╃绨查惃鍕垼缁涳拷
                    if(ti.style.display == 'none'){
                        continue;
                    }
                    if(domUtils.isEmptyNode(ti)){
                      
                        var tmpTxt = this.document.createTextNode('paragraph');
                        ti.innerHTML = '';
                        ti.appendChild(tmpTxt);
                    }
                    doParagraph(range.selectNodeContents(ti),style,attrs,sourceCmdName);
                    if(tmpTxt){
                        var pN = tmpTxt.parentNode;
                        domUtils.remove(tmpTxt);
                        if(domUtils.isEmptyNode(pN)){
                            domUtils.fillNode(this.document,pN);
                        }
                         
                    }


                }
                var td = this.currentSelectedArr[0];

                if(domUtils.isEmptyBlock(td)){
                    range.setStart(td,0).setCursor(false,true);
                }else{
                    range.selectNode(td).select();
                }

            }else{
                range = this.selection.getRange();
                 //闂傤厼鎮庨弮璺哄礋閻欘剙顦甸悶锟�
                if(range.collapsed){
                    var txt = this.document.createTextNode('p');
                    range.insertNode(txt);
                    //閸樼粯甯�崘妞剧稇閻ㄥ垿illchar
                    if(browser.ie){
                        var node = txt.previousSibling;
                        if(node && domUtils.isWhitespace(node)){
                            domUtils.remove(node);
                        }
                        node = txt.nextSibling;
                        if(node && domUtils.isWhitespace(node)){
                            domUtils.remove(node);
                        } 
                    }

                }
                range = doParagraph(range,style,attrs,sourceCmdName);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    pN = txt.parentNode;

                    domUtils.remove(txt);
                    
                    if(domUtils.isBlockElm(pN)&&domUtils.isEmptyNode(pN)){
                        domUtils.fillNode(this.document,pN);
                    }

                }

                if(browser.gecko && range.collapsed && range.startContainer.nodeType == 1){
                    var child = range.startContainer.childNodes[range.startOffset];
                    if(child && child.nodeType == 1 && child.tagName.toLowerCase() == style){
                        range.setStart(child,0).collapse(true);
                    }
                }
                //trace:1097 閸樼喐娼甸張濉紃ue閿涘苯甯崶鐘茬箷娴滃棴绱濇担鍡楀箵娴滃棗姘ㄦ稉宥堝厴濞撳懘娅庢径姘稇閻ㄥ嫬宕版担宥囶儊娴滐拷
                range.select();

            }
            return true;
        },
        queryCommandValue : function() {
            var node = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
            return node ? node.tagName.toLowerCase() : '';
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};

///import core
///commands 鏉堟挸鍙嗛惃鍕煙閸氾拷
///commandsName  DirectionalityLtr,DirectionalityRtl
///commandsTitle  娴犲骸涔忛崥鎴濆礁鏉堟挸鍙�娴犲骸褰搁崥鎴濅箯鏉堟挸鍙�
/**
 * 鏉堟挸鍙嗛惃鍕煙閸氾拷
 * @function
 * @name baidu.editor.execCommand
 * @param {String}   cmdName    directionality閹笛嗩攽閸戣姤鏆熼惃鍕棘閺侊拷
 * @param {String}    forward    ltr娴犲骸涔忛崥鎴濆礁鏉堟挸鍙嗛敍瀹簍l娴犲骸褰搁崥鎴濅箯鏉堟挸鍙�
 */
(function() {
    var block = domUtils.isBlockElm ,
        getObj = function(editor){
//            var startNode = editor.selection.getStart(),
//                parents;
//            if ( startNode ) {
//                //閺屻儲澹橀幍锟芥箒閻ㄥ嫭妲竍lock閻ㄥ嫮鍩楁禍鑼跺Ν閻愶拷
//                parents = domUtils.findParents( startNode, true, block, true );
//                for ( var i = 0,ci; ci = parents[i++]; ) {
//                    if ( ci.getAttribute( 'dir' ) ) {
//                        return ci;
//                    }
//                }
//            }
            return domUtils.filterNodeList(editor.selection.getStartElementPath(),function(n){return n.getAttribute('dir')});

        },
        doDirectionality = function(range,editor,forward){
            
            var bookmark,
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace(node);
                },

                obj = getObj( editor );

            if ( obj && range.collapsed ) {
                obj.setAttribute( 'dir', forward );
                return range;
            }
            bookmark = range.createBookmark();
            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current &&  !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node );
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    var common = tmpRange.getCommonAncestor();
                    if ( !domUtils.isBody( common ) && block( common ) ) {
                        //闁秴宸婚崚棰佺啊block閼哄倻鍋�
                        common.setAttribute( 'dir', forward );
                        current = common;
                    } else {
                        //濞屸剝婀侀柆宥呭坊閸掑府绱濆ǎ璇插娑擄拷閲渂lock閼哄倻鍋�
                        var p = range.document.createElement( 'p' );
                        p.setAttribute( 'dir', forward );
                        var frag = tmpRange.extractContents();
                        p.appendChild( frag );
                        tmpRange.insertNode( p );
                        current = p;
                    }

                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };
    UE.commands['directionality'] = {
        execCommand : function( cmdName,forward ) {
            var range = new dom.Range(this.document);
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    if(ti.style.display != 'none'){
                        doDirectionality(range.selectNode(ti),this,forward);
                    }
                }
                range.selectNode(this.currentSelectedArr[0]).select();
            }else{
                range = this.selection.getRange();
                //闂傤厼鎮庨弮璺哄礋閻欘剙顦甸悶锟�
                if(range.collapsed){
                    var txt = this.document.createTextNode('d');
                    range.insertNode(txt);
                }
                doDirectionality(range,this,forward);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }

                range.select();
                

            }
            return true;
        },
        queryCommandValue : function() {

            var node = getObj(this);
            return node ? node.getAttribute('dir') : 'ltr';
        },
       queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
})();


///import core
///import plugins\inserthtml.js
///commands 閸掑棗澹婄痪锟�
///commandsName  Horizontal
///commandsTitle  閸掑棝娈х痪锟�
/**
 * 閸掑棗澹婄痪锟�
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    horizontal閹绘帒鍙嗛崚鍡楀缁撅拷
 */
UE.commands['horizontal'] = {
    execCommand : function( cmdName ) {
        var me = this;
        if(me.queryCommandState(cmdName)!==-1){
            me.execCommand('insertHtml','<hr>');
            var range = me.selection.getRange(),
                start = range.startContainer;
            if(start.nodeType == 1 && !start.childNodes[range.startOffset] ){

                var tmp;
                if(tmp = start.childNodes[range.startOffset - 1]){
                    if(tmp.nodeType == 1 && tmp.tagName == 'HR'){
                        if(me.options.enterTag == 'p'){
                            tmp = me.document.createElement('p');
                            range.insertNode(tmp);
                            range.setStart(tmp,0).setCursor();

                        }else{
                            tmp = me.document.createElement('br');
                            range.insertNode(tmp);
                            range.setStartBefore(tmp).setCursor();
                        }
                    }
                }

            }
            return true;
        }

    },
    //鏉堝湱鏅崷鈺癮ble闁插奔绗夐懗钘夊閸掑棝娈х痪锟�
    queryCommandState : function() {
        return this.highlight || domUtils.filterNodeList(this.selection.getStartElementPath(),'table') ? -1 : 0;
    }
};

///import core
///import plugins\inserthtml.js
///commands 閺冦儲婀�閺冨爼妫�
///commandsName  Date,Time
///commandsTitle  閺冦儲婀�閺冨爼妫�
/**
 * 閹绘帒鍙嗛弮銉︽埂
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    date閹绘帒鍙嗛弮銉︽埂
 * @author zhuwenxuan
*/
/**
 * 閹绘帒鍙嗛弮鍫曟？
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    time閹绘帒鍙嗛弮鍫曟？
 * @author zhuwenxuan
*/
UE.commands['time'] = UE.commands["date"] = {
    execCommand : function(cmd){
        var date = new Date;
        this.execCommand('insertHtml',cmd == "time" ?
            (date.getHours()+":"+ (date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes())+":"+(date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds())) :
            (date.getFullYear()+"-"+((date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1)+"-"+(date.getDate()<10?"0"+date.getDate():date.getDate())));
    },
    queryCommandState : function(){
            return this.highlight ? -1 :0;
    }
};




///import core
///import plugins\paragraph.js
///commands 濞堢敻妫跨捄锟�
///commandsName  RowSpacingBottom,RowSpacingTop
///commandsTitle  濞堢敻妫跨捄锟�
/**
 * @description 鐠佸墽鐤嗗▓闈涘鐠猴拷濞堥潧鎮楃捄锟�
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     rowspacing鐠佸墽鐤嗗▓鐢告？鐠猴拷
 * @param   {String}   value              閸婄》绱濇禒顨峹娑撳搫宕熸担锟�
 * @param   {String}   dir          top閹存溇ottom濞堥潧澧犻崥搴㈩唽閸氾拷
 * @author zhanyi
 */
UE.plugins['rowspacing'] = function(){
    var me = this;
    me.setOpt({
        'rowspacingtop':['5', '10', '15', '20', '25'],
        'rowspacingbottom':['5', '10', '15', '20', '25']

    });
    me.commands['rowspacing'] =  {
        execCommand : function( cmdName,value,dir ) {
            this.execCommand('paragraph','p',{style:'margin-'+dir+':'+value + 'px'});
            return true;
        },
        queryCommandValue : function(cmdName,dir) {
            var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node) }),
                value;
            //trace:1026
            if(pN){
                value = domUtils.getComputedStyle(pN,'margin-'+dir).replace(/[^\d]/g,'');
                return !value ? 0 : value;
            }
            return 0;

        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};



///import core
///import plugins\paragraph.js
///commands 鐞涘矂妫跨捄锟�
///commandsName  LineHeight
///commandsTitle  鐞涘矂妫跨捄锟�
/**
 * @description 鐠佸墽鐤嗙悰灞藉敶闂傜绐�
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     lineheight鐠佸墽鐤嗙悰灞藉敶闂傜绐�
 * @param   {String}   value              閸婏拷
 * @author zhuwenxuan
 */
UE.plugins['lineheight'] = function(){
    var me = this;
    me.setOpt({'lineheight':['1', '1.5','1.75','2', '3', '4', '5']});
    me.commands['lineheight'] =  {
        execCommand : function( cmdName,value ) {
            this.execCommand('paragraph','p',{style:'line-height:'+ (value == "1" ? "normal" : value + 'em') });
            return true;
        },
        queryCommandValue : function() {
            var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node)});
            if(pN){
                var value = domUtils.getComputedStyle(pN,'line-height');
                return value == 'normal' ? 1 : value.replace(/[^\d.]*/ig,"");
            }
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};



///import core
///commands 濞撳懐鈹栭弬鍥ㄣ�
///commandsName  ClearDoc
///commandsTitle  濞撳懐鈹栭弬鍥ㄣ�
/**
 *
 * 濞撳懐鈹栭弬鍥ㄣ�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     cleardoc濞撳懐鈹栭弬鍥ㄣ�
 */

UE.commands['cleardoc'] = {
    execCommand : function( cmdName) {
        var me = this,
            enterTag = me.options.enterTag,
            range = me.selection.getRange();
        if(enterTag == "br"){
            me.body.innerHTML = "<br/>";
            range.setStart(me.body,0).setCursor();
        }else{
            me.body.innerHTML = "<p>"+(ie ? "" : "<br/>")+"</p>";
            range.setStart(me.body.firstChild,0).setCursor(false,true);
        }
    }
};


///import core
///commands 闁挎氨鍋�
///commandsName  Anchor
///commandsTitle  闁挎氨鍋�
///commandsDialog  dialogs\anchor\anchor.html
/**
 * 闁挎氨鍋�
 * @function
 * @name baidu.editor.execCommands
 * @param {String} cmdName     cmdName="anchor"閹绘帒鍙嗛柨姘卞仯
 */
UE.plugins['anchor'] = function (){
    var me = this;

    me.ready(function(){
        utils.cssRule('anchor',
            '.anchorclass{background: url(\'' + me.options.UEDITOR_HOME_URL + 'themes/default/images/anchor.gif\') no-repeat scroll left center transparent;border: 1px dotted #0000FF;cursor: auto;display: inline-block;height: 16px;width: 15px;}',me.document)
    });

    me.commands['anchor'] = {
        execCommand:function (cmd, name) {
            var range = this.selection.getRange(),img = range.getClosedNode();
            if (img && img.getAttribute('anchorname')) {
                if (name) {
                    img.setAttribute('anchorname', name);
                } else {
                    range.setStartBefore(img).setCursor();
                    domUtils.remove(img);
                }
            } else {
                if (name) {
                    //閸欘亜婀柅澶婂隘閻ㄥ嫬绱戞慨瀣絻閸忥拷
                    var anchor = this.document.createElement('img');
                    range.collapse(true);
                    domUtils.setAttributes(anchor,{
                        'anchorname':name,
                        'class':'anchorclass'
                    });
                    range.insertNode(anchor).setStartAfter(anchor).setCursor(false,true);
                }
            }
        },
        queryCommandState:function () {
            return this.highlight ? -1 : 0;
        }

    };


};

///import core
///commands 閸掔娀娅�
///commandsName  Delete
///commandsTitle  閸掔娀娅�
/**
 * 閸掔娀娅�
 * @function
 * @name baidu.editor.execCommand
 * @param  {String}    cmdName    delete閸掔娀娅�
 * @author zhanyi
 */
UE.commands['delete'] = {
    execCommand : function (){

        var range = this.selection.getRange(),
            mStart = 0,
            mEnd = 0,
            me = this;
        if(this.selectAll ){
            //trace:1633
            me.body.innerHTML = '<p>'+(browser.ie ? '&nbsp;' : '<br/>')+'</p>';

            range.setStart(me.body.firstChild,0).setCursor(false,true);

            me.selectAll = false;
            return;
        }
        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                if(ci.style.display != 'none'){
                    ci.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                }

            }
            range.setStart(me.currentSelectedArr[0],0).setCursor();
            return;
        }
        if(range.collapsed){
            return;
        }
        range.txtToElmBoundary();
        //&& !domUtils.isBlockElm(range.startContainer)
        while(!range.startOffset &&  !domUtils.isBody(range.startContainer) &&  !dtd.$tableContent[range.startContainer.tagName] ){
            mStart = 1;
            range.setStartBefore(range.startContainer);
        }
        //&& !domUtils.isBlockElm(range.endContainer)
        //娑撳秴顕弬鍥ㄦ拱閼哄倻鍋ｆ潻娑滎攽閹垮秳缍�
        //trace:2428
        while(range.endContainer.nodeType != 3 && !domUtils.isBody(range.endContainer)&&  !dtd.$tableContent[range.endContainer.tagName]  ){
            var child,endContainer = range.endContainer,endOffset = range.endOffset;
//                if(endContainer.nodeType == 3 &&  endOffset == endContainer.nodeValue.length){
//                    range.setEndAfter(endContainer);
//                    continue;
//                }

            child = endContainer.childNodes[endOffset];
            if(!child || domUtils.isBr(child) && endContainer.lastChild === child){
                range.setEndAfter(endContainer);
                continue;
            }
            break;

        }
        if(mStart){
            var start = me.document.createElement('span');
            start.innerHTML = 'start';
            start.id = '_baidu_cut_start';
            range.insertNode(start).setStartBefore(start);
        }
        if(mEnd){
            var end = me.document.createElement('span');
            end.innerHTML = 'end';
            end.id = '_baidu_cut_end';
            range.cloneRange().collapse(false).insertNode(end);
            range.setEndAfter(end);

        }



        range.deleteContents();


        if(domUtils.isBody(range.startContainer) && domUtils.isEmptyBlock(me.body)){
            me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
            range.setStart(me.body.firstChild,0).collapse(true);
        }else if ( !browser.ie && domUtils.isEmptyBlock(range.startContainer)){
            range.startContainer.innerHTML = '<br/>';
        }

        range.select(true);
    },
    queryCommandState : function(){

        if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
            return 0;
        }
        return this.highlight || this.selection.getRange().collapsed ? -1 : 0;
    }
};

///import core
///commands 鐎涙鏆熺紒鐔活吀
///commandsName  WordCount,wordCount
///commandsTitle  鐎涙鏆熺紒鐔活吀
/**
 * Created by JetBrains WebStorm.
 * User: taoqili
 * Date: 11-9-7
 * Time: 娑撳宕�:18
 * To change this template use File | Settings | File Templates.
 */

UE.plugins['wordcount'] = function(){
    var me = this;
    me.setOpt({
        wordCount:true,
        maximumWords:10000,
        wordCountMsg: me.options.wordCountMsg||me.getLang("wordCountMsg"),
        wordOverFlowMsg:me.options.wordOverFlowMsg||me.getLang("wordOverFlowMsg")
    });
    var opt = me.options,
        max = opt.maximumWords,
        msg = opt.wordCountMsg ,
        errMsg = opt.wordOverFlowMsg;
    if(!opt.wordCount){
        return;
    }
    me.commands["wordcount"]={
        queryCommandValue:function(cmd,onlyCount){
            var length,contentText,reg;
            if(onlyCount){
                reg = new RegExp("[\r\t\n]","g");
                contentText = this.getContentTxt().replace(reg,"");
                return contentText.length;
            }
            reg = new RegExp("[\r\t\n]","g");
            contentText = this.getContentTxt().replace(reg,"");
            length = contentText.length;
            if(max-length<0){
                me.fireEvent('wordcountoverflow',length);
                return errMsg;
            }

            return msg.replace("{#leave}",max-length >= 0 ? max-length:0).replace("{#count}",length);
        }
    };
};

///import core
///commands 濞ｈ濮為崚鍡涖�閸旂喕鍏�
///commandsName  PageBreak
///commandsTitle  閸掑棝銆�
/**
 * @description 濞ｈ濮為崚鍡涖�閸旂喕鍏�
 * @author zhanyi
 */
UE.plugins['pagebreak'] = function () {
    var me = this,
        notBreakTags = ['td'];

    function fillNode(node){
        if(domUtils.isEmptyBlock(node)){
            var firstChild = node.firstChild,tmpNode;

            while(firstChild && firstChild.nodeType == 1 && domUtils.isEmptyBlock(firstChild)){
                tmpNode = firstChild;
                firstChild = firstChild.firstChild;
            }
            !tmpNode && (tmpNode = node);
            domUtils.fillNode(me.document,tmpNode);
        }
    }
    //閸掑棝銆夌粭锔界壉瀵繑鍧婇崝锟�

    me.ready(function(){
        utils.cssRule('pagebreak','.pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}',me.document);
    });
    function isHr(node){
        return node && node.nodeType == 1 && node.tagName == 'HR' && node.className == 'pagebreak';
    }
    me.commands['pagebreak'] = {
        execCommand:function () {
            var range = me.selection.getRange(),hr = me.document.createElement('hr');
            domUtils.setAttributes(hr,{
                'class' : 'pagebreak',
                noshade:"noshade",
                size:"5"
            });
            domUtils.unSelectable(hr);
            //table閸楁洜瀚径鍕倞
            var node = domUtils.findParentByTagName(range.startContainer, notBreakTags, true),

                parents = [], pN;
            if (node) {
                switch (node.tagName) {
                    case 'TD':
                        pN = node.parentNode;
                        if (!pN.previousSibling) {
                            var table = domUtils.findParentByTagName(pN, 'table');
//                            var tableWrapDiv = table.parentNode;
//                            if(tableWrapDiv && tableWrapDiv.nodeType == 1
//                                && tableWrapDiv.tagName == 'DIV'
//                                && tableWrapDiv.getAttribute('dropdrag')
//                                ){
//                                domUtils.remove(tableWrapDiv,true);
//                            }
                            table.parentNode.insertBefore(hr, table);
                            parents = domUtils.findParents(hr, true);

                        } else {
                            pN.parentNode.insertBefore(hr, pN);
                            parents = domUtils.findParents(hr);

                        }
                        pN = parents[1];
                        if (hr !== pN) {
                            domUtils.breakParent(hr, pN);

                        }
                        domUtils.clearSelectedArr(me.currentSelectedArr);
                        //table鐟曚線鍣搁崘娆戠拨鐎规矮绔存稉瀣珛閹凤拷
                        me.fireEvent('afteradjusttable',me.document);
                }

            } else {

                if (!range.collapsed) {
                    range.deleteContents();
                    var start = range.startContainer;
                    while ( !domUtils.isBody(start) && domUtils.isBlockElm(start) && domUtils.isEmptyNode(start)) {
                        range.setStartBefore(start).collapse(true);
                        domUtils.remove(start);
                        start = range.startContainer;
                    }

                }
                range.insertNode(hr);

                var pN = hr.parentNode, nextNode;
                while (!domUtils.isBody(pN)) {
                    domUtils.breakParent(hr, pN);
                    nextNode = hr.nextSibling;
                    if (nextNode && domUtils.isEmptyBlock(nextNode)) {
                        domUtils.remove(nextNode);
                    }
                    pN = hr.parentNode;
                }
                nextNode = hr.nextSibling;
                var pre = hr.previousSibling;
                if(isHr(pre)){
                    domUtils.remove(pre);
                }else{
                    pre && fillNode(pre);
                }

                if(!nextNode){
                    var p = me.document.createElement('p');

                    hr.parentNode.appendChild(p);
                    domUtils.fillNode(me.document,p);
                    range.setStart(p,0).collapse(true);
                }else{
                    if(isHr(nextNode)){
                        domUtils.remove(nextNode);
                    }else{
                        fillNode(nextNode);
                    }
                    range.setEndAfter(hr).collapse(false);
                }

                range.select(true);

            }

        },
        queryCommandState:function () {
            return this.highlight ? -1 : 0;
        }
    };
};
///import core
///commands 閺堫剙婀撮崶鍓у瀵洖顕辨稉濠佺炊
///commandsName  WordImage
///commandsTitle  閺堫剙婀撮崶鍓у瀵洖顕辨稉濠佺炊


UE.plugins["wordimage"] = function(){
    var me = this,
        images;
    me.commands['wordimage'] = {
        execCommand : function() {
            images = domUtils.getElementsByTagName(me.document.body,"img");
            var urlList = [];
            for(var i=0,ci;ci=images[i++];){
                var url=ci.getAttribute("word_img");
                url && urlList.push(url);
            }
            if(images.length){
                this["word_img"] = urlList;
            }
        },
        queryCommandState: function(){
            images = domUtils.getElementsByTagName(me.document.body,"img");
            for(var i=0,ci;ci =images[i++];){
                if(ci.getAttribute("word_img")){
                    return 1;
                }
            }
            return -1;
        }
    };
};
///import core
///commands 閹俱倝鏀㈤崪宀勫櫢閸嬶拷
///commandsName  Undo,Redo
///commandsTitle  閹俱倝鏀�闁插秴浠�
/**
* @description 閸ョ偤锟�
* @author zhanyi
*/

UE.plugins['undo'] = function() {
    var me = this,
        maxUndoCount = me.options.maxUndoCount || 20,
        maxInputCount = me.options.maxInputCount || 20,
        fillchar = new RegExp(domUtils.fillChar + '|<\/hr>','gi'),// ie娴兼矮楠囬悽鐔奉檵娴ｆ瑧娈�/hr>
        //閸︺劍鐦潏鍐╂閿涘矂娓剁憰浣界箖濠娿倖甯�潻娆庣昂鐏炵偞锟�
        specialAttr = /\b(?:href|src|name)="[^"]*?"/gi;

    //閸︾儤娅欓惃鍓卆nge鐎圭偘绶�
    function sceneRange(rng){
        var me = this;
        me.collapsed = rng.collapsed;
        me.startAddr = getAddr(rng.startContainer,rng.startOffset);
        me.endAddr = rng.collapsed ? me.startAddr : getAddr(rng.endContainer,rng.endOffset)

    }
    sceneRange.prototype ={
        compare : function(obj){
            var me = this;
            if(me.collapsed !== obj.collapsed){
                return 0;
            }
            if(!compareAddr(me.startAddr,obj.startAddr) || !compareAddr(me.endAddr,obj.endAddr)){
                return 0;
            }
            return 1;
        },
        transformRange : function(rng){
            var me = this;
            rng.collapsed = me.collapsed;
            setAddr(rng,'start',me.startAddr);
            rng.collapsed ? rng.collapse(true) : setAddr(rng,'end',me.endAddr)

        }
    };
    function getAddr(node,index){
        for(var i= 0,parentsIndex = [index],ci,
                parents = domUtils.findParents(node,true,function(node){return !domUtils.isBody(node)},true);
            ci=parents[i++];){
            //娣囶喗顒滈崑蹇曅╂担宥囩枂
            if(i == 1 && ci.nodeType == 3){

                var tmpNode = ci;
                while(tmpNode = tmpNode.previousSibling){
                    if(tmpNode.nodeType == 3){
//                        console.log(index)
                        index += tmpNode.nodeValue.replace(fillCharReg,'').length;
                    }else{
                        break;
                    }
                }
                parentsIndex[0] = index;
            }

            parentsIndex.push(domUtils.getNodeIndex(ci,true));

        }

        return parentsIndex.reverse();

    }

    function compareAddr(indexA,indexB){
        if(indexA.length != indexB.length)
            return 0;
        for(var i= 0,l=indexA.length;i<l;i++){
            if(indexA[i]!=indexB[i])
                return 0
        }
        return 1;
    }
    function setAddr(range,boundary,addr){

        node = range.document.body;
        for(var i= 0,node,l = addr.length - 1;i<l;i++){
            node = node.childNodes[addr[i]];
        }
        range[boundary+'Container'] = node;
        range[boundary+'Offset'] =  addr[addr.length-1];
    }
    function UndoManager() {

        this.list = [];
        this.index = 0;
        this.hasUndo = false;
        this.hasRedo = false;
        this.undo = function() {

            if ( this.hasUndo ) {
                var currentScene = this.getScene(),
                    lastScene = this.list[this.index];
                if ( lastScene.content.replace(specialAttr,'') != currentScene.content.replace(specialAttr,'') ) {
                    this.save();
                }
                                    if(!this.list[this.index - 1] && this.list.length == 1){
                    this.reset();
                    return;
                }
                while ( this.list[this.index].content == this.list[this.index - 1].content ) {
                    this.index--;
                    if ( this.index == 0 ) {
                        return this.restore( 0 );
                    }
                }
                this.restore( --this.index );
            }
        };
        this.redo = function() {
            if ( this.hasRedo ) {
                while ( this.list[this.index].content == this.list[this.index + 1].content ) {
                    this.index++;
                    if ( this.index == this.list.length - 1 ) {
                        return this.restore( this.index );
                    }
                }
                this.restore( ++this.index );
            }
        };

        this.restore = function() {
            var scene = this.list[this.index];
            //trace:873
            //閸樼粯甯�仦鏇氱秴缁楋拷
            me.document.body.innerHTML = scene.bookcontent.replace(fillchar,'');
            //婢跺嫮鎮妘ndo閸氬海鈹栭弽闂寸瑝鐏炴洑缍呴惃鍕６妫帮拷
            if(browser.ie){
                for(var i=0,pi,ps = me.document.getElementsByTagName('p');pi = ps[i++];){
                    if(pi.innerHTML == ''){
                        domUtils.fillNode(me.document,pi);
                    }
                }
            }

            var range = new dom.Range( me.document );


            //閺堝褰查懗钘夊晙save閺冭埖鐥呴張濉╫okmark
            try{
                if(browser.opera || browser.safari){
                    scene.senceRange.transformRange(range)
                }else{
                    range.moveToBookmark( {
                        start : '_baidu_bookmark_start_',
                        end : '_baidu_bookmark_end_',
                        id : true
                        //閸樼粯甯�rue 閺勵垯璐熸禍锟絙>|</b>閿涘苯娲栭柅锟芥倵鏉╂鍏橀崷鈺為柌锟�
                    } );
                }

                //trace:1278 ie9block閸忓啰绀屾稉铏光敄閿涘苯鐨㈤崙铏瑰箛閸忓鐖ｇ�姘秴閻ㄥ嫰妫舵０姗堢礉韫囧懘銆忔繅顐㈠帠閸愬懎顔�
                if(browser.ie && browser.version == 9 && range.collapsed && domUtils.isBlockElm(range.startContainer) && domUtils.isEmptyNode(range.startContainer)){
                    domUtils.fillNode(range.document,range.startContainer);

                }
                range.select(!browser.gecko);
                if(!(browser.opera || browser.safari)){
                    setTimeout(function(){
                        range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
                    },200);
                }

            }catch(e){}

            this.update();
            //table閻ㄥ嫬宕熼悪顒�樀閻烇拷
            if(me.currentSelectedArr){
                me.currentSelectedArr = [];
                var tds = me.document.getElementsByTagName('td');
                for(var i=0,td;td=tds[i++];){
                    if(td.className == me.options.selectedTdClass){
                         me.currentSelectedArr.push(td);
                    }
                }
            }
            this.clearKey();
            //娑撳秷鍏橀幎濠呭殰瀹哥湕eset娴滐拷
            me.fireEvent('reset',true);
        };

        this.getScene = function() {
            var range = me.selection.getRange(),
                cont = me.body.innerHTML.replace(fillchar,'');
            //閺堝褰查懗鍊熺珶閻ｅ矁鎯ら崚棰佺啊<table>|<tbody>鏉╂瑦鐗遍惃鍕秴缂冾噯绱濋幍锟戒簰缂傗晙绔存稉瀣╃秴缂冿拷
            range.shrinkBoundary();
            browser.ie && (cont = cont.replace(/>&nbsp;</g,'><').replace(/\s*</g,'').replace(/>\s*/g,'>'));

            if(browser.opera || browser.safari){
                return {
                    senceRange : new sceneRange(range),
                    content : cont,
                    bookcontent : cont
                }
            }else{
                var bookmark = range.createBookmark( true, true ),
                    bookCont = me.body.innerHTML.replace(fillchar,'');
                bookmark && range.moveToBookmark( bookmark ).select( true );
                return {
                    bookcontent : bookCont,
                    content : cont
                };
            }

        };
        this.save = function(notCompareRange) {

            var currentScene = this.getScene(),
                lastScene = this.list[this.index];
            //閸愬懎顔愰惄绋挎倱娴ｅ秶鐤嗛惄绋挎倱娑撳秴鐡�
            if ( lastScene && lastScene.content == currentScene.content &&
                (
                    notCompareRange ? 1 :
                    ( (browser.opera || browser.safari) ? lastScene.senceRange.compare(currentScene.senceRange) : lastScene.bookcontent == currentScene.bookcontent)
                )
            ) {
                return;
            }

            this.list = this.list.slice( 0, this.index + 1 );
            this.list.push( currentScene );
            //婵″倹鐏夋径褌绨張锟姐亣閺佷即鍣烘禍鍡礉鐏忚鲸濡搁張锟藉閻ㄥ嫬澧ч梽锟�
            if ( this.list.length > maxUndoCount ) {
                this.list.shift();
            }
            this.index = this.list.length - 1;
            this.clearKey();
            //鐠虹喐鏌妘ndo/redo閻樿埖锟�
            this.update();
        };
        this.update = function() {
            this.hasRedo = this.list[this.index + 1] ? true : false;
            this.hasUndo = this.list[this.index - 1] || this.list.length == 1 ? true : false;
        };
        this.reset = function() {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
            this.clearKey();
        };
        this.clearKey = function(){
            keycont = 0;
            lastKeyCode = null;
            me.fireEvent('contentchange');
        };
    }

    me.undoManger = new UndoManager();
    function saveScene() {
        this.undoManger.save();
    }

    me.addListener( 'beforeexeccommand', saveScene );
    me.addListener( 'afterexeccommand', saveScene );

    me.addListener('reset',function(type,exclude){
        if(!exclude){
            me.undoManger.reset();
        }
    });
    me.commands['redo'] = me.commands['undo'] = {
        execCommand : function( cmdName ) {
            me.undoManger[cmdName]();
        },
        queryCommandState : function( cmdName ) {
            return me.undoManger['has' + (cmdName.toLowerCase() == 'undo' ? 'Undo' : 'Redo')] ? 0 : -1;
        },
        notNeedUndo : 1
    };

    var keys = {
         //  /*Backspace*/ 8:1, /*Delete*/ 46:1,
            /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
            37:1, 38:1, 39:1, 40:1,
            13:1 /*enter*/
        },
        keycont = 0,
        lastKeyCode;

    me.addListener( 'keydown', function( type, evt ) {
        var keyCode = evt.keyCode || evt.which;
        if ( !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey ) {
            if ( me.undoManger.list.length == 0 || ((keyCode == 8 ||keyCode == 46) && lastKeyCode != keyCode) ) {
                me.undoManger.save(true);
                lastKeyCode = keyCode;
                return;
            }
            //trace:856
            //娣囶喗顒滅粭顑跨濞喡ょ翻閸忋儱鎮楅敍灞芥礀闁拷绱濋崘宥堢翻閸忋儴顪呴崚鐧篹ycont>maxInputCount閹靛秷鍏橀崷銊ユ礀闁拷娈戦梻顕�暯
            if(me.undoManger.list.length == 2 && me.undoManger.index == 0 && keycont == 0){
                me.undoManger.list.splice(1,1);
                me.undoManger.update();
            }
            lastKeyCode = keyCode;
            keycont++;
            if ( keycont >= maxInputCount ) {
                if(me.selection.getRange().collapsed)
                    me.undoManger.save();
            }
        }
    } );
};

///import core
///import plugins/inserthtml.js
///import plugins/undo.js
///import plugins/serialize.js
///commands 缁鍒�
///commandsName  PastePlain
///commandsTitle  缁绢垱鏋冮張顒傜煒鐠愬瓨膩瀵拷
/*
 ** @description 缁鍒�
 * @author zhanyi
 */
(function() {
    function getClipboardData( callback ) {

        var doc = this.document;

        if ( doc.getElementById( 'baidu_pastebin' ) ) {
            return;
        }

        var range = this.selection.getRange(),
            bk = range.createBookmark(),
            //閸掓稑缂撻崜顏囧垱閻ㄥ嫬顔愰崳鈺爄v
            pastebin = doc.createElement( 'div' );

        pastebin.id = 'baidu_pastebin';


        // Safari 鐟曚焦鐪癲iv韫囧懘銆忛張澶婂敶鐎圭櫢绱濋幍宥堝厴缁鍒涢崘鍛啇鏉╂稒娼�
        browser.webkit && pastebin.appendChild( doc.createTextNode( domUtils.fillChar + domUtils.fillChar ) );
        doc.body.appendChild( pastebin );
        //trace:717 闂呮劘妫岄惃鍓唒an娑撳秷鍏樺妤�煂top
        //bk.start.innerHTML = '&nbsp;';
        bk.start.style.display = '';
        pastebin.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" +
            //鐟曚礁婀悳鏉挎躬閸忓鐖ｉ獮瀹狀攽閻ㄥ嫪缍呯純顔煎閸忋儻绱濋崥锕�灟娴兼艾鍤悳鎷岀儲閸斻劎娈戦梻顕�暯
            domUtils.getXY( bk.start ).y + 'px';

        range.selectNodeContents( pastebin ).select( true );

        setTimeout( function() {
            
            if (browser.webkit) {
                
                for(var i=0,pastebins = doc.querySelectorAll('#baidu_pastebin'),pi;pi=pastebins[i++];){
                    if(domUtils.isEmptyNode(pi)){
                        domUtils.remove(pi);
                    }else{
                        pastebin = pi;
                        break;
                    }
                }


            }

			try{
                pastebin.parentNode.removeChild(pastebin);
            }catch(e){}

            range.moveToBookmark( bk ).select(true);
            callback( pastebin );
        }, 0 );


    }

    UE.plugins['paste'] = function() {
        var me = this;
        var word_img_flag = {flag:""};

        var pasteplain = me.options.pasteplain === true;
        var modify_num = {flag:""};
        me.commands['pasteplain'] = {
            queryCommandState: function (){
                return pasteplain;
            },
            execCommand: function (){
                pasteplain = !pasteplain|0;
            },
            notNeedUndo : 1
        };

        function filter(div){
            
            var html;
            if ( div.firstChild ) {
                    //閸樼粯甯�ut娑擃厽鍧婇崝鐘垫畱鏉堝湱鏅崐锟�
                    var nodes = domUtils.getElementsByTagName(div,'span');
                    for(var i=0,ni;ni=nodes[i++];){
                        if(ni.id == '_baidu_cut_start' || ni.id == '_baidu_cut_end'){
                            domUtils.remove(ni);
                        }
                    }

                    if(browser.webkit){

                        var brs = div.querySelectorAll('div br');
                        for(var i=0,bi;bi=brs[i++];){
                            var pN = bi.parentNode;
                            if(pN.tagName == 'DIV' && pN.childNodes.length ==1){
                                pN.innerHTML = '<p><br/></p>';
                                
                                domUtils.remove(pN);
                            }
                        }
                        var divs = div.querySelectorAll('#baidu_pastebin');
                        for(var i=0,di;di=divs[i++];){
                            var tmpP = me.document.createElement('p');
                            di.parentNode.insertBefore(tmpP,di);
                            while(di.firstChild){
                                tmpP.appendChild(di.firstChild);
                            }
                            domUtils.remove(di);
                        }



                        var metas = div.querySelectorAll('meta');
                        for(var i=0,ci;ci=metas[i++];){
                            domUtils.remove(ci);
                        }

                        var brs = div.querySelectorAll('br');
                        for(i=0;ci=brs[i++];){
                            if(/^apple-/.test(ci)){
                                domUtils.remove(ci);
                            }
                        }

                    }
                    if(browser.gecko){
                        var dirtyNodes = div.querySelectorAll('[_moz_dirty]');
                        for(i=0;ci=dirtyNodes[i++];){
                            ci.removeAttribute( '_moz_dirty' );
                        }
                    }
                    if(!browser.ie ){
                        var spans = div.querySelectorAll('span.Apple-style-span');
                        for(var i=0,ci;ci=spans[i++];){
                            domUtils.remove(ci,true);
                        }
                    }


                    html = div.innerHTML;

                    var f = me.serialize;
                    if(f){
                        //婵″倹鐏夋潻鍥ㄦ姢閸戣櫣骞囬梻顕�暯閿涘本宕熼懢宄扮暊閿涘瞼娲块幒銉﹀絻閸忋儱鍞寸�鐧哥礉闁灝鍘ら崙铏瑰箛闁挎瑨顕ょ�鑹板毀缁鍒涢弫缈犻嚋婢惰精瑙�
                        try{
                            var node =  f.transformInput(
                                        f.parseHTML(
                                            //todo: 閺嗗倹妞傛稉宥堣泲dtd閻ㄥ嫯绻冨锟�
                                            f.word(html)//, true
                                        ),word_img_flag
                                    );
                            //trace:924
                            //缁绢垱鏋冮張顒伳佸蹇庣瘍鐟曚椒绻氶悾娆愵唽閽�拷
                            node = f.filter(node,pasteplain ? {
                                whiteList: {
                                    'p': {'br':1,'BR':1,$:{}},
                                    'br':{'$':{}},
                                    'div':{'br':1,'BR':1,'$':{}},
                                    'li':{'$':{}},
                                    'tr':{'td':1,'$':{}},
                                    'td':{'$':{}}

                                },
                                blackList: {
                                    'style':1,
                                    'script':1,
                                    'object':1
                                }
                            } : null, !pasteplain ? modify_num : null);

                            if(browser.webkit){
                                var length = node.children.length,
                                    child;
                                while((child = node.children[length-1]) && child.tag == 'br'){
                                    node.children.splice(length-1,1);
                                    length = node.children.length;
                                }
                            }
                            html = f.toHTML(node,pasteplain);

                        }catch(e){}

                    }


                    //閼奉亜鐣炬稊澶屾畱婢跺嫮鎮�
                   html = {'html':html};

                   me.fireEvent('beforepaste',html);
                    //娑撳秶鏁ら崷銊ㄨ泲鏉╁洦鎶ゆ禍锟�
                   me.execCommand( 'insertHtml',html.html,true);

	               me.fireEvent("afterpaste");

                }
        }

        me.addListener('ready',function(){
            domUtils.on(me.body,'cut',function(){

                var range = me.selection.getRange();
                if(!range.collapsed && me.undoManger){
                    me.undoManger.save();
                }
       
            });
            //ie娑撳獙eforepaste閸︺劎鍋ｉ崙璇插礁闁款喗妞傛稊鐔剁窗鐟欙箑褰傞敍灞惧娴犮儳鏁ら惄鎴炲付闁款喚娲忛幍宥咁樀閻烇拷
                domUtils.on(me.body, browser.ie || browser.opera ? 'keydown' : 'paste',function(e){

                    if((browser.ie || browser.opera) && (!e.ctrlKey || e.keyCode != '86')){
                        return;
                    }

                    getClipboardData.call( me, function( div ) {
                        filter(div);
                    } );


                });

        });

    };

})();


///import core
///commands 閺堝绨崚妤勩�,閺冪姴绨崚妤勩�
///commandsName  InsertOrderedList,InsertUnorderedList
///commandsTitle  閺堝绨崚妤勩�,閺冪姴绨崚妤勩�
/**
 * 閺堝绨崚妤勩�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertorderlist閹绘帒鍙嗛張澶婄碍閸掓銆�
 * @param   {String}   style               閸婇棿璐熼敍姝瀍cimal,lower-alpha,lower-roman,upper-alpha,upper-roman
 * @author zhanyi
 */
/**
 * 閺冪姴绨柧鐐复
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertunorderlist閹绘帒鍙嗛弮鐘茬碍閸掓銆�
 * * @param   {String}   style            閸婇棿璐熼敍姝漣rcle,disc,square
 * @author zhanyi
 */

UE.plugins['list'] = function () {
    var me = this,
            notExchange = {
                'TD':1,
                'PRE':1,
                'BLOCKQUOTE':1
            };
    me.setOpt( {
        'insertorderedlist':{
            'decimal':'', //'1,2,3...'
            'lower-alpha':'', // 'a,b,c...'
            'lower-roman':'', //'i,ii,iii...'
            'upper-alpha':'', //'A,B,C'
            'upper-roman':''     //'I,II,III...'
        },
        'insertunorderedlist':{
            'circle':'',
            'disc':'',
            'square':''
        }
    } );

    me.ready(function(){
        utils.cssRule('list','li{clear:both}',me.document);
    });



    function adjustList( list, tag, style ) {
        var nextList = list.nextSibling;
        if ( nextList && nextList.nodeType == 1 && nextList.tagName.toLowerCase() == tag && (domUtils.getStyle( nextList, 'list-style-type' ) || (tag == 'ol' ? 'decimal' : 'disc')) == style ) {
            domUtils.moveChild( nextList, list );
            if ( nextList.childNodes.length == 0 ) {
                domUtils.remove( nextList );
            }
        }
        var preList = list.previousSibling;
        if ( preList && preList.nodeType == 1 && preList.tagName.toLowerCase() == tag && (domUtils.getStyle( preList, 'list-style-type' ) || (tag == 'ol' ? 'decimal' : 'disc')) == style ) {
            domUtils.moveChild( list, preList );
        }


        if ( list.childNodes.length == 0 ) {
            domUtils.remove( list );
        }
    }

    function clearEmptySibling(node){
        var tmpNode = node.previousSibling;
        if ( tmpNode && domUtils.isEmptyBlock(tmpNode)) {
            domUtils.remove( tmpNode );
        }
        tmpNode = node.nextSibling;
        if ( tmpNode && domUtils.isEmptyBlock(tmpNode)) {
            domUtils.remove( tmpNode );
        }
    }
    me.addListener( 'keydown', function ( type, evt ) {
        function preventAndSave() {
            evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
            me.undoManger && me.undoManger.save();
        }

        var keyCode = evt.keyCode || evt.which;
        if ( keyCode == 13 ) {//閸ョ偠婧�
            var range = me.selection.getRange(),
                    start = domUtils.findParentByTagName( range.startContainer, ['ol', 'ul'], true, function ( node ) {
                        return node.tagName == 'TABLE';
                    } ),
                    end = domUtils.findParentByTagName( range.endContainer, ['ol', 'ul'], true, function ( node ) {
                        return node.tagName == 'TABLE';
                    } );
            if ( start && end && start === end ) {

                if ( !range.collapsed ) {
                    start = domUtils.findParentByTagName( range.startContainer, 'li', true );
                    end = domUtils.findParentByTagName( range.endContainer, 'li', true );
                    if ( start && end && start === end ) {
                        range.deleteContents();
                        li = domUtils.findParentByTagName( range.startContainer, 'li', true );
                        if ( li && domUtils.isEmptyBlock( li ) ) {

                            pre = li.previousSibling;
                            next = li.nextSibling;
                            p = me.document.createElement( 'p' );

                            domUtils.fillNode( me.document, p );
                            parentList = li.parentNode;
                            if ( pre && next ) {
                                range.setStart( next, 0 ).collapse( true ).select( true );
                                domUtils.remove( li );

                            } else {
                                if ( !pre && !next || !pre ) {

                                    parentList.parentNode.insertBefore( p, parentList );


                                } else {
                                    li.parentNode.parentNode.insertBefore( p, parentList.nextSibling );
                                }
                                domUtils.remove( li );
                                if ( !parentList.firstChild ) {
                                    domUtils.remove( parentList );
                                }
                                range.setStart( p, 0 ).setCursor();


                            }
                            preventAndSave();
                            return;

                        }
                    } else {
                        var tmpRange = range.cloneRange(),
                                bk = tmpRange.collapse( false ).createBookmark();

                        range.deleteContents();
                        tmpRange.moveToBookmark( bk );
                        var li = domUtils.findParentByTagName( tmpRange.startContainer, 'li', true );

                        clearEmptySibling(li);
                        tmpRange.select();
                        preventAndSave();
                        return;
                    }
                }


                li = domUtils.findParentByTagName( range.startContainer, 'li', true );

                if ( li ) {
                    if ( domUtils.isEmptyBlock( li ) ) {
                        bk = range.createBookmark();
                        var parentList = li.parentNode;
                        if ( li !== parentList.lastChild ) {
                            domUtils.breakParent( li, parentList );
                            clearEmptySibling(li);
                        } else {

                            parentList.parentNode.insertBefore( li, parentList.nextSibling );
                            if ( domUtils.isEmptyNode( parentList ) ) {
                                domUtils.remove( parentList );
                            }
                        }
                        //瀹撳苯顨虫稉宥咁樀閻烇拷
                        if ( !dtd.$list[li.parentNode.tagName] ) {

                            if ( !domUtils.isBlockElm( li.firstChild ) ) {
                                p = me.document.createElement( 'p' );
                                li.parentNode.insertBefore( p, li );
                                while ( li.firstChild ) {
                                    p.appendChild( li.firstChild );
                                }
                                domUtils.remove( li );
                            } else {
                                domUtils.remove( li, true );
                            }
                        }
                        range.moveToBookmark( bk ).select();


                    } else {
                        var first = li.firstChild;
                        if ( !first || !domUtils.isBlockElm( first ) ) {
                            var p = me.document.createElement( 'p' );

                            !li.firstChild && domUtils.fillNode( me.document, p );
                            while ( li.firstChild ) {

                                p.appendChild( li.firstChild );
                            }
                            li.appendChild( p );
                            first = p;
                        }

                        var span = me.document.createElement( 'span' );

                        range.insertNode( span );
                        domUtils.breakParent( span, li );

                        var nextLi = span.nextSibling;
                        first = nextLi.firstChild;

                        if ( !first ) {
                            p = me.document.createElement( 'p' );

                            domUtils.fillNode( me.document, p );
                            nextLi.appendChild( p );
                            first = p;
                        }
                        if ( domUtils.isEmptyNode( first ) ) {
                            first.innerHTML = '';
                            domUtils.fillNode( me.document, first );
                        }

                        range.setStart( first, 0 ).collapse( true ).shrinkBoundary().select();
                        domUtils.remove( span );
                        pre = nextLi.previousSibling;
                        if ( pre && domUtils.isEmptyBlock( pre ) ) {
                            pre.innerHTML = '<p></p>';
                            domUtils.fillNode( me.document, pre.firstChild );
                        }

                    }
//                        }

                    preventAndSave();
                }


            }
        }
        if ( keyCode == 8 ) {
            //娣囶喕鑵慽e娑撶挻i娑撳娈戦梻顕�暯
            range = me.selection.getRange();
            if ( range.collapsed && domUtils.isStartInblock( range ) ) {
                tmpRange = range.cloneRange().trimBoundary();
                li = domUtils.findParentByTagName( range.startContainer, 'li', true );

                //鐟曚礁婀猯i閻ㄥ嫭娓跺锕佺珶閿涘本澧犻懗钘夘樀閻烇拷
                if ( li && domUtils.isStartInblock( tmpRange ) ) {

                    if ( li && (pre = li.previousSibling) ) {
                        if ( keyCode == 46 && li.childNodes.length ){
                            return;
                        }
                        //閺堝褰查懗鎴掔瑐鏉堝湱娈戦崗鍕吹閼哄倻鍋ｉ弰顖欓嚋2缁狙嗗綅閸楁洩绱濈憰浣芥嫹閸旂姴鍩�缁狙嗗綅閸楁洜娈戦張锟芥倵閻ㄥ埐i
                        if ( dtd.$list[pre.tagName] ) {
                            pre = pre.lastChild;
                        }
                        me.undoManger && me.undoManger.save();
                        first = li.firstChild;
                        if ( domUtils.isBlockElm( first ) ) {
                            if ( domUtils.isEmptyNode( first ) ) {
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                                pre.appendChild( first );
                                range.setStart( first, 0 ).setCursor( false, true );
                                //first娑撳秵妲搁崬顖欑閻ㄥ嫯濡悙锟�
                                while ( li.firstChild ) {
                                    pre.appendChild( li.firstChild );
                                }
                            } else {
                                start = domUtils.findParentByTagName( range.startContainer, 'p', true );
                                if ( start && start !== first ) {
                                    return;
                                }
                                span = me.document.createElement( 'span' );
                                range.insertNode( span );
                                //閸掋倖鏌噋re閺勵垰鎯侀弰顖溾敄閻ㄥ嫯濡悙锟芥俊鍌涚亯閺勶拷p><br/></p>缁鐎烽惃鍕敄閼哄倻鍋ｉ敍灞藉叡閹哄「閺嶅洨顒烽梼鍙夘剾鐎瑰啫宕版担锟�
                                if(domUtils.isEmptyBlock(pre)){
                                    pre.innerHTML = '';
                                }
                                domUtils.moveChild( li, pre );
                                range.setStartBefore( span ).collapse( true ).select( true );

                                domUtils.remove( span );

                            }
                        } else {
                            if ( domUtils.isEmptyNode( li ) ) {
                                var p = me.document.createElement( 'p' );
                                pre.appendChild( p );
                                range.setStart( p, 0 ).setCursor();
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                            } else {
                                range.setEnd( pre, pre.childNodes.length ).collapse().select( true );
                                while ( li.firstChild ) {
                                    pre.appendChild( li.firstChild );
                                }


                            }
                        }

                        domUtils.remove( li );

                        me.undoManger && me.undoManger.save();
                        domUtils.preventDefault( evt );
                        return;

                    }
                    //trace:980

                    if ( li && !li.previousSibling ) {
                        first = li.firstChild;
                        //trace:1648 鐟曚礁鍨介弬鐠磇娑撳褰ч張澶夌娑擃亣濡悙锟�
                        if ( !first || li.lastChild === first && domUtils.isEmptyNode( domUtils.isBlockElm( first ) ? first : li ) ) {
                            var p = me.document.createElement( 'p' );

                            li.parentNode.parentNode.insertBefore( p, li.parentNode );
                            domUtils.fillNode( me.document, p );
                            range.setStart( p, 0 ).setCursor();
                            domUtils.remove( !li.nextSibling ? li.parentNode : li );
                            me.undoManger && me.undoManger.save();
                            domUtils.preventDefault( evt );
                            return;
                        }


                    }


                }


            }

        }
    } );
    me.commands['insertorderedlist'] =
            me.commands['insertunorderedlist'] = {
                execCommand:function ( command, style ) {
                    if ( !style ) {
                        style = command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc';
                    }
                    var me = this,
                            range = this.selection.getRange(),
                            filterFn = function ( node ) {
                                return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace( node );
                            },
                            tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul',
                            frag = me.document.createDocumentFragment();
                    //閸樼粯甯�弰顖氭礈娑撹桨绱伴崙铏瑰箛闁鍩岄張顐㈢啲閿涘苯顕遍懛纰糳justmentBoundary缂傗晛鍩宱l/ul閻ㄥ嫪缍呯純锟�
                    //range.shrinkBoundary();//.adjustmentBoundary();
                    range.adjustmentBoundary().shrinkBoundary();
                    var bko = range.createBookmark( true ),
                            start = domUtils.findParentByTagName( me.document.getElementById( bko.start ), 'li' ),
                            modifyStart = 0,
                            end = domUtils.findParentByTagName( me.document.getElementById( bko.end ), 'li' ),
                            modifyEnd = 0,
                            startParent, endParent,
                            list, tmp;

                    if ( start || end ) {
                        start && (startParent = start.parentNode);
                        if ( !bko.end ) {
                            end = start;
                        }
                        end && (endParent = end.parentNode);

                        if ( startParent === endParent ) {
                            while ( start !== end ) {
                                tmp = start;
                                start = start.nextSibling;
                                if ( !domUtils.isBlockElm( tmp.firstChild ) ) {
                                    var p = me.document.createElement( 'p' );
                                    while ( tmp.firstChild ) {
                                        p.appendChild( tmp.firstChild );
                                    }
                                    tmp.appendChild( p );
                                }
                                frag.appendChild( tmp );
                            }
                            tmp = me.document.createElement( 'span' );
                            startParent.insertBefore( tmp, end );
                            if ( !domUtils.isBlockElm( end.firstChild ) ) {
                                p = me.document.createElement( 'p' );
                                while ( end.firstChild ) {
                                    p.appendChild( end.firstChild );
                                }
                                end.appendChild( p );
                            }
                            frag.appendChild( end );
                            domUtils.breakParent( tmp, startParent );
                            if ( domUtils.isEmptyNode( tmp.previousSibling ) ) {
                                domUtils.remove( tmp.previousSibling );
                            }
                            if ( domUtils.isEmptyNode( tmp.nextSibling ) ) {
                                domUtils.remove( tmp.nextSibling )
                            }
                            var nodeStyle = domUtils.getComputedStyle( startParent, 'list-style-type' ) || (command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc');
                            if ( startParent.tagName.toLowerCase() == tag && nodeStyle == style ) {
                                for ( var i = 0, ci, tmpFrag = me.document.createDocumentFragment(); ci = frag.childNodes[i++]; ) {
                                    while ( ci.firstChild ) {
                                        tmpFrag.appendChild( ci.firstChild );
                                    }

                                }
                                tmp.parentNode.insertBefore( tmpFrag, tmp );
                            } else {
                                list = me.document.createElement( tag );
                                domUtils.setStyle( list, 'list-style-type', style );
                                list.appendChild( frag );
                                tmp.parentNode.insertBefore( list, tmp );
                            }

                            domUtils.remove( tmp );
                            list && adjustList( list, tag, style );
                            range.moveToBookmark( bko ).select();
                            return;
                        }
                        //瀵拷顬�
                        if ( start ) {
                            while ( start ) {
                                tmp = start.nextSibling;
                                if(domUtils.isTagNode(start,'ol ul')){
                                    frag.appendChild(start);
                                }else{
                                    var tmpfrag = me.document.createDocumentFragment(),
                                        hasBlock = 0;
                                    while ( start.firstChild ) {
                                        if ( domUtils.isBlockElm( start.firstChild ) ){
                                            hasBlock = 1;
                                        }
                                        tmpfrag.appendChild( start.firstChild );
                                    }
                                    if ( !hasBlock ) {
                                        var tmpP = me.document.createElement( 'p' );
                                        tmpP.appendChild( tmpfrag );
                                        frag.appendChild( tmpP );
                                    } else {
                                        frag.appendChild( tmpfrag );
                                    }
                                    domUtils.remove( start );
                                }

                                start = tmp;
                            }
                            startParent.parentNode.insertBefore( frag, startParent.nextSibling );
                            if ( domUtils.isEmptyNode( startParent ) ) {
                                range.setStartBefore( startParent );
                                domUtils.remove( startParent );
                            } else {
                                range.setStartAfter( startParent );
                            }


                            modifyStart = 1;
                        }

                        if ( end && domUtils.inDoc(endParent,me.document)) {
                            //缂佹挻娼�
                            start = endParent.firstChild;
                            while ( start && start !== end ) {
                                tmp = start.nextSibling;
                                if(domUtils.isTagNode(start,'ol ul')){
                                    frag.appendChild(start);
                                }else{
                                    tmpfrag = me.document.createDocumentFragment();
                                    hasBlock = 0;
                                    while ( start.firstChild ) {
                                        if ( domUtils.isBlockElm( start.firstChild ) ){
                                            hasBlock = 1;
                                        }
                                        tmpfrag.appendChild( start.firstChild );
                                    }
                                    if ( !hasBlock ) {
                                        tmpP = me.document.createElement( 'p' );
                                        tmpP.appendChild( tmpfrag );
                                        frag.appendChild( tmpP );
                                    } else {
                                        frag.appendChild( tmpfrag );
                                    }
                                    domUtils.remove( start );
                                }
                                start = tmp;
                            }
                            var tmpDiv = domUtils.createElement(me.document,'div',{
                              'tmpDiv': 1
                            });
                            domUtils.moveChild(end,tmpDiv);

                            frag.appendChild( tmpDiv );
                            domUtils.remove( end );
                            endParent.parentNode.insertBefore( frag, endParent );
                            range.setEndBefore( endParent );
                            if ( domUtils.isEmptyNode( endParent ) ) {
                                domUtils.remove( endParent );
                            }

                            modifyEnd = 1;
                        }


                    }

                    if ( !modifyStart ) {
                        range.setStartBefore( me.document.getElementById( bko.start ) );
                    }
                    if ( bko.end && !modifyEnd ) {
                        range.setEndAfter( me.document.getElementById( bko.end ) );
                    }
                    range.enlarge( true, function ( node ) {
                        return notExchange[node.tagName];
                    } );

                    frag = me.document.createDocumentFragment();

                    var bk = range.createBookmark(),
                            current = domUtils.getNextDomNode( bk.start, false, filterFn ),
                            tmpRange = range.cloneRange(),
                            tmpNode,
                            block = domUtils.isBlockElm;

                    while ( current && current !== bk.end && (domUtils.getPosition( current, bk.end ) & domUtils.POSITION_PRECEDING) ) {

                        if ( current.nodeType == 3 || dtd.li[current.tagName] ) {
                            if ( current.nodeType == 1 && dtd.$list[current.tagName] ) {
                                while ( current.firstChild ) {
                                    frag.appendChild( current.firstChild );
                                }
                                tmpNode = domUtils.getNextDomNode( current, false, filterFn );
                                domUtils.remove( current );
                                current = tmpNode;
                                continue;

                            }
                            tmpNode = current;
                            tmpRange.setStartBefore( current );

                            while ( current && current !== bk.end && (!block( current ) || domUtils.isBookmarkNode( current ) ) ) {
                                tmpNode = current;
                                current = domUtils.getNextDomNode( current, false, null, function ( node ) {
                                    return !notExchange[node.tagName];
                                } );
                            }

                            if ( current && block( current ) ) {
                                tmp = domUtils.getNextDomNode( tmpNode, false, filterFn );
                                if ( tmp && domUtils.isBookmarkNode( tmp ) ) {
                                    current = domUtils.getNextDomNode( tmp, false, filterFn );
                                    tmpNode = tmp;
                                }
                            }
                            tmpRange.setEndAfter( tmpNode );

                            current = domUtils.getNextDomNode( tmpNode, false, filterFn );

                            var li = range.document.createElement( 'li' );

                            li.appendChild( tmpRange.extractContents() );
                            frag.appendChild( li );


                        } else {

                            current = domUtils.getNextDomNode( current, true, filterFn );
                        }
                    }
                    range.moveToBookmark( bk ).collapse( true );
                    list = me.document.createElement( tag );
                    domUtils.setStyle( list, 'list-style-type', style );
                    list.appendChild( frag );
                    range.insertNode( list );
                    //瑜版挸澧爈ist娑撳﹣绗呴惇瀣厴閸氾箑鎮庨獮锟�
                    adjustList( list, tag, style );
                    //閸樼粯甯�崘妞剧稇閻ㄥ墖mpDiv
                    for(var i= 0,ci,tmpDivs = domUtils.getElementsByTagName(list,'div');ci=tmpDivs[i++];){
                        if(ci.getAttribute('tmpDiv')){
                            domUtils.remove(ci,true)
                        }
                    }
                    range.moveToBookmark( bko ).select();

                },
                queryCommandState:function ( command ) {
                    return this.highlight ? -1 :
                            domUtils.filterNodeList( this.selection.getStartElementPath(), command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul' ) ? 1 : 0;
                },
                queryCommandValue:function ( command ) {
                    var node = domUtils.filterNodeList( this.selection.getStartElementPath(), command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul' );
                    return node ? domUtils.getComputedStyle( node, 'list-style-type' ) : null;
                }
            };
};


///import core
///import plugins/serialize.js
///import plugins/undo.js
///commands 閺屻儳婀呭┃鎰垳
///commandsName  Source
///commandsTitle  閺屻儳婀呭┃鎰垳
(function (){
    function SourceFormater(config){
        config = config || {};
        this.indentChar = config.indentChar || '    ';
        this.breakChar = config.breakChar || '\n';
        this.selfClosingEnd = config.selfClosingEnd || ' />';
    }
    var unhtml1 = function (){
        var map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        function rep( m ){ return map[m]; }
        return function ( str ) {
            str = str + '';
            return str ? str.replace( /[<>"']/g, rep ) : '';
        };
    }();
    var inline = utils.extend({a:1,A:1},dtd.$inline,true);


    function printAttrs(attrs){
        var buff = [];
        for (var k in attrs) {
            buff.push(k + '="' + unhtml1(attrs[k]) + '"');
        }
        return buff.join(' ');
    }
    SourceFormater.prototype = {
        format: function (html){
            var node = UE.serialize.parseHTML(html);
            this.buff = [];
            this.indents = '';
            this.indenting = 1;
            this.visitNode(node);
            return this.buff.join('');
        },
        visitNode: function (node){
            if (node.type == 'fragment') {
                this.visitChildren(node.children);
            } else if (node.type == 'element') {
                var selfClosing = dtd.$empty[node.tag];
                this.visitTag(node.tag, node.attributes, selfClosing);

                this.visitChildren(node.children);

                if (!selfClosing) {
                    this.visitEndTag(node.tag);
                }
            } else if (node.type == 'comment') {
                this.visitComment(node.data);
            } else {
                this.visitText(node.data,dtd.$notTransContent[node.parent.tag]);
            }
        },
        visitChildren: function (children){
            for (var i=0; i<children.length; i++) {
                this.visitNode(children[i]);
            }
        },
        visitTag: function (tag, attrs, selfClosing){
            if (this.indenting) {
                this.indent();
            } else if (!inline[tag]) { // todo: 閸樼粯甯�, 閸ョ姳璐焏td閻ㄥ埇nline闁插矂娼板▽鈩冩箒a
                this.newline();
                this.indent();
            }
            this.buff.push('<', tag);
            var attrPart = printAttrs(attrs);
            if (attrPart) {
                this.buff.push(' ', attrPart);
            }
            if (selfClosing) {
                this.buff.push(this.selfClosingEnd);
                if (tag == 'br') {
                    this.newline();
                }
            } else {
                this.buff.push('>');
                this.indents += this.indentChar;
            }
            if (!inline[tag]) {
                this.newline();
            }
        },
        indent: function (){
            this.buff.push(this.indents);
            this.indenting = 0;
        },
        newline: function (){
            this.buff.push(this.breakChar);
            this.indenting = 1;
        },
        visitEndTag: function (tag){
            
            this.indents = this.indents.slice(0, -this.indentChar.length);
            if (this.indenting) {
                this.indent();
            } else if (!inline[tag]) {
                this.newline();
                this.indent();
            }
            this.buff.push('</', tag, '>');
        },
        visitText: function (text,notTrans){
            if (this.indenting) {
                this.indent();
            }
      
//            if(!notTrans){
//                 text = text.replace(/&nbsp;/g, ' ').replace(/[ ][ ]+/g, function (m){
//                    return new Array(m.length + 1).join('&nbsp;');
//                }).replace(/(?:^ )|(?: $)/g, '&nbsp;');
//            }
            text = text.replace(/&nbsp;/g, ' ');
            this.buff.push(text);

        },
        visitComment: function (text){
            if (this.indenting) {
                this.indent();
            }
            this.buff.push('<!--', text, '-->');
        }
    };

    var sourceEditors = {
        textarea: function (editor, holder){
            var textarea = holder.ownerDocument.createElement('textarea');
            textarea.style.cssText = 'position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;';
            // todo: IE娑撳褰ч張濉穘resize鐏炵偞锟介崣顖滄暏... 瀵板牏绫傜紒锟�
            if (browser.ie && browser.version < 8) {
                textarea.style.width = holder.offsetWidth + 'px';
                textarea.style.height = holder.offsetHeight + 'px';
                holder.onresize = function (){
                    textarea.style.width = holder.offsetWidth + 'px';
                    textarea.style.height = holder.offsetHeight + 'px';
                };
            }
            holder.appendChild(textarea);
            return {
                setContent: function (content){
                    textarea.value = content;
                },
                getContent: function (){
                    return textarea.value;
                },
                select: function (){
                    var range;
                    if (browser.ie) {
                        range = textarea.createTextRange();
                        range.collapse(true);
                        range.select();
                    } else {
                        //todo: chrome娑撳妫ゅ▔鏇☆啎缂冾喚鍔嶉悙锟�
                        textarea.setSelectionRange(0, 0);
                        textarea.focus();
                    }
                },
                dispose: function (){
                    holder.removeChild(textarea);
                    // todo
                    holder.onresize = null;
                    textarea = null;
                    holder = null;
                }
            };
        },
        codemirror: function (editor, holder){

            var codeEditor = window.CodeMirror(holder, {
                mode: "text/html",
                tabMode: "indent",
                lineNumbers: true,
                lineWrapping:true
            });
            var dom = codeEditor.getWrapperElement();
            dom.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';
            codeEditor.getScrollerElement().style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;';
            codeEditor.refresh();
            return {
                getCodeMirror:function(){
                    return codeEditor;
                },
                setContent: function (content){
                    codeEditor.setValue(content);
                },
                getContent: function (){
                    return codeEditor.getValue();
                },
                select: function (){
                    codeEditor.focus();
                },
                dispose: function (){
                    holder.removeChild(dom);
                    dom = null;
                    codeEditor = null;
                }
            };
        }
    };

    UE.plugins['source'] = function (){
        var me = this;
        var opt = this.options;
        var formatter = new SourceFormater(opt.source);
        var sourceMode = false;
        var sourceEditor;
        opt.sourceEditor = browser.ie && browser.version < 8 ? 'textarea' : (opt.sourceEditor || 'codemirror');

        me.setOpt({
            sourceEditorFirst:false
        });
        function createSourceEditor(holder){
            return sourceEditors[opt.sourceEditor == 'codemirror' && window.CodeMirror ? 'codemirror' : 'textarea'](me, holder);
        }

        var bakCssText;
        //鐟欙絽鍠呴崷銊︾爱閻焦膩瀵繋绗単etContent娑撳秷鍏樺妤�煂閺堬拷鏌婇惃鍕敶鐎瑰綊妫舵０锟�
        var oldGetContent = me.getContent;

        me.commands['source'] = {
            execCommand: function (){

                sourceMode = !sourceMode;
                if (sourceMode) {
                    me.undoManger && me.undoManger.save();
                    this.currentSelectedArr && domUtils.clearSelectedArr(this.currentSelectedArr);
                    if(browser.gecko){
                        me.body.contentEditable = false;
                    }

                    bakCssText = me.iframe.style.cssText;
                    me.iframe.style.cssText += 'position:absolute;left:-32768px;top:-32768px;';

                    var content = formatter.format(me.hasContents() ? me.getContent() : '');

                    sourceEditor = createSourceEditor(me.iframe.parentNode);

                    sourceEditor.setContent(content);
                    setTimeout(function (){
                        sourceEditor.select();
                        me.addListener('fullscreenchanged', function(){
                            try{
                                sourceEditor.getCodeMirror().refresh()
                            }catch(e){}
                        });
                    });
                    //闁插秶鐤唃etContent閿涘本绨惍浣鼓佸蹇庣瑓閸欐牕锟芥稊鐔诲厴閺勵垱娓堕弬鎵畱閺佺増宓�
                    me.getContent = function (){
                        var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                        cont = cont.replace(/>[\n\r\t]+([ ]{4})+/g,'>').replace(/[\n\r\t]+([ ]{4})+</g,'<').replace(/>[\n\r\t]+</g,'><');
                        me.setContent(cont,true);
                        return oldGetContent.apply(this);
                    };
                } else {
                    me.iframe.style.cssText = bakCssText;
                    var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                    cont = cont.replace(/>[\n\r\t]+([ ]{4})+/g,'>').replace(/[\n\r\t]+([ ]{4})+</g,'<').replace(/>[\n\r\t]+</g,'><');
                    me.setContent(cont);
                    sourceEditor.dispose();
                    sourceEditor = null;
                    //鏉╂ê甯玤etContent閺傝纭�
                    me.getContent = oldGetContent;
                    setTimeout(function(){
                        var first = me.body.firstChild;
                        //trace:1106 闁棄鍨归梽銈団敄娴滃棴绱濇稉瀣珶娴兼碍濮ら柨娆欑礉閹碉拷浜掔悰銉ュ帠娑擄拷閲減閸楃姳缍�
                        if(!first){
                            me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
                            first = me.body.firstChild;
                        }
                        //鐟曚礁婀猧fm娑撶儤妯夌粈鐑樻ff閹靛秷鍏橀崣鏍у煂selection,閸氾箑鍨幎銉╂晩
                        //鏉╂瑩鍣锋稉宥堝厴濮ｆ棁绶濇担宥囩枂娴滐拷
                        me.undoManger && me.undoManger.save(true);

                        while(first && first.firstChild){

                            first = first.firstChild;
                        }
                        var range = me.selection.getRange();
                        if(first.nodeType == 3 || dtd.$empty[first.tagName]){
                            range.setStartBefore(first);
                        }else{
                            range.setStart(first,0);
                        }

                        if(browser.gecko){

                            var input = document.createElement('input');
                            input.style.cssText = 'position:absolute;left:0;top:-32768px';

                            document.body.appendChild(input);

                            me.body.contentEditable = false;
                            setTimeout(function(){
                                domUtils.setViewportOffset(input, { left: -32768, top: 0 });
                                input.focus();
                                setTimeout(function(){
                                    me.body.contentEditable = true;
                                    range.setCursor(false,true);
                                    domUtils.remove(input);
                                });

                            });
                        }else{
                            range.setCursor(false,true);
                        }
                    });
                }
                this.fireEvent('sourcemodechanged', sourceMode);
            },
            queryCommandState: function (){
                return sourceMode|0;
            },
            notNeedUndo : 1
        };
        var oldQueryCommandState = me.queryCommandState;

        me.queryCommandState = function (cmdName){
            cmdName = cmdName.toLowerCase();
            if (sourceMode) {
                //濠ф劗鐖滃Ο鈥崇础娑撳褰叉禒銉ョ磻閸氼垳娈戦崨鎴掓姢
                return cmdName in {
                    'source' : 1,
                    'fullscreen' : 1
                } ? 1 : -1
            }
            return oldQueryCommandState.apply(this, arguments);
        };

        if(opt.sourceEditor == "codemirror"){

            me.addListener("ready",function(){
                utils.loadFile(document,{
                    src : opt.codeMirrorJsUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.js",
                    tag : "script",
                    type : "text/javascript",
                    defer : "defer"
                },function(){
                    if(opt.sourceEditorFirst){
                        setTimeout(function(){
                            me.execCommand("source");
                        },0);
                    }
                });
                utils.loadFile(document,{
                    tag : "link",
                    rel : "stylesheet",
                    type : "text/css",
                    href : opt.codeMirrorCssUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.css"
                });

            });
        }

    };

})();
///import core
///commands 韫囶偅宓庨柨锟�
///commandsName  ShortCutKeys
///commandsTitle  韫囶偅宓庨柨锟�
//闁板秶鐤嗚箛顐ｅ祹闁匡拷
UE.plugins['shortcutkeys'] = function(){
    var me = this,
        shortcutkeys = {
    		"ctrl+66" : "Bold" ,//^B
        	"ctrl+90" : "Undo" ,//undo
        	"ctrl+89" : "Redo", //redo
       		"ctrl+73" : "Italic", //^I
       		"ctrl+85" : "Underline" ,//^U
        	"ctrl+shift+67" : "removeformat", //濞撳懘娅庨弽鐓庣础
        	"ctrl+shift+76" : "justify:left", //鐏炲懎涔�
        	"ctrl+shift+82" : "justify:right", //鐏炲懎褰�
        	"ctrl+65" : "selectAll",
            "ctrl+13" : "autosubmit"//閹靛濮╅幓鎰唉
//        	,"9"	   : "indent" //tab
    	};
    me.addListener('keydown',function(type,e){

        var keyCode = e.keyCode || e.which,value;
		for ( var i in shortcutkeys ) {
		    if ( /^(ctrl)(\+shift)?\+(\d+)$/.test( i.toLowerCase() ) || /^(\d+)$/.test( i ) ) {
		        if ( ( (RegExp.$1 == 'ctrl' ? (e.ctrlKey||e.metaKey||browser.opera && keyCode == 17) : 0)
                        && (RegExp.$2 != "" ? e[RegExp.$2.slice(1) + "Key"] : 1)
                        && keyCode == RegExp.$3
                    ) ||
                     keyCode == RegExp.$1
                ){

                    value = shortcutkeys[i].split(':');
                    me.execCommand( value[0],value[1]);
                    domUtils.preventDefault(e);
		        }
		    }
		}
    });
};
///import core
///import plugins/undo.js
///commands 鐠佸墽鐤嗛崶鐐舵簠閺嶅洨顒穚閹存溇r
///commandsName  EnterKey
///commandsTitle  鐠佸墽鐤嗛崶鐐舵簠閺嶅洨顒穚閹存溇r
/**
 * @description 婢跺嫮鎮婇崶鐐舵簠
 * @author zhanyi
 */
UE.plugins['enterkey'] = function() {
    var hTag,
        me = this,
        tag = me.options.enterTag;
    me.addListener('keyup', function(type, evt) {

        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {
            var range = me.selection.getRange(),
                start = range.startContainer,
                doSave;

            //娣囶喗顒滈崷鈺�-h6闁插矁绔熼崶鐐舵簠閸氬簼绗夐懗钘夌サ婵傛ⅰ閻ㄥ嫰妫舵０锟�
            if (!browser.ie) {

                if (/h\d/i.test(hTag)) {
                    if (browser.gecko) {
                        var h = domUtils.findParentByTagName(start, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote'], true);
                        if (!h) {
                            me.document.execCommand('formatBlock', false, '<p>');
                            doSave = 1;
                        }
                    } else {
                        //chrome remove div
                        if (start.nodeType == 1) {
                            var tmp = me.document.createTextNode(''),div;
                            range.insertNode(tmp);
                            div = domUtils.findParentByTagName(tmp, 'div', true);
                            if (div) {
                                var p = me.document.createElement('p');
                                while (div.firstChild) {
                                    p.appendChild(div.firstChild);
                                }
                                div.parentNode.insertBefore(p, div);
                                domUtils.remove(div);
                                range.setStartBefore(tmp).setCursor();
                                doSave = 1;
                            }
                            domUtils.remove(tmp);

                        }
                    }

                    if (me.undoManger && doSave) {
                        me.undoManger.save();
                    }
                }
                //濞屸剝婀佺粩娆庣秴缁楋讣绱濇导姘毉閻滄澘顧嬬悰宀�畱闂傤噣顣�
                browser.opera &&  range.select();
            }



            setTimeout(function() {
                me.selection.getRange().scrollToView(me.autoHeightEnabled, me.autoHeightEnabled ? domUtils.getXY(me.iframe).y : 0);
            }, 50);

        }
    });

    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {//閸ョ偠婧�
            if (me.undoManger) {
                me.undoManger.save();
            }
            hTag = '';


            var range = me.selection.getRange();

            if (!range.collapsed) {
                //鐠衡暟d娑撳秷鍏橀崚锟�
                var start = range.startContainer,
                    end = range.endContainer,
                    startTd = domUtils.findParentByTagName(start, 'td', true),
                    endTd = domUtils.findParentByTagName(end, 'td', true);
                if (startTd && endTd && startTd !== endTd || !startTd && endTd || startTd && !endTd) {
                    evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);
                    return;
                }
            }
            me.currentSelectedArr && domUtils.clearSelectedArr(me.currentSelectedArr);

            if (tag == 'p') {


                if (!browser.ie) {

                    start = domUtils.findParentByTagName(range.startContainer, ['ol','ul','p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote'], true);

                    //opera娑撳澧界悰瀹杘rmatblock娴兼艾婀猼able閻ㄥ嫬婧�弲顖欑瑓閺堝妫舵０姗堢礉閸ョ偠婧呴崷鈺玴era閸樼喓鏁撻弨顖涘瘮瀵板牆銈介敍灞惧娴犮儲娈忛弮璺烘躬opera閸樼粯甯�拫鍐暏鏉╂瑤閲滈崢鐔烘晸閻ㄥ垻ommand
                    //trace:2431
                    if (!start && !browser.opera) {

                        me.document.execCommand('formatBlock', false, '<p>');
                        if (browser.gecko) {
                            range = me.selection.getRange();
                            start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                            start && domUtils.removeDirtyAttr(start);
                        }


                    } else {
                        hTag = start.tagName;
                        start.tagName.toLowerCase() == 'p' && browser.gecko && domUtils.removeDirtyAttr(start);
                    }

                }

            } else {
                evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);

                if (!range.collapsed) {
                    range.deleteContents();
                    start = range.startContainer;
                    if (start.nodeType == 1 && (start = start.childNodes[range.startOffset])) {
                        while (start.nodeType == 1) {
                            if (dtd.$empty[start.tagName]) {
                                range.setStartBefore(start).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save();
                                }
                                return false;
                            }
                            if (!start.firstChild) {
                                var br = range.document.createElement('br');
                                start.appendChild(br);
                                range.setStart(start, 0).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save();
                                }
                                return false;
                            }
                            start = start.firstChild;
                        }
                        if (start === range.startContainer.childNodes[range.startOffset]) {
                            br = range.document.createElement('br');
                            range.insertNode(br).setCursor();

                        } else {
                            range.setStart(start, 0).setCursor();
                        }


                    } else {
                        br = range.document.createElement('br');
                        range.insertNode(br).setStartAfter(br).setCursor();
                    }


                } else {
                    br = range.document.createElement('br');
                    range.insertNode(br);
                    var parent = br.parentNode;
                    if (parent.lastChild === br) {
                        br.parentNode.insertBefore(br.cloneNode(true), br);
                        range.setStartBefore(br);
                    } else {
                        range.setStartAfter(br);
                    }
                    range.setCursor();

                }

            }

        }
    });
};

/*
*   婢跺嫮鎮婇悧瑙勭暕闁款喚娈戦崗鐓庮啇閹囨６妫帮拷
*/
UE.plugins['keystrokes'] = function() {
    var me = this,
        flag = 0,
        keys = domUtils.keys,
        trans = {
            'B' : 'strong',
            'I' : 'em',
            'FONT' : 'span'
        },
        sizeMap = [0, 10, 12, 16, 18, 24, 32, 48],
        listStyle = {
            'OL':['decimal','lower-alpha','lower-roman','upper-alpha','upper-roman'],

            'UL':[ 'circle','disc','square']
        };

    //閸掋倖鏌囬崚妤勩�閺勵垰鎯侀弰顖滄祲娴艰偐娈�
    function sameListNode(nodeA,nodeB){
        if(nodeA.tagName !== nodeB.tagName ||
            domUtils.getComputedStyle(nodeA,'list-style-type') !== domUtils.getComputedStyle(nodeB,'list-style-type')
        ){
            return false
        }
        return true;
    }
    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;

        if(this.selectAll){
            this.selectAll = false;
            if((keyCode == 8 || keyCode == 46)){
                me.undoManger && me.undoManger.save();
                 //trace:1633
                me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';

                new dom.Range(me.document).setStart(me.body.firstChild,0).setCursor(false,true);
                me.undoManger && me.undoManger.save();
                //todo 鐎佃锟介懗鎴掔窗閺堝濂栭崫锟�
                browser.ie && me._selectionChange();
                domUtils.preventDefault(evt);
                return;
            }


        }

        //婢跺嫮鎮奲ackspace/del
        if (keyCode == 8 ) {//|| keyCode == 46


            var range = me.selection.getRange(),
                tmpRange,
                start,end;

            //瑜版挸鍨归梽銈呭煂body閺堬拷绱戞慨瀣畱娴ｅ秶鐤嗛弮璁圭礉娴兼艾鍨归梽銈呭煂body,闂冪粯顒涙潻娆庨嚋閸斻劋缍�
            if(range.collapsed){
                start = range.startContainer;
                //閺堝褰查懗鑺ユЦ鐏炴洑缍呯粭锕�娇
                if(domUtils.isWhitespace(start)){
                    start = start.parentNode;
                }
                if(domUtils.isEmptyNode(start) && start === me.body.firstChild){

                    if(start.tagName != 'P'){
                        p = me.document.createElement('p');
                        me.body.insertBefore(p,start);
                        domUtils.fillNode(me.document,p);
                        range.setStart(p,0).setCursor(false,true);
                        //trace:1645
                        domUtils.remove(start);
                    }
                    domUtils.preventDefault(evt);
                    return;

                }
            }

            if (range.collapsed && range.startContainer.nodeType == 3 && range.startContainer.nodeValue.replace(new RegExp(domUtils.fillChar, 'g'), '').length == 0) {
                range.setStartBefore(range.startContainer).collapse(true);
            }
            //鐟欙絽鍠呴柅澶夎厬control閸忓啰绀屾稉宥堝厴閸掔娀娅庨惃鍕６妫帮拷
            if (start = range.getClosedNode()) {
                me.undoManger && me.undoManger.save();
                range.setStartBefore(start);
                domUtils.remove(start);
                range.setCursor();
                me.undoManger && me.undoManger.save();
                domUtils.preventDefault(evt);
                return;
            }
            //闂冪粯顒涢崷鈺癮ble娑撳﹦娈戦崚鐘绘珟
            if (!browser.ie) {

                start = domUtils.findParentByTagName(range.startContainer, 'table', true);
                end = domUtils.findParentByTagName(range.endContainer, 'table', true);
                if (start && !end || !start && end || start !== end) {
                    evt.preventDefault();
                    return;
                }
                //鐞涖劍鐗搁柌灞芥礀鏉烇讣绱濋崚鐘绘珟閺冭绱濋崗澶嬬垼鐞氼偄鐣炬担宥呭煂娴滃敀婢舵牞绔熼敍灞筋嚤閼锋潙顧嬪▎鈥冲灩闂勩倖澧犻懗钘夊煂娑撳﹣绔寸悰宀嬬礉鏉╂瑩鍣烽惃鍕樀閻炲棗绻曠拋鐗堟Ц娑撹桨绮堟稊鍫礉閺嗗倹妞傚▔銊瀰閹猴拷
                //鐟欙絽鍠卼race:1966閻ㄥ嫰妫舵０锟�
//                if (browser.webkit && range.collapsed && start) {
//                    tmpRange = range.cloneRange().txtToElmBoundary();
//                    start = tmpRange.startContainer;
//                           debugger
//                    if (domUtils.isBlockElm(start) && !dtd.$tableContent[start.tagName] && !domUtils.getChildCount(start, function(node) {
//                        return node.nodeType == 1 ? node.tagName !== 'BR' : 1;
//                    })) {
//
//                        tmpRange.setStartBefore(start).setCursor();
//                        domUtils.remove(start, true);
//                        evt.preventDefault();
//                        return;
//                    }
//                }
            }


            if (me.undoManger) {

                if (!range.collapsed) {
                    me.undoManger.save();
                    flag = 1;
                }
            }

        }
        //婢跺嫮鎮妕ab闁款喚娈戦柅鏄忕帆
        if (keyCode == 9) {
            range = me.selection.getRange();
            me.undoManger && me.undoManger.save();

            for (var i = 0,txt = '',tabSize = me.options.tabSize|| 4,tabNode =  me.options.tabNode || '&nbsp;'; i < tabSize; i++) {
                txt += tabNode;
            }
            var span = me.document.createElement('span');
            span.innerHTML = txt;
            if (range.collapsed) {


                var li = domUtils.findParentByTagName(range.startContainer, 'li', true);

                if (li && domUtils.isStartInblock(range)) {
                    bk = range.createBookmark();
                    var parentLi = li.parentNode,
                        list = me.document.createElement(parentLi.tagName);
                    var index = utils.indexOf(listStyle[list.tagName], domUtils.getComputedStyle(parentLi, 'list-style-type'));
                    index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                    domUtils.setStyle(list, 'list-style-type', listStyle[list.tagName][index]);
                    parentLi.insertBefore(list, li);
                    list.appendChild(li);

                    //trace:2721
                    //閸氬牆鑻熸稉濠佺瑓閻╃鎮撻惃鍕灙鐞涳拷
                    var preList = list.previousSibling;
                    if(preList && sameListNode(preList,list)){
                        domUtils.moveChild(list,preList);
                        domUtils.remove(list);
                        list = preList
                    }
                    var nextList = list.nextSibling;
                    if(nextList && sameListNode(nextList,list)){
                        domUtils.moveChild(nextList,list);
                        domUtils.remove(nextList);
                    }

                    range.moveToBookmark(bk).select();

                } else{
                    range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
                }

            } else {
                //婢跺嫮鎮妕able
                start = domUtils.findParentByTagName(range.startContainer, 'table', true);
                end = domUtils.findParentByTagName(range.endContainer, 'table', true);
                if (start || end) {
                    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
                    return;
                }
                //婢跺嫮鎮婇崚妤勩� 閸愬秳绔存稉鐚痠st闁插苯顦甸悶锟�
                start = domUtils.findParentByTagName(range.startContainer, ['ol','ul'], true);
                end = domUtils.findParentByTagName(range.endContainer, ['ol','ul'], true);
                if (start && end && start === end) {
                    var bk = range.createBookmark();
                    start = domUtils.findParentByTagName(range.startContainer, 'li', true);
                    end = domUtils.findParentByTagName(range.endContainer, 'li', true);
                    //閸︺劌绱戞慨瀣礋閻欘剙顦甸悶锟�
                    if (start === start.parentNode.firstChild) {
                        var parentList = me.document.createElement(start.parentNode.tagName);

                        start.parentNode.parentNode.insertBefore(parentList, start.parentNode);
                        parentList.appendChild(start.parentNode);
                    } else {
                        parentLi = start.parentNode;
                            list = me.document.createElement(parentLi.tagName);

                        index = utils.indexOf(listStyle[list.tagName], domUtils.getComputedStyle(parentLi, 'list-style-type'));
                        index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                        domUtils.setStyle(list, 'list-style-type', listStyle[list.tagName][index]);
                        start.parentNode.insertBefore(list, start);
                        var nextLi;
                        while (start !== end) {
                            nextLi = start.nextSibling;
                            list.appendChild(start);
                            start = nextLi;
                        }
                        list.appendChild(end);

                    }
                    range.moveToBookmark(bk).select();

                } else {
                    if (start || end) {
                        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
                        return
                    }
                    //閺咁噣锟介惃鍕剰閸愶拷
                    start = domUtils.findParent(range.startContainer, filterFn);
                    end = domUtils.findParent(range.endContainer, filterFn);
                    if (start && end && start === end) {
                        range.deleteContents();
                        range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
                    } else {
                        var bookmark = range.createBookmark(),
                            filterFn = function(node) {
                                return domUtils.isBlockElm(node);

                            };

                        range.enlarge(true);
                        var bookmark2 = range.createBookmark(),
                            current = domUtils.getNextDomNode(bookmark2.start, false, filterFn);


                        while (current && !(domUtils.getPosition(current, bookmark2.end) & domUtils.POSITION_FOLLOWING)) {


                            current.insertBefore(span.cloneNode(true).firstChild, current.firstChild);

                            current = domUtils.getNextDomNode(current, false, filterFn);

                        }

                        range.moveToBookmark(bookmark2).moveToBookmark(bookmark).select();
                    }

                }


            }
            me.undoManger && me.undoManger.save();
            evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        }
        //trace:1634
        //ff閻ㄥ垼el闁款喖婀�鐟版珤缁岃櫣娈戦弮璺猴拷閿涘奔绡冩导姘灩闂勶拷
        if(browser.gecko && keyCode == 46){
            range = me.selection.getRange();
            if(range.collapsed){
                start = range.startContainer;
                if(domUtils.isEmptyBlock(start)){
                    var parent = start.parentNode;
                    while(domUtils.getChildCount(parent) == 1 && !domUtils.isBody(parent)){
                        start = parent;
                        parent = parent.parentNode;
                    }
                    if(start === parent.lastChild)
                        evt.preventDefault();
                    return;
                }
            }
        }
    });
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        //娣囶喖顦緄e/chrome <strong><em>x|</em></strong> 瑜版挾鍋ｉ柅锟界壐閸氬骸婀潏鎾冲弳閺傚洤鐡ч崥搴濈窗閸戣櫣骞� <b><i>x</i></b>
        if (!browser.gecko && !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            range = me.selection.getRange();
            if (range.collapsed) {
                var start = range.startContainer,
                    isFixed = 0;

                while (!domUtils.isBlockElm(start)) {
                    if (start.nodeType == 1 && utils.indexOf(['FONT','B','I'], start.tagName) != -1) {

                        var tmpNode = me.document.createElement(trans[start.tagName]);
                        if (start.tagName == 'FONT') {
                            //chrome only remember color property
                            tmpNode.style.cssText = (start.getAttribute('size') ? 'font-size:' + (sizeMap[start.getAttribute('size')] || 12) + 'px' : '')
                                + ';' + (start.getAttribute('color') ? 'color:' + start.getAttribute('color') : '')
                                + ';' + (start.getAttribute('face') ? 'font-family:' + start.getAttribute('face') : '')
                                + ';' + start.style.cssText;
                        }
                        while (start.firstChild) {
                            tmpNode.appendChild(start.firstChild)
                        }
                        start.parentNode.insertBefore(tmpNode, start);
                        domUtils.remove(start);
                        if (!isFixed) {
                            range.setEnd(tmpNode, tmpNode.childNodes.length).collapse(true)

                        }
                        start = tmpNode;
                        isFixed = 1;
                    }
                    start = start.parentNode;

                }

                isFixed && range.select()

            }
        }

        if (keyCode == 8 ) {//|| keyCode == 46

            //闁藉牆顕甪f娑撳婀崚妤勩�妫ｆ牞顢戦柅锟界壐閿涘奔绗夐懗钘夊灩闂勩倗鈹栭弽鑹邦攽閻ㄥ嫰妫舵０锟�
            if(browser.gecko){
                for(var i=0,li,lis = domUtils.getElementsByTagName(this.body,'li');li=lis[i++];){
                    if(domUtils.isEmptyNode(li) && !li.previousSibling){
                        var liOfPn = li.parentNode;
                        domUtils.remove(li);
                        if(domUtils.isEmptyNode(liOfPn)){
                            domUtils.remove(liOfPn)
                        }

                    }
                }
            }

            var range,start,parent,
                tds = this.currentSelectedArr;
            if (tds && tds.length > 0) {
                for (var i = 0,ti; ti = tds[i++];) {
                    ti.innerHTML = browser.ie ? ( browser.version < 9 ? '&#65279' : '' ) : '<br/>';

                }
                range = new dom.Range(this.document);
                range.setStart(tds[0], 0).setCursor();
                if (flag) {
                    me.undoManger.save();
                    flag = 0;
                }
                //闂冪粯顒沜hrome閹笛嗩攽姒涙顓婚惃鍕З娴ｏ拷
                if (browser.webkit) {
                    evt.preventDefault();
                }
                return;
            }

            range = me.selection.getRange();

            //ctrl+a 閸氬骸鍙忛柈銊ュ灩闂勩倕浠涙径鍕倞
//
//            if (domUtils.isEmptyBlock(me.body) && !range.startOffset) {
//                //trace:1633
//                me.body.innerHTML = '<p>'+(browser.ie ? '&nbsp;' : '<br/>')+'</p>';
//                range.setStart(me.body.firstChild,0).setCursor(false,true);
//                me.undoManger && me.undoManger.save();
//                //todo 鐎佃锟介懗鎴掔窗閺堝濂栭崫锟�
//                browser.ie && me._selectionChange();
//                return;
//            }

            //婢跺嫮鎮婇崚鐘绘珟娑撳秴鍏遍崙锟芥畱闂傤噣顣�

            start = range.startContainer;
            if(domUtils.isWhitespace(start)){
                start = start.parentNode
            }
            //閺嶅洤绻旀担宥夋Щ濮濄垻鈹栭惃鍒鹃弮鐘崇《閸掔娀娅�
            var removeFlag = 0;
            while (start.nodeType == 1 && domUtils.isEmptyNode(start) && dtd.$removeEmpty[start.tagName]) {
                removeFlag = 1;
                parent = start.parentNode;
                domUtils.remove(start);
                start = parent;
            }

            if ( removeFlag && start.nodeType == 1 && domUtils.isEmptyNode(start)) {
                //ie娑撳娈戦梻顕�暯閿涘矁娅ч悞鑸电梾閺堝绨￠惄绋跨安閻ㄥ嫯濡悙閫涚稻娑擄拷妫担鐘虹翻閸忋儲鏋冪�妤勭箷閺勵垯绱伴懛顏勫З閹跺﹤鍨归梽銈囨畱閼哄倻鍋ｉ崝鐘辩瑐閿涳拷
                if (browser.ie) {
                    var span = range.document.createElement('span');
                    start.appendChild(span);
                    range.setStart(start,0).setCursor();
                    //for ie
                    li = domUtils.findParentByTagName(start,'li',true);
                    if(li){
                        var next = li.nextSibling;
                        while(next){
                            if(domUtils.isEmptyBlock(next)){
                                li = next;
                                next = next.nextSibling;
                                domUtils.remove(li);
                                continue;

                            }
                            break;
                        }
                    }
                } else {
                    start.innerHTML = '<br/>';
                    range.setStart(start, 0).setCursor(false,true);
                }

                setTimeout(function() {
                    if (browser.ie) {
                        domUtils.remove(span);
                    }

                    if (flag) {
                        me.undoManger.save();
                        flag = 0;
                    }
                }, 0)
            } else {

                if (flag) {
                    me.undoManger.save();
                    flag = 0;
                }

            }
        }
    })
};
///import core
///commands 娣囶喖顦綾hrome娑撳娴橀悧鍥︾瑝閼崇晫鍋ｉ崙鑽ゆ畱闂傤噣顣�
///commandsName  FixImgClick
///commandsTitle  娣囶喖顦綾hrome娑撳娴橀悧鍥︾瑝閼崇晫鍋ｉ崙鑽ゆ畱闂傤噣顣�
//娣囶喖顦綾hrome娑撳娴橀悧鍥︾瑝閼崇晫鍋ｉ崙鑽ゆ畱闂傤噣顣�
//todo 閸欘垯浜掗弨鐟般亣鐏忥拷
UE.plugins['fiximgclick'] = function() {
    var me = this;
    if ( browser.webkit ) {
        me.addListener( 'click', function( type, e ) {
            if ( e.target.tagName == 'IMG' ) {
                var range = new dom.Range( me.document );
                range.selectNode( e.target ).select();

            }
        } );
    }
};
///import core
///commands 娑撴椽娼猧e濞村繗顬囬崳銊ㄥ殰閸斻劍鍧婇崝鐕奸弽鍥╊劮
///commandsName  AutoLink
///commandsTitle  閼奉亜濮╂晶鐐插闁剧偓甯�
/**
 * @description 娑撴椽娼猧e濞村繗顬囬崳銊ㄥ殰閸斻劍鍧婇崝鐕奸弽鍥╊劮
 * @author zhanyi
 */
    UE.plugins['autolink'] = function() {
        var cont = 0;
        if (browser.ie) {
            return;
        }
        var me = this;
        me.addListener('reset',function(){
           cont = 0;
        });
        me.addListener('keydown', function(type, evt) {
            var keyCode = evt.keyCode || evt.which;

            if (keyCode == 32 || keyCode == 13) {

                var sel = me.selection.getNative(),
                    range = sel.getRangeAt(0).cloneRange(),
                    offset,
                    charCode;

                var start = range.startContainer;
                while (start.nodeType == 1 && range.startOffset > 0) {
                    start = range.startContainer.childNodes[range.startOffset - 1];
                    if (!start){
                        break;
                    }
                    range.setStart(start, start.nodeType == 1 ? start.childNodes.length : start.nodeValue.length);
                    range.collapse(true);
                    start = range.startContainer;
                }

                do{
                    if (range.startOffset == 0) {
                        start = range.startContainer.previousSibling;

                        while (start && start.nodeType == 1) {
                            start = start.lastChild;
                        }
                        if (!start || domUtils.isFillChar(start)){
                            break;
                        }
                        offset = start.nodeValue.length;
                    } else {
                        start = range.startContainer;
                        offset = range.startOffset;
                    }
                    range.setStart(start, offset - 1);
                    charCode = range.toString().charCodeAt(0);
                } while (charCode != 160 && charCode != 32);

                if (range.toString().replace(new RegExp(domUtils.fillChar, 'g'), '').match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
                    while(range.toString().length){
                        if(/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(range.toString())){
                            break;
                        }
                        try{
                            range.setStart(range.startContainer,range.startOffset+1);
                        }catch(e){
                            //trace:2121
                            var start = range.startContainer;
                            while(!(next = start.nextSibling)){
                                if(domUtils.isBody(start)){
                                    return;
                                }
                                start = start.parentNode;

                            }
                            range.setStart(next,0);

                        }

                    }
                    //range閻ㄥ嫬绱戞慨瀣珶閻ｅ苯鍑＄紒蹇撴躬a閺嶅洨顒烽柌宀�畱娑撳秴鍟�径鍕倞
                    if(domUtils.findParentByTagName(range.startContainer,'a',true)){
                        return;
                    }
                    var a = me.document.createElement('a'),text = me.document.createTextNode(' '),href;

                    me.undoManger && me.undoManger.save();
                    a.appendChild(range.extractContents());
                    a.href = a.innerHTML = a.innerHTML.replace(/<[^>]+>/g,'');
                    href = a.getAttribute("href").replace(new RegExp(domUtils.fillChar,'g'),'');
                    href = /^(?:https?:\/\/)/ig.test(href) ? href : "http://"+ href;
                    a.setAttribute('data_ue_src',href);
                    a.href = href;

                    range.insertNode(a);
                    a.parentNode.insertBefore(text, a.nextSibling);
                    range.setStart(text, 0);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    me.undoManger && me.undoManger.save();
                }
            }
        });
    };

///import core
///commands 瑜版捁绶崗銉ュ敶鐎圭绉存潻鍥╃椽鏉堟垵娅掓妯哄閺冭绱濈紓鏍帆閸ｃ劏鍤滈崝銊ヮ杻妤傦拷
///commandsName  AutoHeight,autoHeightEnabled
///commandsTitle  閼奉亜濮╂晶鐐虹彯
/**
 * @description 閼奉亜濮╂导绋跨潔
 * @author zhanyi
 */
UE.plugins['autoheight'] = function () {
    var me = this;
    //閹绘劒绶靛锟藉彠閿涘苯姘ㄧ粻妤�鏉炴垝绡冮崣顖欎簰閸忔娊妫�
    me.autoHeightEnabled = me.options.autoHeightEnabled !== false;
    if (!me.autoHeightEnabled) {
        return;
    }

    var bakOverflow,
        span, tmpNode,
        lastHeight = 0,
        options = me.options,
        currentHeight,
        timer;

    function adjustHeight() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (me.queryCommandState('source') != 1) {
                if (!span) {
                    span = me.document.createElement('span');
                    //trace:1764
                    span.style.cssText = 'display:block;width:0;margin:0;padding:0;border:0;clear:both;';
                    span.innerHTML = '.';
                }
                tmpNode = span.cloneNode(true);
                me.body.appendChild(tmpNode);

                currentHeight = Math.max(domUtils.getXY(tmpNode).y + tmpNode.offsetHeight,Math.max(options.minFrameHeight, options.initialFrameHeight));

                if (currentHeight != lastHeight) {

                    me.setHeight(currentHeight);

                    lastHeight = currentHeight;
                }

                domUtils.remove(tmpNode);

            }
        }, 50);
    }

    me.addListener('destroy', function () {
        me.removeListener('contentchange', adjustHeight);
        me.removeListener('keyup', adjustHeight);
        me.removeListener('mouseup', adjustHeight);
    });
    me.enableAutoHeight = function () {
        if (!me.autoHeightEnabled) {
            return;
        }
        var doc = me.document;
        me.autoHeightEnabled = true;
        bakOverflow = doc.body.style.overflowY;
        doc.body.style.overflowY = 'hidden';
        me.addListener('contentchange', adjustHeight);
        me.addListener('keyup', adjustHeight);
        me.addListener('mouseup', adjustHeight);
        //ff娑撳秶绮版禍瀣╂缁犳绶辨稉宥咁嚠
        setTimeout(function () {
            adjustHeight();
        }, browser.gecko ? 100 : 0);
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.disableAutoHeight = function () {

        me.body.style.overflowY = bakOverflow || '';

        me.removeListener('contentchange', adjustHeight);
        me.removeListener('keyup', adjustHeight);
        me.removeListener('mouseup', adjustHeight);
        me.autoHeightEnabled = false;
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.addListener('ready', function () {
        me.enableAutoHeight();
        //trace:1764
        var timer;
        domUtils.on(browser.ie ? me.body : me.document, browser.webkit ? 'dragover' : 'drop', function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                adjustHeight();
            }, 100);

        });
    });


};


///import core
///commands 閹剚璇炲銉ュ徔閺嶏拷
///commandsName  AutoFloat,autoFloatEnabled
///commandsTitle  閹剚璇炲銉ュ徔閺嶏拷
/*
 *  modified by chengchao01
 *
 *  濞夈劍鍓伴敍锟藉鏇炲弳濮濄倕濮涢懗钘夋倵閿涘苯婀狪E6娑撳绱扮亸鍝筼dy閻ㄥ嫯鍎楅弲顖氭禈閻楀洩顪婇惄鏍ㄥ竴閿涳拷
 */
    UE.plugins['autofloat'] = function() {
        var me = this,
                lang = me.getLang();
        me.setOpt({
            topOffset:0
        });
        var optsAutoFloatEnabled = me.options.autoFloatEnabled !== false,
        topOffset = me.options.topOffset;


        //婵″倹鐏夋稉宥呮祼鐎规oolbar閻ㄥ嫪缍呯純顕嗙礉閸掓瑧娲块幒銉╋拷閸戯拷
        if(!optsAutoFloatEnabled){
            return;
        }
        var uiUtils = UE.ui.uiUtils,
       		LteIE6 = browser.ie && browser.version <= 6,
            quirks = browser.quirks;

        function checkHasUI(editor){
           if(!editor.ui){
              alert(lang.autofloatMsg);
               return 0;
           }
           return 1;
       }
        function fixIE6FixedPos(){
            var docStyle = document.body.style;
           docStyle.backgroundImage = 'url("about:blank")';
           docStyle.backgroundAttachment = 'fixed';
        }
		var	bakCssText,
			placeHolder = document.createElement('div'),
            toolbarBox,orgTop,
            getPosition,
            flag =true;   //ie7濡�绱℃稉瀣付鐟曚礁浜哥粔锟�
		function setFloating(){
			var toobarBoxPos = domUtils.getXY(toolbarBox),
				origalFloat = domUtils.getComputedStyle(toolbarBox,'position'),
                origalLeft = domUtils.getComputedStyle(toolbarBox,'left');
			toolbarBox.style.width = toolbarBox.offsetWidth + 'px';
            toolbarBox.style.zIndex = me.options.zIndex * 1 + 1;
			toolbarBox.parentNode.insertBefore(placeHolder, toolbarBox);
			if (LteIE6 || (quirks && browser.ie)) {
                if(toolbarBox.style.position != 'absolute'){
                    toolbarBox.style.position = 'absolute';
                }
                toolbarBox.style.top = (document.body.scrollTop||document.documentElement.scrollTop) - orgTop + topOffset  + 'px';
			} else {
                if (browser.ie7Compat && flag) {
                    flag = false;
                    toolbarBox.style.left =  domUtils.getXY(toolbarBox).x - document.documentElement.getBoundingClientRect().left+2  + 'px';
                }
                if(toolbarBox.style.position != 'fixed'){
                    toolbarBox.style.position = 'fixed';
                    toolbarBox.style.top = topOffset +"px";
                    ((origalFloat == 'absolute' || origalFloat == 'relative') && parseFloat(origalLeft)) && (toolbarBox.style.left = toobarBoxPos.x + 'px');
                }
			}
		}
		function unsetFloating(){
            flag = true;
            if(placeHolder.parentNode){
                placeHolder.parentNode.removeChild(placeHolder);
            }
			toolbarBox.style.cssText = bakCssText;
		}

        function updateFloating(){
            var rect3 = getPosition(me.container);
            if (rect3.top < 0 && rect3.bottom - toolbarBox.offsetHeight > 0) {
                setFloating();
            }else{
                unsetFloating();
            }
        }
        var defer_updateFloating = utils.defer(function(){
            updateFloating();
        },browser.ie ? 200 : 100,true);

        me.addListener('destroy',function(){
            domUtils.un(window, ['scroll','resize'], updateFloating);
            me.removeListener('keydown', defer_updateFloating);
        });
        me.addListener('ready', function(){
            if(checkHasUI(me)){

                getPosition = uiUtils.getClientRect;
                toolbarBox = me.ui.getDom('toolbarbox');
                orgTop = getPosition(toolbarBox).top;
                bakCssText = toolbarBox.style.cssText;
                placeHolder.style.height = toolbarBox.offsetHeight + 'px';
                if(LteIE6){
                    fixIE6FixedPos();
                }
                me.addListener('autoheightchanged', function (t, enabled){
                    if (enabled) {
                        domUtils.on(window, ['scroll','resize'], updateFloating);
                        me.addListener('keydown', defer_updateFloating);
                    } else {
                        domUtils.un(window, ['scroll','resize'], updateFloating);
                        me.removeListener('keydown', defer_updateFloating);
                    }
                });

                me.addListener('beforefullscreenchange', function (t, enabled){
                    if (enabled) {
                        unsetFloating();
                    }
                });
                me.addListener('fullscreenchanged', function (t, enabled){
                    if (!enabled) {
                        updateFloating();
                    }
                });
                me.addListener('sourcemodechanged', function (t, enabled){
                    setTimeout(function (){
                        updateFloating();
                    },0);
                });
            }
        });
	};

///import core
///import plugins/inserthtml.js
///commands 閹绘帒鍙嗘禒锝囩垳
///commandsName  HighlightCode
///commandsTitle  閹绘帒鍙嗘禒锝囩垳
///commandsDialog  dialogs\code\code.html
UE.plugins['highlightcode'] = function() {
    var me = this;
    if(!/highlightcode/i.test(me.options.toolbars.join(''))){
        return;
    }
    me.commands['highlightcode'] = {
        execCommand: function (cmdName, code, syntax) {
            if(code && syntax){
                var pre = document.createElement("pre");
                pre.className = "brush: "+syntax+";toolbar:false;";
                pre.style.display = "";
                pre.appendChild(document.createTextNode(code));
                document.body.appendChild(pre);
                if(me.queryCommandState("highlightcode")){
                    me.execCommand("highlightcode");
                }
                me.execCommand('inserthtml', SyntaxHighlighter.highlight(pre,null,true),true);
                var div = me.document.getElementById(SyntaxHighlighter.getHighlighterDivId());
                div.setAttribute('highlighter',pre.className);
                domUtils.remove(pre);
                adjustHeight();
            }else{
                var range = this.selection.getRange(),
                   start = domUtils.findParentByTagName(range.startContainer, 'table', true),
                   end = domUtils.findParentByTagName(range.endContainer, 'table', true),
                   codediv;
                if(start && end && start === end && start.parentNode.className.indexOf("syntaxhighlighter")>-1){
                    codediv = start.parentNode;
                    //闂囷拷顪呴崚銈嗘焽娑擄拷绗呴崥搴ょ珶閺堝鐥呴張澶庡Ν閻愮櫢绱濆▽鈩冩箒閻ㄥ嫬瀵查幍宥嗗潑閸旂姵鏌婇惃鍕垼缁涳拷
                    if(domUtils.isBody(codediv.parentNode) && !codediv.nextSibling){
                        var p = me.document.createElement('p');
                        p.innerHTML = browser.ie ? '' : '<br/>';
                        me.body.insertBefore(p,codediv);
                        range.setStart(p,0);
                    }else{
                        range.setStartBefore(codediv)
                    }
                    range.setCursor();
                    domUtils.remove(codediv);
                }
            }
        },
        queryCommandState: function(){
            var range = this.selection.getRange(),start,end;
            range.adjustmentBoundary();
                start = domUtils.findParent(range.startContainer,function(node){
                    return node.nodeType == 1 && node.tagName == 'DIV' && domUtils.hasClass(node,'syntaxhighlighter');
                },true);
                end = domUtils.findParent(range.endContainer,function(node){
                    return node.nodeType == 1 && node.tagName == 'DIV' && domUtils.hasClass(node,'syntaxhighlighter');
                },true);
            return start && end && start == end  ? 1 : 0;
        }
    };

    me.addListener('beforeselectionchange afterselectionchange',function(type){
        me.highlight = /^b/.test(type) ? me.queryCommandState('highlightcode') : 0;
    });


    me.addListener("ready",function(){
        //闁灝鍘ら柌宥咁樉閸旂姾娴囨妯瑰瘨閺傚洣娆�
        if(typeof XRegExp == "undefined"){
            utils.loadFile(document,{
                id : "syntaxhighlighter_js",
                src : me.options.highlightJsUrl || me.options.UEDITOR_HOME_URL + "third-party/SyntaxHighlighter/shCore.js",
                tag : "script",
                type : "text/javascript",
                defer : "defer"
            },function(){
                changePre();
            });
        }
        if(!me.document.getElementById("syntaxhighlighter_css")){
            utils.loadFile(me.document,{
                id : "syntaxhighlighter_css",
                tag : "link",
                rel : "stylesheet",
                type : "text/css",
                href : me.options.highlightCssUrl ||me.options.UEDITOR_HOME_URL + "third-party/SyntaxHighlighter/shCoreDefault.css"
            });
        }

    });
    me.addListener("beforegetcontent",function(){
        for(var i=0,di,divs=domUtils.getElementsByTagName(me.body,'div');di=divs[i++];){
            if(di.className == 'container'){
                var pN = di.parentNode;
                while(pN){
                    if(pN.tagName == 'DIV' && /highlighter/.test(pN.id)){
                        break;
                    }
                    pN = pN.parentNode;
                }
                if(!pN){
                    return;
                }
                var pre = me.document.createElement('pre');
                for(var str=[],c=0,ci;ci=di.childNodes[c++];){
                    str.push(ci[browser.ie?'innerText':'textContent']);
                }
                pre.appendChild(me.document.createTextNode(str.join('\n')));
                pre.className = pN.getAttribute('highlighter');
                pN.parentNode.insertBefore(pre,pN);
                domUtils.remove(pN);
            }
        }
    });
    me.addListener("aftergetcontent aftersetcontent",changePre);

    function adjustHeight(){
        setTimeout(function(){
            var div = me.document.getElementById(SyntaxHighlighter.getHighlighterDivId());

            if(div){
                var tds = div.getElementsByTagName('td');
                for(var i=0,li,ri;li=tds[0].childNodes[i];i++){
                    ri = tds[1].firstChild.childNodes[i];
                    //trace:1949
                    if(ri){
                        ri.style.height = li.style.height = ri.offsetHeight + 'px';
                    }
                }

            }
        });

    }
    function changePre(){
        for(var i=0,pr,pres = domUtils.getElementsByTagName(me.document,"pre");pr=pres[i++];){
            if(pr.className.indexOf("brush")>-1){
                
                var pre = document.createElement("pre"),txt,div;
                pre.className = pr.className;
                pre.style.display = "none";
                pre.appendChild(document.createTextNode(pr[browser.ie?'innerText':'textContent']));
                document.body.appendChild(pre);
                try{
                    txt = SyntaxHighlighter.highlight(pre,null,true);
                }catch(e){
                    domUtils.remove(pre);
                    return ;
                }

                div = me.document.createElement("div");
                div.innerHTML = txt;

                div.firstChild.setAttribute('highlighter',pre.className);
                pr.parentNode.insertBefore(div.firstChild,pr);

                domUtils.remove(pre);
                domUtils.remove(pr);
                
                adjustHeight();
            }
        }
    }

    me.addListener('getAllHtml',function(type,html){
        var coreHtml = '';

        for(var i= 0,ci,divs=domUtils.getElementsByTagName(me.document,'div');ci=divs[i++];){
            if(domUtils.hasClass(ci,'syntaxhighlighter')){
                if(!me.document.getElementById('syntaxhighlighter_css')){
                    coreHtml = '<link id="syntaxhighlighter_css" rel="stylesheet" type="text/css" href="' +
                        (me.options.highlightCssUrl ||me.options.UEDITOR_HOME_URL + 'third-party/SyntaxHighlighter/shCoreDefault.css"') + ' ></link>'
                }
                if(!me.window.XRegExp){
                    coreHtml += '<script id="syntaxhighlighter_js"  type="text/javascript" src="' +
                        (me.options.highlightJsUrl || me.options.UEDITOR_HOME_URL + 'third-party/SyntaxHighlighter/shCore.js"') + ' ></script>'+
                        '<script type="text/javascript">window.onload = function(){SyntaxHighlighter.highlight();' +

                        'setTimeout(function(){' +
                            'for(var i=0,di;di=SyntaxHighlighter.highlightContainers[i++];){' +
                            'var tds = di.getElementsByTagName("td");' +
                            'for(var j=0,li,ri;li=tds[0].childNodes[j];j++){' +
                            'ri = tds[1].firstChild.childNodes[j];' +
                            'ri.style.height = li.style.height = ri.offsetHeight + "px";' +
                            '}' +
                        '}},100)}</script>'
                }
                break;
            }
        }
        if(!coreHtml){
            var tmpNode;
            if(tmpNode = me.document.getElementById('syntaxhighlighter_css')){
                domUtils.remove(tmpNode)
            }
            if(tmpNode = me.document.getElementById('syntaxhighlighter_js')){
                domUtils.remove(tmpNode)

            }
        }
        html.html += coreHtml;
    });
    //閸忋劌鐫嗛弮璁圭礉闁插秵鏌婄粻妞剧娑撳顔旀惔锟�
    me.addListener('fullscreenchanged',function(){
        var div = domUtils.getElementsByTagName(me.document,'div');
        for(var j=0,di;di=div[j++];){
            if(/^highlighter/.test(di.id)){
                var tds = di.getElementsByTagName('td');
                for(var i=0,li,ri;li=tds[0].childNodes[i];i++){
                    ri = tds[1].firstChild.childNodes[i];

                    ri.style.height = li.style.height = ri.offsetHeight + 'px';
                }
            }
        }
    });
};

///import core
///commands 鐎规艾鍩楁潻鍥ㄦ姢鐟欏嫬鍨�
///commandsName  Serialize
///commandsTitle  鐎规艾鍩楁潻鍥ㄦ姢鐟欏嫬鍨�
UE.plugins['serialize'] = function () {
    var ie = browser.ie,
        version = browser.version;

    function ptToPx(value){
        return /pt/.test(value) ? value.replace( /([\d.]+)pt/g, function( str ) {
            return  Math.round(parseFloat(str) * 96 / 72) + "px";
        } ) : value;
    }
    var me = this, autoClearEmptyNode = me.options.autoClearEmptyNode,
            EMPTY_TAG = dtd.$empty,
            parseHTML = function () {
                 //楠炲弶甯�a> 閸氬簼绌堕崣妯虹繁缁岀儤鐗搁敍灞肩箽閻ｏ拷/a>  鏉╂瑦鐗遍惃鍕敄閺嶏拷
                var RE_PART = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
                        RE_ATTR = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
                                        EMPTY_ATTR = {checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1},
                                        CDATA_TAG = {script:1,style: 1},
                                        NEED_PARENT_TAG = {
                                            "li": { "$": 'ul', "ul": 1, "ol": 1 },
                                            "dd": { "$": "dl", "dl": 1 },
                                            "dt": { "$": "dl", "dl": 1 },
                                            "option": { "$": "select", "select": 1 },
                                            "td": { "$": "tr", "tr": 1 },
                                            "th": { "$": "tr", "tr": 1 },
                                            "tr": { "$": "tbody", "tbody": 1, "thead": 1, "tfoot": 1, "table": 1 },
                                            "tbody": { "$": "table", 'table':1,"colgroup": 1 },
                                            "thead": { "$": "table", "table": 1 },
                                            "tfoot": { "$": "table", "table": 1 },
                                            "col": { "$": "colgroup","colgroup":1 }
                                        };
                                var NEED_CHILD_TAG = {
                    "table": "td", "tbody": "td", "thead": "td", "tfoot": "td", "tr": "td",
                    "colgroup": "col",
                    "ul": "li", "ol": "li",
                    "dl": "dd",
                    "select": "option"
                };

                function parse( html, callbacks ) {

                    var match,
                            nextIndex = 0,
                            tagName,
                            cdata;
                    RE_PART.exec( "" );
                    while ( (match = RE_PART.exec( html )) ) {

                        var tagIndex = match.index;
                        if ( tagIndex > nextIndex ) {
                            var text = html.slice( nextIndex, tagIndex );
                            if ( cdata ) {
                                cdata.push( text );
                            } else {
                                callbacks.onText( text );
                            }
                        }
                        nextIndex = RE_PART.lastIndex;
                        if ( (tagName = match[1]) ) {
                            tagName = tagName.toLowerCase();
                            if ( cdata && tagName == cdata._tag_name ) {
                                callbacks.onCDATA( cdata.join( '' ) );
                                cdata = null;
                            }
                            if ( !cdata ) {
                                callbacks.onTagClose( tagName );
                                continue;
                            }
                        }
                        if ( cdata ) {
                            cdata.push( match[0] );
                            continue;
                        }
                        if ( (tagName = match[3]) ) {
                            if ( /="/.test( tagName ) ) {
                                continue;
                            }
                            tagName = tagName.toLowerCase();
                            var attrPart = match[4],
                                    attrMatch,
                                    attrMap = {},
                                    selfClosing = attrPart && attrPart.slice( -1 ) == '/';
                            if ( attrPart ) {
                                RE_ATTR.exec( "" );
                                while ( (attrMatch = RE_ATTR.exec( attrPart )) ) {
                                    var attrName = attrMatch[1].toLowerCase(),
                                            attrValue = attrMatch[2] || attrMatch[3] || attrMatch[4] || '';
                                    if ( !attrValue && EMPTY_ATTR[attrName] ) {
                                        attrValue = attrName;
                                    }
                                    if ( attrName == 'style' ) {
                                        if ( ie && version <= 6 ) {
                                            attrValue = attrValue.replace( /(?!;)\s*([\w-]+):/g, function ( m, p1 ) {
                                                return p1.toLowerCase() + ':';
                                            } );
                                        }
                                    }
                                    //濞屸剝婀侀崐鑲╂畱鐏炵偞锟芥稉宥嗗潑閸旓拷
                                    if ( attrValue ) {
                                        attrMap[attrName] = attrValue.replace( /:\s*/g, ':' )
                                    }

                                }
                            }
                            callbacks.onTagOpen( tagName, attrMap, selfClosing );
                            if ( !cdata && CDATA_TAG[tagName] ) {
                                cdata = [];
                                cdata._tag_name = tagName;
                            }
                            continue;
                        }
                        if ( (tagName = match[2]) ) {
                            callbacks.onComment( tagName );
                        }
                    }
                    if ( html.length > nextIndex ) {
                        callbacks.onText( html.slice( nextIndex, html.length ) );
                    }
                }

                return function ( html, forceDtd ) {

                    var fragment = {
                        type: 'fragment',
                        parent: null,
                        children: []
                    };
                    var currentNode = fragment;

                    function addChild( node ) {
                        node.parent = currentNode;
                        currentNode.children.push( node );
                    }

                    function addElement( element, open ) {
                        var node = element;
                        // 闁洤鍩岀紒鎾寸�閸栨牗鐖ｇ粵鍓ф畱閺冭泛锟�
                        if ( NEED_PARENT_TAG[node.tag] ) {
                            // 閼板啳妾绘潻娆戭瀸閹懎鍠岄惃鍕閸婏拷 缂佹挻娼稊瀣閻ㄥ嫭鐖ｇ粵锟�
                            // e.g. <table><tr><td>12312`<tr>`4566
                            while ( NEED_PARENT_TAG[currentNode.tag] && NEED_PARENT_TAG[currentNode.tag][node.tag] ) {
                                currentNode = currentNode.parent;
                            }
                            // 婵″倹鐏夐崜宥勭娑擃亝鐖ｇ粵鎯ф嫲鏉╂瑤閲滈弽鍥╊劮閺勵垰鎮撴稉锟介獓, 缂佹挻娼稊瀣閻ㄥ嫭鐖ｇ粵锟�
                            // e.g. <ul><li>123<li>
                            if ( currentNode.tag == node.tag ) {
                                currentNode = currentNode.parent;
                            }
                            // 閸氭垳绗傜悰銉╃秷閻栬埖鐖ｇ粵锟�
                            while ( NEED_PARENT_TAG[node.tag] ) {
                                if ( NEED_PARENT_TAG[node.tag][currentNode.tag] ) break;
                                node = node.parent = {
                                    type: 'element',
                                    tag: NEED_PARENT_TAG[node.tag]['$'],
                                    attributes: {},
                                    children: [node]
                                };
                            }
                        }
                        if ( forceDtd ) {
                            // 婵″倹鐏夐柆鍥у煂鏉╂瑤閲滈弽鍥╊劮娑撳秷鍏橀弨鎯ф躬閸撳秳绔存稉顏呯垼缁涙儳鍞撮柈顭掔礉閸掓瑧绮ㄩ弶鐔峰娑擄拷閲滈弽鍥╊劮,span閸楁洜瀚径鍕倞
                            while ( dtd[node.tag] && !(currentNode.tag == 'span' ? utils.extend( dtd['strong'], {'a':1,'A':1} ) : (dtd[currentNode.tag] || dtd['div']))[node.tag] ) {
                                if ( tagEnd( currentNode ) ) continue;
                                if ( !currentNode.parent ) break;
                                currentNode = currentNode.parent;
                            }
                        }
                        node.parent = currentNode;
                        currentNode.children.push( node );
                        if ( open ) {
                            currentNode = element;
                        }
                        if ( element.attributes.style ) {
                            element.attributes.style = element.attributes.style.toLowerCase();
                        }
                        return element;
                    }

                    // 缂佹挻娼稉锟介嚋閺嶅洨顒烽惃鍕閸婃瑱绱濋棁锟筋渽閸掋倖鏌囨稉锟界瑓鐎瑰啯妲搁崥锔惧繁鐏忔垵鐡欓弽鍥╊劮
                    // e.g. <table></table>
                    function tagEnd( node ) {
                        var needTag;
                        if ( !node.children.length && (needTag = NEED_CHILD_TAG[node.tag]) ) {
                            addElement( {
                                type: 'element',
                                tag: needTag,
                                attributes: {},
                                children: []
                            }, true );
                            return true;
                        }
                        return false;
                    }

                    parse( html, {
                        onText: function ( text ) {

                            while ( !(dtd[currentNode.tag] || dtd['div'])['#'] ) {
                                //閼哄倻鍋ｆ稊瀣？閻ㄥ嫮鈹栭惂鎴掔瑝閼宠棄缍嬫担婊嗗Ν閻愮懓顦甸悶锟�
//                                if(/^[ \t\r\n]+$/.test( text )){
//                                    return;
//                                }
                                if ( tagEnd( currentNode ) ) continue;
                                currentNode = currentNode.parent;
                            }
                            //if(/^[ \t\n\r]*/.test(text))
                                addChild( {
                                    type: 'text',
                                    data: text
                                } );

                        },
                        onComment: function ( text ) {
                            addChild( {
                                type: 'comment',
                                data: text
                            } );
                        },
                        onCDATA: function ( text ) {
                            while ( !(dtd[currentNode.tag] || dtd['div'])['#'] ) {
                                if ( tagEnd( currentNode ) ) continue;
                                currentNode = currentNode.parent;
                            }
                            addChild( {
                                type: 'cdata',
                                data: text
                            } );
                        },
                        onTagOpen: function ( tag, attrs, closed ) {
                            closed = closed || EMPTY_TAG[tag] ;
                            addElement( {
                                type: 'element',
                                tag: tag,
                                attributes: attrs,
                                closed: closed,
                                children: []
                            }, !closed );
                        },
                        onTagClose: function ( tag ) {
                            var node = currentNode;
                            // 閸氭垳绗傞幍鎯у爱闁板秶娈戦弽鍥╊劮, 鏉╂瑩鍣锋稉宥堬拷閾忔吀td閻ㄥ嫭鍎忛崘鍨Ц閸ョ姳璐焧agOpen閻ㄥ嫭妞傞崐娆忓嚒缂佸繐顦甸悶鍡氱箖娴滐拷 鏉╂瑩鍣锋稉宥勭窗闁洤鍩�
                            while ( node && tag != node.tag ) {
                                node = node.parent;
                            }
                            if ( node ) {
                                // 閸忔娊妫存稉顓㈡？閻ㄥ嫭鐖ｇ粵锟�
                                for ( var tnode = currentNode; tnode !== node.parent; tnode = tnode.parent ) {
                                    tagEnd( tnode );
                                }
                                //閸樼粯甯�粚铏规閻ㄥ埇nline閼哄倻鍋�
                                //閸掑棝銆夐敍宀勬晪閻愰�绻氶悾锟�
                                //|| dtd.$removeEmptyBlock[node.tag])
//                                if ( !node.children.length && dtd.$removeEmpty[node.tag] && !node.attributes.anchorname && node.attributes['class'] != 'pagebreak' && node.tag != 'a') {
//
//                                    node.parent.children.pop();
//                                }
                                currentNode = node.parent;
                            } else {
                                // 婵″倹鐏夊▽鈩冩箒閹垫儳鍩屽锟筋瀶閺嶅洨顒� 閸掓瑥鍨卞鐑樻煀閺嶅洨顒�
                                // eg. </div> => <div></div>
                                //闁藉牆顕憴鍡楃潌缂冩垹鐝痚mbed娴兼氨绮扮紒鎾存将缁楋讣绱濇潻娆撳櫡閻楄鐣╂径鍕倞娑擄拷绗�
                                if ( !(dtd.$removeEmpty[tag] || dtd.$removeEmptyBlock[tag] || tag == 'embed') ) {
                                    node = {
                                        type: 'element',
                                        tag: tag,
                                        attributes: {},
                                        children: []
                                    };
                                    addElement( node, true );
                                    tagEnd( node );
                                    currentNode = node.parent;
                                }


                            }
                        }
                    } );
                    // 婢跺嫮鎮婃潻娆戭瀸閹懎鍠� 閸欘亝婀佸锟筋瀶閺嶅洨顒峰▽鈩冩箒缂佹挻娼弽鍥╊劮閻ㄥ嫭鍎忛崘锟�闂囷拷顪呴崗鎶芥４瀵拷顬婇弽鍥╊劮
                    // eg. <table>
                    while ( currentNode !== fragment ) {
                        tagEnd( currentNode );
                        currentNode = currentNode.parent;
                    }
                    return fragment;
                };
            }();
    var unhtml1 = function () {
        var map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

        function rep( m ) {
            return map[m];
        }

        return function ( str ) {
            str = str + '';
            return str ? str.replace( /[<>"']/g, rep ) : '';
        };
    }();
    var toHTML = function () {
        function printChildren( node, pasteplain ) {
            var children = node.children;

            var buff = [];
            for ( var i = 0,ci; ci = children[i]; i++ ) {

                buff.push( toHTML( ci, pasteplain ) );
            }
            return buff.join( '' );
        }

        function printAttrs( attrs ) {
            var buff = [];
            for ( var k in attrs ) {
                var value = attrs[k];
                
                if(k == 'style'){

                    //pt==>px
                    value = ptToPx(value);
                    //color rgb ==> hex
                    if(/rgba?\s*\([^)]*\)/.test(value)){
                        value = value.replace( /rgba?\s*\(([^)]*)\)/g, function( str ) {
                            return utils.fixColor('color',str);
                        } )
                    }
                    //鏉╁洦鎶ら幒澶嬪閺堝娈憌hite-space,閸︺劎鍑介弬鍥ㄦ拱缂傛牞绶崳銊╁櫡缁鍒涙潻鍥ㄦ降閻ㄥ嫬鍞寸�鐧哥礉閸掔櫛hrome娑擃厺绱扮敮锔芥箒span閸滃瘍hite-space鐏炵偞锟介敍灞筋嚤閼锋潙鍤悳棰佺瑝閼宠姤濮岀悰宀�畱閹懎鍠�
                    //閹碉拷浜掗崷銊ㄧ箹闁插苯骞撻幒澶庣箹娑擃亜鐫橀幀锟�
                    attrs[k] = utils.optCss(value.replace(/windowtext/g,'#000'))
                                .replace(/white-space[^;]+;/g,'');

                }

                buff.push( k + '="' + unhtml1( attrs[k] ) + '"' );
            }
            return buff.join( ' ' )
        }

        function printData( node, notTrans ) {
            //trace:1399 鏉堟挸鍙唄tml娴狅絿鐖滈弮鍓佲敄閺嶈壈娴嗛幑銏″灇娑擄拷nbsp;
            //node.data.replace(/&nbsp;/g,' ') 闁藉牆顕畃re娑擃厾娈戠粚鐑樼壐閸滃苯鍤悳鎵畱&nbsp;閹跺﹣绮禒顒�躬瀵版鍩岄惃鍒猼ml娴狅絿鐖滄稉顓㈠厴鏉烆剚宕查幋鎰礋缁岀儤鐗搁敍灞艰礋娴滃棗婀┃鎰垳濡�绱℃稉瀣▔缁�桨璐熺粚鐑樼壐閼板奔绗夐弰锟絥bsp;
            return notTrans ? node.data.replace(/&nbsp;/g,' ') : unhtml1( node.data ).replace(/ /g,'&nbsp;');
        }

        //缁绢垱鏋冮張顒伳佸蹇庣瑓閺嶅洨顒锋潪顒佸床
        var transHtml = {
            'div':'p',
            'li':'p',
            'tr':'p',
            'br':'br',
            'p':'p'//trace:1398 绾版澘鍩宲閺嶅洨顒烽懛顏勭箒鐟曚礁濮炴稉濡�閸氾箑鍨痶ransHtml[tag]閺勭椃ndefined

        };

        function printElement( node, pasteplain ) {
            if ( node.type == 'element' && !node.children.length && (dtd.$removeEmpty[node.tag]) && node.tag != 'a' && utils.isEmptyObject(node.attributes) && autoClearEmptyNode) {// 闁挎氨鍋ｆ穱婵堟殌
                return html;
            }
            var tag = node.tag;
            if ( pasteplain && tag == 'td' ) {
                if ( !html ) html = '';
                html += printChildren( node, pasteplain ) + '&nbsp;&nbsp;&nbsp;';
            } else {
                var attrs = printAttrs( node.attributes );
                var html = '<' + (pasteplain && transHtml[tag] ? transHtml[tag] : tag) + (attrs ? ' ' + attrs : '') + (EMPTY_TAG[tag] ? ' />' : '>');
                if ( !EMPTY_TAG[tag] ) {
                    //trace:1627 ,2070
                    //p閺嶅洨顒锋稉铏光敄閿涘苯鐨㈡稉宥呭窗娴ｅ秷绻栭柌灞藉窗娴ｅ秶顑佹稉宥堟崳娴ｆ粎鏁ら敍宀�暏&nbsp;閹存牞锟絙r
                    if( tag == 'p' && !node.children.length){
                        html += browser.ie ? '&nbsp;' : '<br/>';
                    }
                    html += printChildren( node, pasteplain );
                    html += '</' + (pasteplain && transHtml[tag] ? transHtml[tag] : tag) + '>';
                }
            }

            return html;
        }

        return function ( node, pasteplain ) {
            if ( node.type == 'fragment' ) {
                return printChildren( node, pasteplain );
            } else if ( node.type == 'element' ) {
                return printElement( node, pasteplain );
            } else if ( node.type == 'text' || node.type == 'cdata' ) {
                return printData( node, dtd.$notTransContent[node.parent.tag] );
            } else if ( node.type == 'comment' ) {
                return '<!--' + node.data + '-->';
            }
            return '';
        };
    }();

    var NODE_NAME_MAP = {
        'text': '#text',
        'comment': '#comment',
        'cdata': '#cdata-section',
        'fragment': '#document-fragment'
    };


    //閸愭瑥鍙嗙紓鏍帆閸ｃ劍妞傞敍宀冪殶閻㈩煉绱濇潻娑滎攽鏉烆剚宕查幙宥勭稊
    function transNode( node, word_img_flag ) {

        var sizeMap = [0, 10, 12, 16, 18, 24, 32, 48],
                attr,
                indexOf = utils.indexOf;
        switch ( node.tag ) {
            case 'script':
                node.tag = 'div';
                node.attributes._ue_org_tagName = 'script';
                node.attributes._ue_div_script = 1;
                node.attributes._ue_script_data = node.children[0] ? encodeURIComponent(node.children[0].data)  : '';
                node.attributes._ue_custom_node_ = 1;
                node.children = [];
                break;
            case 'style':
                node.tag = 'div';
                node.attributes._ue_div_style = 1;
                node.attributes._ue_org_tagName = 'style';
                node.attributes._ue_style_data = node.children[0] ? encodeURIComponent(node.children[0].data)  : '';
                node.attributes._ue_custom_node_ = 1;
                node.children = [];
                break;
            case 'img':
                //todo base64閺嗗倹妞傞崢缁樺竴閿涘苯鎮楁潏鐟颁粵鏉╂粎鈻奸崶鍓у娑撳﹣绱堕崥搴礉楠炲弶甯�潻娆庨嚋
                if(node.attributes.src && /^data:/.test(node.attributes.src)){
                    return {
                        type : 'fragment',
                        children:[]
                    }
                }
                if ( node.attributes.src && /^(?:file)/.test( node.attributes.src ) ) {
                    if ( !/(gif|bmp|png|jpg|jpeg)$/.test( node.attributes.src ) ) {
                        return {
                            type : 'fragment',
                            children:[]
                        }
                    }
                    node.attributes.word_img = node.attributes.src;
                    node.attributes.src = me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif';
                    var flag = parseInt(node.attributes.width)<128||parseInt(node.attributes.height)<43;
                    node.attributes.style="background:url(" + (flag? me.options.themePath+me.options.theme +"/images/word.gif":me.options.langPath+me.options.lang + "/images/localimage.png")+") no-repeat center center;border:1px solid #ddd";
                    //node.attributes.style = 'width:395px;height:173px;';
                    word_img_flag && (word_img_flag.flag = 1);
                }
                if(browser.ie && browser.version < 7 )
                    node.attributes.orgSrc = node.attributes.src;
                node.attributes.data_ue_src = node.attributes.data_ue_src || node.attributes.src;
                break;
            case 'li':
                var child = node.children[0];

                if ( !child || child.type != 'element' || child.tag != 'p' && dtd.p[child.tag] ) {
                    var tmpPNode = {
                        type: 'element',
                        tag: 'p',
                        attributes: {},

                        parent : node
                    };
                    tmpPNode.children = child ? node.children :[
                            browser.ie ? {
                                type:'text',
                                data:domUtils.fillChar,
                                parent : tmpPNode

                            }:
                            {
                                type : 'element',
                                tag : 'br',
                                attributes:{},
                                closed: true,
                                children: [],
                                parent : tmpPNode
                            }
                    ];
                    node.children =   [tmpPNode];
                }
                break;
            case 'table':
            case 'td':
                optStyle( node );
                break;
            case 'a'://闁挎氨鍋ｉ敍瀹�=>img
                if ( node.attributes['anchorname'] ) {
                    node.tag = 'img';
                    node.attributes = {
                        'class' : 'anchorclass',
                        'anchorname':node.attributes['name']
                    };
                    node.closed = 1;
                }
                node.attributes.href && (node.attributes.data_ue_src = node.attributes.href);
                break;
            case 'b':
                node.tag = node.name = 'strong';
                break;
            case 'i':
                node.tag = node.name = 'em';
                break;
            case 'u':
                node.tag = node.name = 'span';
                node.attributes.style = (node.attributes.style || '') + ';text-decoration:underline;';
                break;
            case 's':
            case 'del':
                node.tag = node.name = 'span';
                node.attributes.style = (node.attributes.style || '') + ';text-decoration:line-through;';
                if ( node.children.length == 1 ) {
                    child = node.children[0];
                    if ( child.tag == node.tag ) {
                        node.attributes.style += ";" + child.attributes.style;
                        node.children = child.children;

                    }
                }
                break;
            case 'span':

                var style = node.attributes.style;
                if ( style ) {
                    if ( !node.attributes.style  || browser.webkit && style == "white-space:nowrap;") {
                        delete node.attributes.style;
                    }
                }

                //闁藉牆顕甪f3.6span閻ㄥ嫭鐗卞蹇庣瑝閼宠姤顒滅涵顔炬埛閹佃法娈戞穱顔碱樉
                
                if(browser.gecko && browser.version <= 10902 && node.parent){
                    var parent = node.parent;
                    if(parent.tag == 'span' && parent.attributes && parent.attributes.style){
                        node.attributes.style = parent.attributes.style + ';' + node.attributes.style;
                    }
                }
                if ( utils.isEmptyObject( node.attributes ) && autoClearEmptyNode) {
                    node.type = 'fragment'
                }
                break;
            case 'font':
                node.tag = node.name = 'span';
                attr = node.attributes;
                node.attributes = {
                    'style': (attr.size ? 'font-size:' + (sizeMap[attr.size] || 12) + 'px' : '')
                    + ';' + (attr.color ? 'color:'+ attr.color : '')
                    + ';' + (attr.face ? 'font-family:'+ attr.face : '')
                    + ';' + (attr.style||'')
                };

                while(node.parent.tag == node.tag && node.parent.children.length == 1){
                    node.attributes.style && (node.parent.attributes.style ? (node.parent.attributes.style += ";" + node.attributes.style) : (node.parent.attributes.style = node.attributes.style));
                    node.parent.children = node.children;
                    node = node.parent;

                }
                break;
            case 'p':
                if ( node.attributes.align ) {
                    node.attributes.style = (node.attributes.style || '') + ';text-align:' +
                            node.attributes.align + ';';
                    delete node.attributes.align;
                }

        }
        return node;
    }

    function optStyle( node ) {
        if ( ie && node.attributes.style ) {
            var style = node.attributes.style;
            node.attributes.style = style.replace(/;\s*/g,';');
            node.attributes.style = node.attributes.style.replace( /^\s*|\s*$/, '' )
        }
    }
    //getContent鐠嬪啰鏁ゆ潪顒佸床
    function transOutNode( node ) {

        switch ( node.tag ) {
            case 'div' :
                if(node.attributes._ue_div_script){
                    node.tag = 'script';
                    node.children = [{type:'cdata',data:node.attributes._ue_script_data?decodeURIComponent(node.attributes._ue_script_data):'',parent:node}];
                    delete node.attributes._ue_div_script;
                    delete node.attributes._ue_script_data;
                    delete node.attributes._ue_custom_node_;
                    delete node.attributes._ue_org_tagName;

                }
                if(node.attributes._ue_div_style){
                    node.tag = 'style';
                    node.children = [{type:'cdata',data:node.attributes._ue_style_data?decodeURIComponent(node.attributes._ue_style_data):'',parent:node}];
                    delete node.attributes._ue_div_style;
                    delete node.attributes._ue_style_data;
                    delete node.attributes._ue_custom_node_;
                    delete node.attributes._ue_org_tagName;

                }
                break;
            case 'table':
                !node.attributes.style && delete node.attributes.style;
                if ( ie && node.attributes.style ) {

                    optStyle( node );
                }
                if(node.attributes['class'] == 'noBorderTable'){
                    delete node.attributes['class'];
                }
                break;
            case 'td':
            case 'th':
                if ( /display\s*:\s*none/i.test( node.attributes.style ) ) {
                    return {
                        type: 'fragment',
                        children: []
                    };
                }
                if ( ie && !node.children.length ) {
                    var txtNode = {
                        type: 'text',
                        data:domUtils.fillChar,
                        parent : node
                    };
                    node.children[0] = txtNode;
                }
                if ( ie && node.attributes.style ) {
                    optStyle( node );

                }
                if(node.attributes['class'] == 'selectTdClass'){
                    delete node.attributes['class']
                }
                break;
            case 'img'://闁挎氨鍋ｉ敍瀹╩g==>a
                if ( node.attributes.anchorname ) {
                    node.tag = 'a';
                    node.attributes = {
                        name : node.attributes.anchorname,
                        anchorname : 1
                    };
                    node.closed = null;
                }else{
                    if(node.attributes.data_ue_src){
                        node.attributes.src = node.attributes.data_ue_src;
                        delete node.attributes.data_ue_src;
                    }
                }
                break;

            case 'a':
                if(node.attributes.data_ue_src){
                    node.attributes.href = node.attributes.data_ue_src;
                    delete node.attributes.data_ue_src;
                }
        }

        return node;
    }

    function childrenAccept( node, visit, ctx ) {

        if ( !node.children || !node.children.length ) {
            return node;
        }
        var children = node.children;
        for ( var i = 0; i < children.length; i++ ) {
            var newNode = visit( children[i], ctx );
            if ( newNode.type == 'fragment' ) {
                var args = [i, 1];
                args.push.apply( args, newNode.children );
                children.splice.apply( children, args );
                //閼哄倻鍋ｆ稉铏光敄閻ㄥ嫬姘ㄩ獮鍙夊竴閿涘奔绗夐悞璺烘倵鏉堝湱娈戠悰銉ュ弿閹垮秳缍旀导姘潑閸旂姴顧嬫担娆戞畱閼哄倻鍋�
                if ( !children.length ) {
                    node = {
                        type: 'fragment',
                        children: []
                    }
                }
                i --;
            } else {
                children[i] = newNode;
            }
        }
        return node;
    }

    function Serialize( rules ) {
        this.rules = rules;
    }


    Serialize.prototype = {
        // NOTE: selector閻╊喖澧犻崣顏呮暜閹镐辜agName
        rules: null,
        // NOTE: node韫囧懘銆忛弰鐥渞agment
        filter: function ( node, rules, modify ) {
            rules = rules || this.rules;
            var whiteList = rules && rules.whiteList;
            var blackList = rules && rules.blackList;

            function visitNode( node, parent ) {
                node.name = node.type == 'element' ?
                        node.tag : NODE_NAME_MAP[node.type];
                if ( parent == null ) {
                    return childrenAccept( node, visitNode, node );
                }

                if ( blackList && (blackList[node.name]|| (node.attributes && node.attributes._ue_org_tagName && blackList[node.attributes._ue_org_tagName]))) {
                    modify && (modify.flag = 1);
                    return {
                        type: 'fragment',
                        children: []
                    };
                }
                if ( whiteList ) {
                    if ( node.type == 'element' ) {
                        if ( parent.type == 'fragment' ? whiteList[node.name] : whiteList[node.name] && whiteList[parent.name][node.name] ) {

                            var props;
                            if ( (props = whiteList[node.name].$) ) {
                                var oldAttrs = node.attributes;
                                var newAttrs = {};
                                for ( var k in props ) {
                                    if ( oldAttrs[k] ) {
                                        newAttrs[k] = oldAttrs[k];
                                    }
                                }
                                node.attributes = newAttrs;
                            }


                        } else {
                            modify && (modify.flag = 1);
                            node.type = 'fragment';
                            // NOTE: 鏉╂瑩鍣风粻妤佹Ц娑擄拷閲渉ack
                            node.name = parent.name;
                        }
                    } else {
                        // NOTE: 閺傚洦婀版妯款吇閸忎浇顔�
                    }
                }
                if ( blackList || whiteList ) {
                    childrenAccept( node, visitNode, node );
                }
                return node;
            }

            return visitNode( node, null );
        },
        transformInput: function ( node, word_img_flag ) {

            function visitNode( node ) {
                node = transNode( node, word_img_flag );

                node = childrenAccept( node, visitNode, node );

                if ( me.options.pageBreakTag && node.type == 'text' && node.data.replace( /\s/g, '' ) == me.options.pageBreakTag ) {

                    node.type = 'element';
                    node.name = node.tag = 'hr';

                    delete node.data;
                    node.attributes = {
                        'class' : 'pagebreak',
                        noshade:"noshade",
                        size:"5",
                        'unselectable' : 'on',
                        'style' : 'moz-user-select:none;-khtml-user-select: none;'
                    };

                    node.children = [];

                }
                //閸樼粯甯�径姘稇閻ㄥ嫮鈹栭弽鐓庢嫲閹广垼顢�
                if(node.type == 'text' && !dtd.$notTransContent[node.parent.tag]){
                    node.data = node.data.replace(/[\r\t\n]*/g,'')//.replace(/[ ]*$/g,'')
                }
                return node;
            }

            return visitNode( node );
        },
        transformOutput: function ( node ) {
            function visitNode( node ) {

                if ( node.tag == 'hr' && node.attributes['class'] == 'pagebreak' ) {
                    delete node.tag;
                    node.type = 'text';
                    node.data = me.options.pageBreakTag;
                    delete node.children;

                }
                node = transOutNode( node );
                node = childrenAccept( node, visitNode, node );
                return node;
            }

            return visitNode( node );
        },
        toHTML: toHTML,
        parseHTML: parseHTML,
        word: UE.filterWord
    };
    me.serialize = new Serialize( me.options.serialize || {});
    UE.serialize = new Serialize( {} );
};

///import core
///import plugins/inserthtml.js
///commands 鐟欏棝顣�
///commandsName InsertVideo
///commandsTitle  閹绘帒鍙嗙憴鍡涱暥
///commandsDialog  dialogs\video\video.html
UE.plugins['video'] = function (){
    var me =this,
        div;

    /**
     * 閸掓稑缂撻幓鎺戝弳鐟欏棝顣剁�妤冾儊缁愶拷
     * @param url 鐟欏棝顣堕崷鏉挎絻
     * @param width 鐟欏棝顣剁�钘夊
     * @param height 鐟欏棝顣舵妯哄
     * @param align 鐟欏棝顣剁�褰掔秷
     * @param toEmbed 閺勵垰鎯佹禒顨僱ash娴狅絾娴涢弰鍓с仛
     * @param addParagraph  閺勵垰鎯侀棁锟筋渽濞ｈ濮濸 閺嶅洨顒�
     */
    function creatInsertStr(url,width,height,align,toEmbed,addParagraph){
        return  !toEmbed ?
                (addParagraph? ('<p '+ (align !="none" ? ( align == "center"? ' style="text-align:center;" ':' style="float:"'+ align ) : '') + '>'): '') +
                '<img align="'+align+'" width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-video"' +
                ' src="'+me.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+me.options.UEDITOR_HOME_URL+'themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;" />' +
                (addParagraph?'</p>':'')
                :
                '<embed type="application/x-shockwave-flash" class="edui-faked-video" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '" align="' + align + '"' +
                ( align !="none" ? ' style= "'+ ( align == "center"? "display:block;":" float: "+ align )  + '"' :'' ) +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(img2embed){
        var tmpdiv,
            nodes =domUtils.getElementsByTagName(me.document, !img2embed ? "embed" : "img");
        for(var i=0,node;node = nodes[i++];){
            if(node.className!="edui-faked-video"){
                continue;
            }
            tmpdiv = me.document.createElement("div");
            //閸忓牏婀協loat閸︺劎婀卆lign,濞搭喖濮╅張澶屾畱閺勵垱妞傞崐娆愭Ц閸︹暍loat娑撳﹤鐣炬稊澶屾畱
            var align = node.style.cssFloat;
            tmpdiv.innerHTML = creatInsertStr(img2embed ? node.getAttribute("_url"):node.getAttribute("src"),node.width,node.height,align || node.getAttribute("align"),img2embed);
            node.parentNode.replaceChild(tmpdiv.firstChild,node);
        }
    }
    me.addListener("beforegetcontent",function(){
        switchImgAndEmbed(true);
    });
    me.addListener('aftersetcontent',function(){
        switchImgAndEmbed(false);
    });
    me.addListener('aftergetcontent',function(cmdName){
        if(cmdName == 'aftergetcontent' && me.queryCommandState('source')){
            return;
        }
        switchImgAndEmbed(false);
    });

    me.commands["insertvideo"] = {
        execCommand: function (cmd, videoObjs){
            videoObjs = utils.isArray(videoObjs)?videoObjs:[videoObjs];
            var html = [];
            for(var i=0,vi,len = videoObjs.length;i<len;i++){
                 vi = videoObjs[i];
                 html.push(creatInsertStr( vi.url, vi.width || 420,  vi.height || 280, vi.align||"none",false,true));
            }
            me.execCommand("inserthtml",html.join(""));
        },
        queryCommandState : function(){
            var img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-video");
            return this.highlight ? -1 :(flag?1:0);
        }
    };
};
///import core
///commands 鐞涖劍鐗�
///commandsName  InsertTable,DeleteTable,InsertParagraphBeforeTable,InsertRow,DeleteRow,InsertCol,DeleteCol,MergeCells,MergeRight,MergeDown,SplittoCells,SplittoRows,SplittoCols
///commandsTitle  鐞涖劍鐗�閸掔娀娅庣悰銊︾壐,鐞涖劍鐗搁崜宥嗗絻鐞涳拷閸撳秵褰冮崗銉攽,閸掔娀娅庣悰锟介崜宥嗗絻閸忋儱鍨�閸掔娀娅庨崚锟介崥鍫濊嫙婢舵矮閲滈崡鏇炲帗閺嶏拷閸欏啿鎮庨獮璺哄礋閸忓啯鐗�娑撳鎮庨獮璺哄礋閸忓啯鐗�鐎瑰苯鍙忛幏鍡楀瀻閸楁洖鍘撻弽锟介幏鍡楀瀻閹存劘顢�閹峰棗鍨庨幋鎰灙
///commandsDialog  dialogs\table\table.html
/**
 * Created by .
 * User: taoqili
 * Date: 11-5-5
 * Time: 娑撳宕�:06
 * To change this template use File | Settings | File Templates.
 */
/**
 * table閹垮秳缍旈幓鎺嶆
 */
UE.plugins['table'] = function () {
    var me = this,
            keys = domUtils.keys,
            clearSelectedTd = domUtils.clearSelectedArr;
    //濡楀棝锟介弮鍓佹暏閸掓壆娈戦崙鐘遍嚋閸忋劌鐪崣姗�櫤
    var anchorTd,
            tableOpt,
            _isEmpty = domUtils.isEmptyNode;

    me.ready(function(){
        utils.cssRule('table',
            //闁鑵戦惃鍓嘾娑撳﹦娈戦弽宄扮础
            '.selectTdClass{background-color:#3399FF !important;}' +
                'table.noBorderTable td{border:1px dashed #ddd !important}' +
                //閹绘帒鍙嗛惃鍕�閺嶈偐娈戞妯款吇閺嶅嘲绱�
                'table{clear:both;margin-bottom:10px;border-collapse:collapse;word-break:break-all;}',me.document);
    });

    function getIndex( cell ) {
        var cells = cell.parentNode.cells;
        for ( var i = 0, ci; ci = cells[i]; i++ ) {
            if ( ci === cell ) {
                return i;
            }
        }
    }

    function deleteTable( table, range ) {
        var p = table.ownerDocument.createElement( 'p' );
        domUtils.fillNode( me.document, p );
        var pN = table.parentNode;
        if ( pN && pN.getAttribute( 'dropdrag' ) ) {
            table = pN;
        }
        table.parentNode.insertBefore( p, table );
        domUtils.remove( table );
        range.setStart( p, 0 ).setCursor();
    }

    /**
     * 閸掋倖鏌囪ぐ鎾冲閸楁洖鍘撻弽鍏兼Ц閸氾箑顦垫禍搴ㄦ閽樺繒濮搁幀锟�
     * @param cell 瀵板懎鍨介弬顓犳畱閸楁洖鍘撻弽锟�
     * @return {Boolean} 闂呮劘妫岄弮鎯扮箲閸ョ�rue閿涘苯鎯侀崚娆掔箲閸ョ�alse
     */
    function _isHide( cell ) {
        return cell.style.display == "none";
    }

    function getCount( arr ) {
        var count = 0;
        for ( var i = 0, ti; ti = arr[i++]; ) {
            if ( !_isHide( ti ) ) {
                count++;
            }

        }
        return count;
    }

    me.currentSelectedArr = [];
    me.addListener( 'mousedown', _mouseDownEvent );
    me.addListener( 'keydown', function ( type, evt ) {
        var keyCode = evt.keyCode || evt.which;
        if ( !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey ) {
            clearSelectedTd( me.currentSelectedArr );
        }
    } );

    me.addListener( 'mouseup', function () {

        anchorTd = null;
        me.removeListener( 'mouseover', _mouseDownEvent );
        var td = me.currentSelectedArr[0];
        if ( td ) {
            me.document.body.style.webkitUserSelect = '';
            var range = new dom.Range( me.document );
            if ( _isEmpty( td ) ) {
                range.setStart( me.currentSelectedArr[0], 0 ).setCursor();
            } else {
                range.selectNodeContents( me.currentSelectedArr[0] ).select();
            }

        } else {

            //濞村繗顬囬崳銊ㄥ厴娴犲窐able婢舵牞绔熼柅澶婂煂闁插矁绔熺�鑹板毀currentSelectedArr娑撹櫣鈹栭敍灞剧閹哄缍嬮崜宥夛拷閸栧搫娲栭崚浼达拷閸栬櫣娈戦張锟界磻婵拷

            var range = me.selection.getRange().shrinkBoundary();

            if ( !range.collapsed ) {
                var start = domUtils.findParentByTagName( range.startContainer, 'td', true ),
                        end = domUtils.findParentByTagName( range.endContainer, 'td', true );
                //閸︹暟able闁插矁绔熼惃鍕瑝閼宠姤绔婚梽锟�
                if ( start && !end || !start && end || start && end && start !== end ) {
                    range.collapse( true ).select( true );
                }
            }


        }

    } );

    function reset() {
        me.currentSelectedArr = [];
        anchorTd = null;

    }

    /**
     * 閹绘帒鍙嗙悰銊︾壐
     * @param numRows 鐞涘本鏆�
     * @param numCols 閸掓鏆�
     * @param height 閸掓鏆�
     * @param width 閸掓鏆�
     * @param heightUnit 閸掓鏆�
     * @param widthUnit 閸掓鏆�
     * @param bgColor 鐞涖劍鐗搁懗灞炬珯
     * @param border 鏉堣顢嬫径褍鐨�
     * @param borderColor 鏉堣顢嬫０婊嗗
     * @param cellSpacing 閸楁洖鍘撻弽濂告？鐠猴拷
     * @param cellPadding 閸楁洖鍘撻弽鑹扮珶鐠猴拷
     */
    me.commands['inserttable'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || domUtils.findParentByTagName( range.endContainer, 'table', true )
                    || me.currentSelectedArr.length > 0 ? -1 : 0;
        },
        execCommand:function ( cmdName, opt ) {
            opt = opt || {numRows:5, numCols:5,border:1};
            var html = ['<table ' + (opt.border == "0"  ? ' class="noBorderTable"' : '') + ' _innerCreateTable = "true" '];
            if ( opt.cellSpacing && opt.cellSpacing != '0' || opt.cellPadding && opt.cellPadding != '0' ) {
                html.push( ' style="border-collapse:separate;" ' );
            }
            opt.cellSpacing && opt.cellSpacing != '0' && html.push( ' cellSpacing="' + opt.cellSpacing + '" ' );
            opt.cellPadding && opt.cellPadding != '0' && html.push( ' cellPadding="' + opt.cellPadding + '" ' );
            html.push( ' width="' + (opt.width || 100) + (typeof opt.widthUnit == "undefined" ? '%' : opt.widthUnit) + '" ' );
            opt.height && html.push( ' height="' + opt.height + (typeof opt.heightUnit == "undefined" ? '%' : opt.heightUnit) + '" ' );
            opt.align && (html.push( ' align="' + opt.align + '" ' ));
            html.push( ' border="' + (opt.border || 0) + '" borderColor="' + (opt.borderColor || '#000000') + '"' );
            opt.borderType == "1" && html.push( ' borderType="1" ' );
            opt.bgColor && html.push( ' bgColor="' + opt.bgColor + '"' );
            html.push( ' ><tbody>' );
            opt.width = Math.floor( (opt.width || '100') / opt.numCols );
            for ( var i = 0; i < opt.numRows; i++ ) {
                html.push( '<tr>' );
                for ( var j = 0; j < opt.numCols; j++ ) {
                    html.push( '<td style="width:' + opt.width + (typeof opt.widthUnit == "undefined" ? '%' : opt.widthUnit) + ';'
                            + (opt.borderType == '1' ? 'border:' + opt.border + 'px solid ' + (opt.borderColor || '#000000') : '')
                            + '">'
                            + (browser.ie ? domUtils.fillChar : '<br/>') + '</td>' );
                }
                html.push( '</tr>' );
            }
            me.execCommand( 'insertHtml', html.join( '' ) + '</tbody></table>' );
            reset();
            //婵″倹鐏夌悰銊︾壐閻ㄥ垷lign娑撳秵妲告妯款吇閿涘苯鐨㈡稉宥呭窗娴ｏ拷缂佹瑥鎮楁潏鍦畱block閸忓啰绀岀拋鍓х枂clear:both
            if ( opt.align ) {
                var range = me.selection.getRange(),
                        bk = range.createBookmark(),
                        start = range.startContainer;
                while ( start && !domUtils.isBody( start ) ) {
                    if ( domUtils.isBlockElm( start ) ) {
                        start.style.clear = 'both';
                        range.moveToBookmark( bk ).select();
                        break;
                    }
                    start = start.parentNode;
                }
            }

        }
    };
    me.commands['edittable'] = {
        queryCommandState:function () {
            var range = this.selection.getRange();
            if ( this.highlight ) {
                return -1;
            }
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        execCommand:function ( cmdName, opt ) {
            var start = me.selection.getStart(),
                    table = domUtils.findParentByTagName( start, 'table', true );
            if ( table ) {
                table.style.cssText = table.style.cssText.replace( /border[^;]+/gi, '' );
                table.style.borderCollapse = opt.cellSpacing && opt.cellSpacing != '0' || opt.cellPadding && opt.cellPadding != '0' ? 'separate' : 'collapse';
                opt.cellSpacing && opt.cellSpacing != '0' ? table.setAttribute( 'cellSpacing', opt.cellSpacing ) : table.removeAttribute( 'cellSpacing' );
                opt.cellPadding && opt.cellPadding != '0' ? table.setAttribute( 'cellPadding', opt.cellPadding ) : table.removeAttribute( 'cellPadding' );
                opt.height && table.setAttribute( 'height', opt.height + opt.heightUnit );
                opt.align && table.setAttribute( 'align', opt.align );
                opt.width && table.setAttribute( 'width', opt.width + opt.widthUnit );
                if(opt.bgColor){
                    table.setAttribute( 'bgColor', opt.bgColor );
                }else{
                    domUtils.removeAttributes(table,["bgColor"]);
                }
                opt.borderColor && table.setAttribute( 'borderColor', opt.borderColor );
                table.setAttribute( 'border', opt.border );
                if(domUtils.hasClass(table,"noBorderTable")){
                    domUtils.removeClasses(table,["noBorderTable"]);
                }
                domUtils.addClass(table,opt.border == "0" ? " noBorderTable" : "");

                if ( opt.borderType == "1" ) {
                    for ( var i = 0, ti, tds = table.getElementsByTagName( 'td' ); ti = tds[i++]; ) {
                        ti.style.border = opt.border + 'px solid ' + (opt.borderColor || '#000000');

                    }
                    table.setAttribute( 'borderType', '1' );
                } else {
                    for ( var i = 0, ti, tds = table.getElementsByTagName( 'td' ); ti = tds[i++]; ) {
                        if ( browser.ie ) {
                            ti.style.cssText = ti.style.cssText.replace( /border[^;]+/gi, '' );

                        } else {
                            domUtils.removeStyle( ti, 'border' );
                            domUtils.removeStyle( ti, 'border-image' );
                        }

                    }
                    table.removeAttribute( 'borderType' );
                }

            }
        }
    };

    me.commands['edittd'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return (domUtils.findParentByTagName( range.startContainer, 'table', true )
                    && domUtils.findParentByTagName( range.endContainer, 'table', true )) || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        /**
         * 閸楁洖鍘撻弽鐓庣潣閹呯椽鏉堬拷
         * @param cmdName
         * @param tdItems
         */
        execCommand:function ( cmdName, tdItems ) {
            var range = this.selection.getRange(),
                    tds = !me.currentSelectedArr.length ? [domUtils.findParentByTagName( range.startContainer, ['td', 'th'], true )] : me.currentSelectedArr;
            for ( var i = 0, td; td = tds[i++]; ) {
                domUtils.setAttributes( td, {
                    "bgColor":tdItems.bgColor,
                    "align":tdItems.align,
                    "vAlign":tdItems.vAlign
                } );
            }
        }
    };


    /**
     * 閸掔娀娅庣悰銊︾壐
     */
    me.commands['deletetable'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return (domUtils.findParentByTagName( range.startContainer, 'table', true )
                    && domUtils.findParentByTagName( range.endContainer, 'table', true )) || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        execCommand:function () {
            var range = this.selection.getRange(),
                    table = domUtils.findParentByTagName( me.currentSelectedArr.length > 0 ? me.currentSelectedArr[0] : range.startContainer, 'table', true );
            deleteTable( table, range );
            reset();
        }
    };

    /**
     * 閸氭垵褰搁崥鍫濊嫙閸楁洖鍘撻弽锟�
     */
    me.commands['mergeright'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );


            if ( !td || this.currentSelectedArr.length > 1 ){
                return -1;
            }

            var tr = td.parentNode;

            //閺堬拷褰告潏纭咁攽娑撳秷鍏橀崥鎴濆礁閸氬牆鑻�
            var rightCellIndex = getIndex( td ) + td.colSpan;
            if ( rightCellIndex >= tr.cells.length ) {
                return -1;
            }
            //閸楁洖鍘撻弽闂寸瑝閸︺劌鎮撴稉锟筋攽娑撳秷鍏橀崥鎴濆礁閸氬牆鑻�
            var rightCell = tr.cells[rightCellIndex];
            if ( _isHide( rightCell ) ) {
                return -1;
            }
            return td.rowSpan == rightCell.rowSpan ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0],
                    tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            //閹垫儳鍩岃ぐ鎾冲閸楁洖鍘撻弽鐓庡礁鏉堝湱娈戦張顏堟閽樺繐宕熼崗鍐╃壐
            var rightCellRowIndex = tr.rowIndex,
                    rightCellCellIndex = getIndex( td ) + td.colSpan,
                    rightCell = rows[rightCellRowIndex].cells[rightCellCellIndex];

            //閸︺劑娈ｉ挊蹇曟畱閸樼喓鏁搕d鐎电钖勬稉濠傤杻閸旂姳琚辨稉顏勭潣閹嶇礉閸掑棗鍩嗙悰銊с仛瑜版挸澧爐d鐎电懓绨查惃鍕埂鐎圭�d閸ф劖鐖�
            for ( var i = rightCellRowIndex; i < rightCellRowIndex + rightCell.rowSpan; i++ ) {
                for ( var j = rightCellCellIndex; j < rightCellCellIndex + rightCell.colSpan; j++ ) {
                    var tmpCell = rows[i].cells[j];
                    tmpCell.setAttribute( 'rootRowIndex', tr.rowIndex );
                    tmpCell.setAttribute( 'rootCellIndex', getIndex( td ) );

                }
            }
            //閸氬牆鑻熼崡鏇炲帗閺嶏拷
            td.colSpan += rightCell.colSpan || 1;
            //閸氬牆鑻熼崘鍛啇
            _moveContent( td, rightCell );
            //閸掔娀娅庣悮顐㈡値楠炲墎娈戦崡鏇炲帗閺嶇》绱濆銈咁樀閻劑娈ｉ挊蹇旀煙瀵繐鐤勯悳鐗堟降閹绘劕宕岄幀褑鍏�
            rightCell.style.display = "none";
            //闁插秵鏌婄拋鈺佸礋閸忓啯鐗搁懢宄板絿閻掞妇鍋�
            //trace:1565
            if ( domUtils.isEmptyBlock( td ) ) {
                range.setStart( td, 0 ).setCursor();
            } else {
                range.selectNodeContents( td ).setCursor( true, true );
            }

            //婢跺嫮鎮婇張澶婄樅妤傛﹫绱濈�鑹板毀ie閻ㄥ嫭鏋冪�妞剧瑝閼冲�绶崗銉ュ窗濠婏拷
            browser.ie && domUtils.removeAttributes( td, ['width', 'height'] );
        }
    };

    /**
     * 閸氭垳绗呴崥鍫濊嫙閸楁洖鍘撻弽锟�
     */
    me.commands['mergedown'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true );

            if ( !td || getCount( me.currentSelectedArr ) > 1 ){
                return -1;
            }


            var tr = td.parentNode,
                    table = tr.parentNode.parentNode,
                    rows = table.rows;

            //瀹歌尙绮￠弰顖涙付鎼存洝顢�娑撳秷鍏橀崥鎴滅瑓閸氬牆鑻�
            var downCellRowIndex = tr.rowIndex + td.rowSpan;
            if ( downCellRowIndex >= rows.length ) {
                return -1;
            }

            //婵″倹鐏夋稉瀣╃娑擃亜宕熼崗鍐╃壐閺勵垶娈ｉ挊蹇曟畱閿涘矁銆冮弰搴濈铂閺勵垳鏁卞锕佺珶span鏉╁洦娼甸惃鍕剁礉娑撳秷鍏橀崥鎴滅瑓閸氬牆鑻�
            var downCell = rows[downCellRowIndex].cells[getIndex( td )];
            if ( _isHide( downCell ) ) {
                return -1;
            }

            //閸欘亝婀侀崚姊an闁晫娴夌粵澶嬫閹靛秷鍏橀崥鍫濊嫙
            return td.colSpan == downCell.colSpan ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0];


            var tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            var downCellRowIndex = tr.rowIndex + td.rowSpan,
                    downCellCellIndex = getIndex( td ),
                    downCell = rows[downCellRowIndex].cells[downCellCellIndex];

            //閹垫儳鍩岃ぐ鎾冲閸掓娈戞稉瀣╃娑擃亝婀悮顐︽閽樺繒娈戦崡鏇炲帗閺嶏拷
            for ( var i = downCellRowIndex; i < downCellRowIndex + downCell.rowSpan; i++ ) {
                for ( var j = downCellCellIndex; j < downCellCellIndex + downCell.colSpan; j++ ) {
                    var tmpCell = rows[i].cells[j];


                    tmpCell.setAttribute( 'rootRowIndex', tr.rowIndex );
                    tmpCell.setAttribute( 'rootCellIndex', getIndex( td ) );
                }
            }
            //閸氬牆鑻熼崡鏇炲帗閺嶏拷
            td.rowSpan += downCell.rowSpan || 1;
            //閸氬牆鑻熼崘鍛啇
            _moveContent( td, downCell );
            //閸掔娀娅庣悮顐㈡値楠炲墎娈戦崡鏇炲帗閺嶇》绱濆銈咁樀閻劑娈ｉ挊蹇旀煙瀵繐鐤勯悳鐗堟降閹绘劕宕岄幀褑鍏�
            downCell.style.display = "none";
            //闁插秵鏌婄拋鈺佸礋閸忓啯鐗搁懢宄板絿閻掞妇鍋�
            if ( domUtils.isEmptyBlock( td ) ) {
                range.setStart( td, 0 ).setCursor();
            } else {
                range.selectNodeContents( td ).setCursor( true, true );
            }
            //婢跺嫮鎮婇張澶婄樅妤傛﹫绱濈�鑹板毀ie閻ㄥ嫭鏋冪�妞剧瑝閼冲�绶崗銉ュ窗濠婏拷
            browser.ie && domUtils.removeAttributes( td, ['width', 'height'] );
        }
    };

    /**
     * 閸掔娀娅庣悰锟�
     */
    me.commands['deleterow'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );
            if ( !td && me.currentSelectedArr.length == 0 ){
                return -1;
            }
            return 0;

        },
        execCommand:function () {
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ),
                    tr,
                    table,
                    cells,
                    rows ,
                    rowIndex ,
                    cellIndex;

            if ( td && me.currentSelectedArr.length == 0 ) {
                var count = (td.rowSpan || 1) - 1;

                me.currentSelectedArr.push( td );
                tr = td.parentNode;
                        table = tr.parentNode.parentNode;

                rows = table.rows,
                        rowIndex = tr.rowIndex + 1,
                        cellIndex = getIndex( td );

                while ( count ) {

                    me.currentSelectedArr.push( rows[rowIndex].cells[cellIndex] );
                    count--;
                    rowIndex++;
                }
            }

            while ( td = me.currentSelectedArr.pop() ) {

                if ( !domUtils.findParentByTagName( td, 'table' ) ) {//|| _isHide(td)

                    continue;
                }
                tr = td.parentNode,
                        table = tr.parentNode.parentNode;
                cells = tr.cells,
                        rows = table.rows,
                        rowIndex = tr.rowIndex,
                        cellIndex = getIndex( td );
                /*
                 * 娴犲孩娓跺锕佺珶瀵拷顬婇幍顐ｅ伎楠炲爼娈ｉ挊蹇撶秼閸撳秷顢戦惃鍕閺堝宕熼崗鍐╃壐
                 * 閼汇儱缍嬮崜宥呭礋閸忓啯鐗搁惃鍒splay娑撶皠one,瀵帮拷绗傞幍鎯у煂鐎瑰啯澧嶉崷銊ф畱閻喐顒滈崡鏇炲帗閺嶇》绱濋懢宄板絿colSpan閸滃owSpan閿涳拷
                 *  鐏忓敃owspan閸戝繋绔撮敍灞借嫙鐠哄疇娴嗛崚鐧眅llIndex+colSpan閸掓鎴风紒顓烆樀閻烇拷
                 * 閼汇儱缍嬮崜宥呭礋閸忓啯鐗搁惃鍒splay娑撳秳璐焠one,閸掑棔琚辩粔宥嗗剰閸愮绱�
                 *  1閵嗕购owspan == 1 閿涘瞼娲块幒銉啎缂冪敠isplay娑撶皠one閿涘矁鐑︽潪顒�煂cellIndex+colSpan閸掓鎴风紒顓烆樀閻烇拷
                 *  2閵嗕购owspan > 1  , 娣囶喗鏁艰ぐ鎾冲閸楁洖鍘撻弽鑲╂畱娑撳绔存稉顏勫礋閸忓啯鐗搁惃鍒splay娑擄拷",
                 *    楠炶泛鐨㈣ぐ鎾冲閸楁洖鍘撻弽鑲╂畱rowspan-1鐠у绮版稉瀣╃娑擃亜宕熼崗鍐╃壐閻ㄥ墔owspan閿涘苯缍嬮崜宥呭礋閸忓啯鐗搁惃鍒lspan鐠у绮版稉瀣╃娑擃亜宕熼崗鍐╃壐閻ㄥ垻olspan閿涳拷
                 *    閻掕泛鎮楅梾鎰瑜版挸澧犻崡鏇炲帗閺嶇》绱濈捄瀹犳祮閸掔櫛ellIndex+colSpan閸掓鎴风紒顓烆樀閻烇拷
                 */
                for ( var currentCellIndex = 0; currentCellIndex < cells.length; ) {
                    var currentNode = cells[currentCellIndex];
                    if ( _isHide( currentNode ) ) {
                        var topNode = rows[currentNode.getAttribute( 'rootRowIndex' )].cells[currentNode.getAttribute( 'rootCellIndex' )];
                        topNode.rowSpan--;
                        currentCellIndex += topNode.colSpan;
                    } else {
                        if ( currentNode.rowSpan == 1 ) {
                            currentCellIndex += currentNode.colSpan;
                        } else {
                            var downNode = rows[rowIndex + 1].cells[currentCellIndex];
                            downNode.style.display = "";
                            downNode.rowSpan = currentNode.rowSpan - 1;
                            downNode.colSpan = currentNode.colSpan;
                            currentCellIndex += currentNode.colSpan;
                        }
                    }
                }
                //鐎瑰本鍨氶弴瀛樻煀閸氬骸鍟�崚鐘绘珟婢舵牕鐪伴崠鍛帮紮閻ㄥ墖r
                domUtils.remove( tr );

                //闁插秵鏌婄�姘秴閻掞妇鍋�
                var topRowTd, focusTd, downRowTd;

                if ( rowIndex == rows.length ) { //婵″倹鐏夌悮顐㈠灩闂勩倗娈戠悰灞炬Ц閺堬拷鎮楁稉锟筋攽,鏉╂瑩鍣锋稊瀣娴犮儲鐥呴張锟�閺勵垰娲滄稉鍝勫嚒缂佸繐鍨归梽銈勭啊娑擄拷顢�
                    //婵″倹鐏夐崚鐘绘珟閻ㄥ嫯顢戞稊鐔告Ц缁楊兛绔寸悰宀嬬礉闁絼绠炵悰銊︾壐閹鍙￠崣顏呮箒娑擄拷顢戦敍灞藉灩闂勩倖鏆ｆ稉顏囥�閺嶏拷
                    if ( rowIndex == 0 ) {
                        deleteTable( table, range );

                        return;
                    }
                    //婵″倹鐏夋稉濠佺閸楁洖鍘撻弽鍏兼弓闂呮劘妫岄敍灞藉灟閻╁瓨甯寸�姘秴閿涘苯鎯侀崚娆忕暰娴ｅ秴鍩岄張锟界箮閻ㄥ嫪绗傛稉锟介嚋闂堢偤娈ｉ挊蹇撳礋閸忓啯鐗�
                    var preRowIndex = rowIndex - 1;
                    topRowTd = rows[preRowIndex].cells[ cellIndex];
                    focusTd = _isHide( topRowTd ) ? rows[topRowTd.getAttribute( 'rootRowIndex' )].cells[topRowTd.getAttribute( 'rootCellIndex' )] : topRowTd;

                } else { //婵″倹鐏夌悮顐㈠灩闂勩倗娈戞稉宥嗘Ц閺堬拷鎮楁稉锟筋攽閿涘苯鍨崗澶嬬垼鐎规矮缍呴崚棰佺瑓娑擄拷顢�濮濄倕顦甸張顏勫1閺勵垰娲滄稉鍝勫嚒缂佸繐鍨归梽銈勭啊娑擄拷顢�

                    downRowTd = rows[rowIndex].cells[cellIndex];
                    focusTd = _isHide( downRowTd ) ? rows[downRowTd.getAttribute( 'rootRowIndex' )].cells[downRowTd.getAttribute( 'rootCellIndex' )] : downRowTd;
                }
            }


            range.setStart( focusTd, 0 ).setCursor();
            update( table );
        }
    };

    /**
     * 閸掔娀娅庨崚锟�
     */
    me.commands['deletecol'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );
            if ( !td && me.currentSelectedArr.length == 0 )return -1;
            return 0;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );


            if ( td && me.currentSelectedArr.length == 0 ) {

                var count = (td.colSpan || 1) - 1;

                me.currentSelectedArr.push( td );
                while ( count ) {
                    do {
                        td = td.nextSibling
                    } while ( td.nodeType == 3 );
                    me.currentSelectedArr.push( td );
                    count--;
                }
            }

            while ( td = me.currentSelectedArr.pop() ) {
                if ( !domUtils.findParentByTagName( td, 'table' ) ) { //|| _isHide(td)
                    continue;
                }

                var tr = td.parentNode,
                        table = tr.parentNode.parentNode,
                        cellIndex = getIndex( td ),
                        rows = table.rows,
                        cells = tr.cells,
                        rowIndex = tr.rowIndex;
                /*
                 * 娴犲海顑囨稉锟筋攽瀵拷顬婇幍顐ｅ伎楠炲爼娈ｉ挊蹇撶秼閸撳秴鍨惃鍕閺堝宕熼崗鍐╃壐
                 * 閼汇儱缍嬮崜宥呭礋閸忓啯鐗搁惃鍒splay娑撶皠one閿涘矁銆冮弰搴＄暊閺勵垳鏁卞锕佺珶Span鏉╁洦娼甸惃鍕剁礉
                 *  鐏忓棗涔忔潏鍦儑娑擄拷閲滈棃鐎梠ne閸楁洖鍘撻弽鑲╂畱colSpan閸戝繐骞�楠炶泛鍨归崢璇差嚠鎼存梻娈戦崡鏇炲帗閺嶇厧鎮楃捄瀹犳祮閸掔殙owIndex + rowspan鐞涘瞼鎴风紒顓烆樀閻炲棴绱�
                 * 閼汇儱缍嬮崜宥呭礋閸忓啯鐗搁惃鍒splay娑撳秳璐焠one閿涘苯鍨庢稉銈囶瀸閹懎鍠岄敍锟�
                 *  1閵嗕礁缍嬮崜宥呭礋閸忓啯鐗搁惃鍒lspan == 1 閿涳拷閸掓瑧娲块幒銉ュ灩闂勩倛顕氶懞鍌滃仯閿涘矁鐑︽潪顒�煂rowIndex + rowspan鐞涘瞼鎴风紒顓烆樀閻烇拷
                 *  2閵嗕礁缍嬮崜宥呭礋閸忓啯鐗搁惃鍒lsapn >  1, 娣囶喗鏁艰ぐ鎾冲閸楁洖鍘撻弽鐓庡礁鏉堢懓宕熼崗鍐╃壐閻ㄥ垼isplay娑擄拷",
                 *      楠炶泛鐨㈣ぐ鎾冲閸楁洖鍘撻弽鑲╂畱colspan-1鐠у绮扮�鍐畱colspan閿涘苯缍嬮崜宥呭礋閸忓啯鐗搁惃鍓卭lspan鐠у绮扮�鍐畱rolspan閿涳拷
                 *      閻掕泛鎮楅崚鐘绘珟瑜版挸澧犻崡鏇炲帗閺嶇》绱濈捄瀹犳祮閸掔殙owIndex+rowSpan鐞涘瞼鎴风紒顓烆樀閻烇拷
                 */
                var rowSpan;
                for ( var currentRowIndex = 0; currentRowIndex < rows.length; ) {
                    var currentNode = rows[currentRowIndex].cells[cellIndex];
                    if ( _isHide( currentNode ) ) {
                        var leftNode = rows[currentNode.getAttribute( 'rootRowIndex' )].cells[currentNode.getAttribute( 'rootCellIndex' )];
                        //娓氭繃顐奸崚鐘绘珟鐎电懓绨查惃鍕礋閸忓啯鐗�
                        rowSpan = leftNode.rowSpan;
                        for ( var i = 0; i < leftNode.rowSpan; i++ ) {
                            var delNode = rows[currentRowIndex + i].cells[cellIndex];
                            domUtils.remove( delNode );
                        }
                        //娣囶喗顒滅悮顐㈠灩閸氬海娈戦崡鏇炲帗閺嶉棿淇婇幁锟�
                        leftNode.colSpan--;
                        currentRowIndex += rowSpan;
                    } else {
                        if ( currentNode.colSpan == 1 ) {
                            rowSpan = currentNode.rowSpan;
                            for ( var i = currentRowIndex, l = currentRowIndex + currentNode.rowSpan; i < l; i++ ) {
                                domUtils.remove( rows[i].cells[cellIndex] );
                            }
                            currentRowIndex += rowSpan;

                        } else {
                            var rightNode = rows[currentRowIndex].cells[cellIndex + 1];
                            rightNode.style.display = "";
                            rightNode.rowSpan = currentNode.rowSpan;
                            rightNode.colSpan = currentNode.colSpan - 1;
                            currentRowIndex += currentNode.rowSpan;
                            domUtils.remove( currentNode );
                        }
                    }
                }

                //闁插秵鏌婄�姘秴閻掞妇鍋�
                var preColTd, focusTd, nextColTd;
                if ( cellIndex == cells.length ) { //婵″倹鐏夎ぐ鎾冲閸掓妲搁張锟芥倵娑擄拷鍨敍灞藉帨閺嶅洤鐣炬担宥呭煂瑜版挸澧犻崚妤冩畱閸撳秳绔撮崚锟介崥灞剧壉閿涘矁绻栭柌灞剧梾閺堝鍣洪崢锟介弰顖氭礈娑撳搫鍑＄紒蹇氼枂閸掔娀娅庢禍鍡曠閸掞拷
                    //婵″倹鐏夎ぐ鎾冲閸掓ぞ绡冮弰顖滎儑娑擄拷鍨敍灞藉灟閸掔娀娅庨弫缈犻嚋鐞涖劍鐗�
                    if ( cellIndex == 0 ) {
                        deleteTable( table, range );
                        return;
                    }
                    //閹垫儳鍩岃ぐ鎾冲閸楁洖鍘撻弽鐓庡娑擄拷鍨稉顓炴嫲閺堫剙宕熼崗鍐╃壐閺堬拷绻庨惃鍕娑擃亝婀梾鎰閸楁洖鍘撻弽锟�
                    var preCellIndex = cellIndex - 1;
                    preColTd = rows[rowIndex].cells[preCellIndex];
                    focusTd = _isHide( preColTd ) ? rows[preColTd.getAttribute( 'rootRowIndex' )].cells[preColTd.getAttribute( 'rootCellIndex' )] : preColTd;

                } else { //婵″倹鐏夎ぐ鎾冲閸掓ぞ绗夐弰顖涙付閸氬簼绔撮崚妤嬬礉閸掓瑥鍘滈弽鍥х暰娴ｅ秴鍩岃ぐ鎾冲閸掓娈戦崥搴濈閸掞拷

                    nextColTd = rows[rowIndex].cells[cellIndex];
                    focusTd = _isHide( nextColTd ) ? rows[nextColTd.getAttribute( 'rootRowIndex' )].cells[nextColTd.getAttribute( 'rootCellIndex' )] : nextColTd;
                }
            }

            range.setStart( focusTd, 0 ).setCursor();
            update( table )
        }
    };

    /**
     * 鐎瑰苯鍙忛幏鍡楀瀻閸楁洖鍘撻弽锟�
     */
    me.commands['splittocells'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );
            return td && ( td.rowSpan > 1 || td.colSpan > 1 ) && (!me.currentSelectedArr.length || getCount( me.currentSelectedArr ) == 1) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ),
                    tr = td.parentNode,
                    table = tr.parentNode.parentNode;
            var rowIndex = tr.rowIndex,
                    cellIndex = getIndex( td ),
                    rowSpan = td.rowSpan,
                    colSpan = td.colSpan;


            for ( var i = 0; i < rowSpan; i++ ) {
                for ( var j = 0; j < colSpan; j++ ) {
                    var cell = table.rows[rowIndex + i].cells[cellIndex + j];
                    cell.rowSpan = 1;
                    cell.colSpan = 1;

                    if ( _isHide( cell ) ) {
                        cell.style.display = "";
                        cell.innerHTML = browser.ie ? '' : "<br/>";
                    }
                }
            }
        }
    };


    /**
     * 鐏忓棗宕熼崗鍐╃壐閹峰棗鍨庨幋鎰攽
     */
    me.commands['splittorows'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true ) || me.currentSelectedArr[0];
            return td && ( td.rowSpan > 1) && (!me.currentSelectedArr.length || getCount( me.currentSelectedArr ) == 1) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true ) || me.currentSelectedArr[0],
                    tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            var rowIndex = tr.rowIndex,
                    cellIndex = getIndex( td ),
                    rowSpan = td.rowSpan,
                    colSpan = td.colSpan;

            for ( var i = 0; i < rowSpan; i++ ) {
                var cells = rows[rowIndex + i],
                        cell = cells.cells[cellIndex];
                cell.rowSpan = 1;
                cell.colSpan = colSpan;
                if ( _isHide( cell ) ) {
                    cell.style.display = "";
                    //閸樼喐婀侀惃鍕敶鐎圭顪呭〒鍛存珟閹猴拷
                    cell.innerHTML = browser.ie ? '' : '<br/>'
                }
                //娣囶喗顒滅悮顐︽閽樺繐宕熼崗鍐╃壐娑擃厼鐡ㄩ崒銊ф畱rootRowIndex閸滃ootCellIndex娣団剝浼�
                for ( var j = cellIndex + 1; j < cellIndex + colSpan; j++ ) {
                    cell = cells.cells[j];

                    cell.setAttribute( 'rootRowIndex', rowIndex + i )
                }

            }
            clearSelectedTd( me.currentSelectedArr );
            this.selection.getRange().setStart( td, 0 ).setCursor();
        }
    };


    /**
     * 閸︺劏銆冮弽鐓庡閹绘帒鍙嗙悰锟�
     */
    me.commands['insertparagraphbeforetable'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true ) || me.currentSelectedArr[0];
            return  td && domUtils.findParentByTagName( td, 'table' ) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    table = domUtils.findParentByTagName( start, 'table', true );

            start = me.document.createElement( me.options.enterTag );
            table.parentNode.insertBefore( start, table );
            clearSelectedTd( me.currentSelectedArr );
            if ( start.tagName == 'P' ) {
                //trace:868
                start.innerHTML = browser.ie ? '' : '<br/>';
                range.setStart( start, 0 )
            } else {
                range.setStartBefore( start )
            }
            range.setCursor();

        }
    };

    /**
     * 鐏忓棗宕熼崗鍐╃壐閹峰棗鍨庨幋鎰灙
     */
    me.commands['splittocols'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0];
            return td && ( td.colSpan > 1) && (!me.currentSelectedArr.length || getCount( me.currentSelectedArr ) == 1) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0],
                    tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            var rowIndex = tr.rowIndex,
                    cellIndex = getIndex( td ),
                    rowSpan = td.rowSpan,
                    colSpan = td.colSpan;

            for ( var i = 0; i < colSpan; i++ ) {
                var cell = rows[rowIndex].cells[cellIndex + i];
                cell.rowSpan = rowSpan;
                cell.colSpan = 1;
                if ( _isHide( cell ) ) {
                    cell.style.display = "";
                    cell.innerHTML = browser.ie ? '' : '<br/>'
                }

                for ( var j = rowIndex + 1; j < rowIndex + rowSpan; j++ ) {
                    var tmpCell = rows[j].cells[cellIndex + i];
                    tmpCell.setAttribute( 'rootCellIndex', cellIndex + i );
                }
            }
            clearSelectedTd( me.currentSelectedArr );
            this.selection.getRange().setStart( td, 0 ).setCursor();
        }
    };


    /**
     * 閹绘帒鍙嗙悰锟�
     */
    me.commands['insertrow'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || domUtils.findParentByTagName( range.endContainer, 'table', true ) || me.currentSelectedArr.length != 0 ? 0 : -1;
        },
        execCommand:function () {
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    tr = domUtils.findParentByTagName( start, 'tr', true ) || me.currentSelectedArr[0].parentNode,
                    table = tr.parentNode.parentNode,
                    rows = table.rows;

            //鐠佹澘缍嶉幓鎺戝弳娴ｅ秶鐤嗛崢鐔告降閹碉拷婀侀惃鍕礋閸忓啯鐗�
            var rowIndex = tr.rowIndex,
                    cells = rows[rowIndex].cells;

            //閹绘帒鍙嗛弬鎵畱娑擄拷顢�
            var newRow = table.insertRow( rowIndex );

            var newCell;
            //闁秴宸荤悰銊︾壐娑擃厼绶熼幓鎺戝弳娴ｅ秶鐤嗘稉顓犳畱閹碉拷婀侀崡鏇炲帗閺嶇》绱濆Λ锟界叀閸忓墎濮搁幀渚婄礉楠炶埖宓佸銈勬叏濮濓絾鏌婇幓鎺戝弳鐞涘瞼娈戦崡鏇炲帗閺嶈偐濮搁幀锟�
            for ( var cellIndex = 0; cellIndex < cells.length; ) {

                var tmpCell = cells[cellIndex];

                if ( _isHide( tmpCell ) ) { //婵″倹鐏夎ぐ鎾冲閸楁洖鍘撻弽鍏兼Ц闂呮劘妫岄惃鍕剁礉鐞涖劍妲戣ぐ鎾冲閸楁洖鍘撻弽鑲╂暠閸忔湹绗傞柈鈺痯an鏉╁洦娼甸敍灞惧閸掓澘鍙炬稉濠囧劥閸楁洖鍘撻弽锟�

                    //閹垫儳鍩岀悮顐︽閽樺繐宕熼崗鍐╃壐閻喐顒滈幍锟界潣閻ㄥ嫬宕熼崗鍐╃壐
                    var topCell = rows[tmpCell.getAttribute( 'rootRowIndex' )].cells[tmpCell.getAttribute( 'rootCellIndex' )];
                    //婢х偛濮炴稉锟筋攽閿涘苯鑻熺亸鍡樺閺堝鏌婇幓鎺戝弳閻ㄥ嫬宕熼崗鍐╃壐闂呮劘妫岀挧閿嬫降
                    topCell.rowSpan++;
                    for ( var i = 0; i < topCell.colSpan; i++ ) {
                        newCell = tmpCell.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';

                        if ( newRow.children[cellIndex + i] ) {
                            newRow.insertBefore( newCell, newRow.children[cellIndex + i] );
                        } else {
                            newRow.appendChild( newCell )
                        }

                        newCell.style.display = "none";
                    }
                    cellIndex += topCell.colSpan;

                } else {//閼汇儱缍嬮崜宥呭礋閸忓啯鐗搁張顏堟閽樺骏绱濋崚娆忔躬閸忔湹绗傜悰灞惧絻閸忣殌olspan娑擃亜宕熼崗鍐╃壐

                    for ( var j = 0; j < tmpCell.colSpan; j++ ) {
                        newCell = tmpCell.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        if ( newRow.children[cellIndex + j] ) {
                            newRow.insertBefore( newCell, newRow.children[cellIndex + j] );
                        } else {
                            newRow.appendChild( newCell )
                        }
                    }
                    cellIndex += tmpCell.colSpan;
                }
            }
            update( table );
            range.setStart( newRow.cells[0], 0 ).setCursor();

            clearSelectedTd( me.currentSelectedArr );
        }
    };

    /**
     * 閹绘帒鍙嗛崚锟�
     */
    me.commands['insertcol'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || domUtils.findParentByTagName( range.endContainer, 'table', true ) || me.currentSelectedArr.length != 0 ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0],
                    table = domUtils.findParentByTagName( td, 'table' ),
                    rows = table.rows;

            var cellIndex = getIndex( td ),
                    newCell;

            //闁秴宸昏ぐ鎾冲閸掓ぞ鑵戦惃鍕閺堝宕熼崗鍐╃壐閿涘本顥戦弻銉ュ従閻樿埖锟介敍灞借嫙閹诡喗顒濇穱顔筋劀閺傜増褰冮崗銉ュ灙閻ㄥ嫬宕熼崗鍐╃壐閻樿埖锟�
            for ( var rowIndex = 0; rowIndex < rows.length; ) {

                var tmpCell = rows[rowIndex].cells[cellIndex], tr;

                if ( _isHide( tmpCell ) ) {//婵″倹鐏夎ぐ鎾冲閸楁洖鍘撻弽鍏兼Ц闂呮劘妫岄惃鍕剁礉鐞涖劍妲戣ぐ鎾冲閸楁洖鍘撻弽鑲╂暠閸忚泛涔忔潏绠俻an鏉╁洦娼甸敍灞惧閸掓澘鍙惧锕佺珶閸楁洖鍘撻弽锟�

                    var leftCell = rows[tmpCell.getAttribute( 'rootRowIndex' )].cells[tmpCell.getAttribute( 'rootCellIndex' )];
                    leftCell.colSpan++;
                    for ( var i = 0; i < leftCell.rowSpan; i++ ) {
                        newCell = td.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        tr = rows[rowIndex + i];
                        if ( tr.children[cellIndex] ) {
                            tr.insertBefore( newCell, tr.children[cellIndex] );
                        } else {
                            tr.appendChild( newCell )
                        }

                        newCell.style.display = "none";
                    }
                    rowIndex += leftCell.rowSpan;

                } else { //閼汇儱缍嬮崜宥呭礋閸忓啯鐗搁張顏堟閽樺骏绱濋崚娆忔躬閸忚泛涔忔潏瑙勫絻閸忣殢owspan娑擃亜宕熼崗鍐╃壐

                    for ( var j = 0; j < tmpCell.rowSpan; j++ ) {
                        newCell = td.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        tr = rows[rowIndex + j];
                        if ( tr.children[cellIndex] ) {
                            tr.insertBefore( newCell, tr.children[cellIndex] );
                        } else {
                            tr.appendChild( newCell )
                        }

                        newCell.innerHTML = browser.ie ? '' : "<br/>";

                    }
                    rowIndex += tmpCell.rowSpan;
                }
            }
            update( table );
            range.setStart( rows[0].cells[cellIndex], 0 ).setCursor();
            clearSelectedTd( me.currentSelectedArr );

        }
    };

    /**
     * 閸氬牆鑻熸径姘嚋閸楁洖鍘撻弽纭风礉闁俺绻冩稉銈勯嚋cell鐏忓棗缍嬮崜宥呭瘶閸氼偆娈戦幍锟芥箒濡亞鏃遍崡鏇炲帗閺嶈壈绻樼悰灞芥値楠烇拷
     */
    me.commands['mergecells'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var count = 0;
            for ( var i = 0, ti; ti = this.currentSelectedArr[i++]; ) {
                if ( !_isHide( ti ) )
                    count++;
            }
            return count > 1 ? 0 : -1;
        },
        execCommand:function () {

            var start = me.currentSelectedArr[0],
                    end = me.currentSelectedArr[me.currentSelectedArr.length - 1],
                    table = domUtils.findParentByTagName( start, 'table' ),
                    rows = table.rows,
                    cellsRange = {
                        beginRowIndex:start.parentNode.rowIndex,
                        beginCellIndex:getIndex( start ),
                        endRowIndex:end.parentNode.rowIndex,
                        endCellIndex:getIndex( end )
                    },

                    beginRowIndex = cellsRange.beginRowIndex,
                    beginCellIndex = cellsRange.beginCellIndex,
                    rowsLength = cellsRange.endRowIndex - cellsRange.beginRowIndex + 1,
                    cellLength = cellsRange.endCellIndex - cellsRange.beginCellIndex + 1,

                    tmp = rows[beginRowIndex].cells[beginCellIndex];

            for ( var i = 0, ri; (ri = rows[beginRowIndex + i++]) && i <= rowsLength; ) {
                for ( var j = 0, ci; (ci = ri.cells[beginCellIndex + j++]) && j <= cellLength; ) {
                    if ( i == 1 && j == 1 ) {
                        ci.style.display = "";
                        ci.rowSpan = rowsLength;
                        ci.colSpan = cellLength;
                    } else {
                        ci.style.display = "none";
                        ci.rowSpan = 1;
                        ci.colSpan = 1;
                        ci.setAttribute( 'rootRowIndex', beginRowIndex );
                        ci.setAttribute( 'rootCellIndex', beginCellIndex );

                        //娴肩娀锟介崘鍛啇
                        _moveContent( tmp, ci );
                    }
                }
            }
            this.selection.getRange().setStart( tmp, 0 ).setCursor();
            //婢跺嫮鎮婇張澶婄樅妤傛﹫绱濈�鑹板毀ie閻ㄥ嫭鏋冪�妞剧瑝閼冲�绶崗銉ュ窗濠婏拷
            browser.ie && domUtils.removeAttributes( tmp, ['width', 'height'] );
            clearSelectedTd( me.currentSelectedArr );
        }
    };

    /**
     * 鐏忓摶ellFrom閸楁洖鍘撻弽闂磋厬閻ㄥ嫬鍞寸�鍦╅崝銊ュ煂cellTo娑擄拷
     * @param cellTo  閻╊喗鐖ｉ崡鏇炲帗閺嶏拷
     * @param cellFrom  濠ф劕宕熼崗鍐╃壐
     */
    function _moveContent( cellTo, cellFrom ) {
        if ( _isEmpty( cellFrom ) ) return;

        if ( _isEmpty( cellTo ) ) {
            cellTo.innerHTML = cellFrom.innerHTML;
            return;
        }
        var child = cellTo.lastChild;
        if ( child.nodeType != 1 || child.tagName != 'BR' ) {
            cellTo.appendChild( cellTo.ownerDocument.createElement( 'br' ) )
        }

        //娓氭繃顐肩粔璇插З閸愬懎顔�
        while ( child = cellFrom.firstChild ) {
            cellTo.appendChild( child );
        }
    }


    /**
     * 閺嶈宓佹稉銈勯嚋閸楁洖鍘撻弽鍏兼降閼惧嘲褰囨稉顓㈡？閸栧懎鎯堥惃鍕閺堝宕熼崗鍐╃壐闂嗗棗鎮庨柅澶婂隘
     * @param cellA
     * @param cellB
     * @return {Object} 闁灏惃鍕箯娑撳﹤鎷伴崣鍏呯瑓閸ф劖鐖�
     */
    function _getCellsRange( cellA, cellB ) {

        var trA = cellA.parentNode,
                trB = cellB.parentNode,
                aRowIndex = trA.rowIndex,
                bRowIndex = trB.rowIndex,
                rows = trA.parentNode.parentNode.rows,
                rowsNum = rows.length,
                cellsNum = rows[0].cells.length,
                cellAIndex = getIndex( cellA ),
                cellBIndex = getIndex( cellB );

        if ( cellA == cellB ) {
            return {
                beginRowIndex:aRowIndex,
                beginCellIndex:cellAIndex,
                endRowIndex:aRowIndex + cellA.rowSpan - 1,
                endCellIndex:cellBIndex + cellA.colSpan - 1
            }
        }

        var
                beginRowIndex = Math.min( aRowIndex, bRowIndex ),
                beginCellIndex = Math.min( cellAIndex, cellBIndex ),
                endRowIndex = Math.max( aRowIndex + cellA.rowSpan - 1, bRowIndex + cellB.rowSpan - 1 ),
                endCellIndex = Math.max( cellAIndex + cellA.colSpan - 1, cellBIndex + cellB.colSpan - 1 );

        while ( 1 ) {

            var tmpBeginRowIndex = beginRowIndex,
                    tmpBeginCellIndex = beginCellIndex,
                    tmpEndRowIndex = endRowIndex,
                    tmpEndCellIndex = endCellIndex;
            // 濡拷鐓￠弰顖氭儊閺堝绉撮崙绡bleRange娑撳﹨绔熼悾宀�畱閹懎鍠�
            if ( beginRowIndex > 0 ) {
                for ( cellIndex = beginCellIndex; cellIndex <= endCellIndex; ) {
                    var currentTopTd = rows[beginRowIndex].cells[cellIndex];
                    if ( _isHide( currentTopTd ) ) {

                        //overflowRowIndex = beginRowIndex == currentTopTd.rootRowIndex ? 1:0;
                        beginRowIndex = currentTopTd.getAttribute( 'rootRowIndex' );
                        currentTopTd = rows[currentTopTd.getAttribute( 'rootRowIndex' )].cells[currentTopTd.getAttribute( 'rootCellIndex' )];
                    }

                    cellIndex = getIndex( currentTopTd ) + (currentTopTd.colSpan || 1);
                }
            }

            //濡拷鐓￠弰顖氭儊閺堝绉撮崙鍝勪箯鏉堝湱鏅惃鍕剰閸愶拷
            if ( beginCellIndex > 0 ) {
                for ( var rowIndex = beginRowIndex; rowIndex <= endRowIndex; ) {
                    var currentLeftTd = rows[rowIndex].cells[beginCellIndex];
                    if ( _isHide( currentLeftTd ) ) {
                        // overflowCellIndex = beginCellIndex== currentLeftTd.rootCellIndex ? 1:0;
                        beginCellIndex = currentLeftTd.getAttribute( 'rootCellIndex' );
                        currentLeftTd = rows[currentLeftTd.getAttribute( 'rootRowIndex' )].cells[currentLeftTd.getAttribute( 'rootCellIndex' )];
                    }
                    rowIndex = currentLeftTd.parentNode.rowIndex + (currentLeftTd.rowSpan || 1);
                }
            }

            // 濡拷鐓￠弰顖氭儊閺堝绉撮崙绡bleRange娑撳绔熼悾宀�畱閹懎鍠�
            if ( endRowIndex < rowsNum ) {
                for ( var cellIndex = beginCellIndex; cellIndex <= endCellIndex; ) {
                    var currentDownTd = rows[endRowIndex].cells[cellIndex];
                    if ( _isHide( currentDownTd ) ) {
                        currentDownTd = rows[currentDownTd.getAttribute( 'rootRowIndex' )].cells[currentDownTd.getAttribute( 'rootCellIndex' )];
                    }
                    endRowIndex = currentDownTd.parentNode.rowIndex + currentDownTd.rowSpan - 1;
                    cellIndex = getIndex( currentDownTd ) + (currentDownTd.colSpan || 1);
                }
            }

            //濡拷鐓￠弰顖氭儊閺堝绉撮崙鍝勫礁鏉堝湱鏅惃鍕剰閸愶拷
            if ( endCellIndex < cellsNum ) {
                for ( rowIndex = beginRowIndex; rowIndex <= endRowIndex; ) {
                    var currentRightTd = rows[rowIndex].cells[endCellIndex];
                    if ( _isHide( currentRightTd ) ) {
                        currentRightTd = rows[currentRightTd.getAttribute( 'rootRowIndex' )].cells[currentRightTd.getAttribute( 'rootCellIndex' )];
                    }
                    endCellIndex = getIndex( currentRightTd ) + currentRightTd.colSpan - 1;
                    rowIndex = currentRightTd.parentNode.rowIndex + (currentRightTd.rowSpan || 1);
                }
            }

            if ( tmpBeginCellIndex == beginCellIndex && tmpEndCellIndex == endCellIndex && tmpEndRowIndex == endRowIndex && tmpBeginRowIndex == beginRowIndex ) {
                break;
            }
        }

        //鏉╂柨娲栭柅澶婂隘閻ㄥ嫯鎹ｆ慨瀣嫲缂佹挻娼崸鎰垼
        return {
            beginRowIndex:beginRowIndex,
            beginCellIndex:beginCellIndex,
            endRowIndex:endRowIndex,
            endCellIndex:endCellIndex
        }
    }


    /**
     * 姒х姵鐖ｉ幐澶夌瑓娴滃娆�
     * @param type
     * @param evt
     */
    function _mouseDownEvent( type, evt ) {
        anchorTd = evt.target || evt.srcElement;

        if ( me.queryCommandState( 'highlightcode' ) || domUtils.findParent( anchorTd, function ( node ) {
            return node.tagName == "DIV" && /highlighter/.test( node.id );
        } ) ) {

            return;
        }

        if ( evt.button == 2 )return;
        me.document.body.style.webkitUserSelect = '';


        clearSelectedTd( me.currentSelectedArr );
        domUtils.clearSelectedArr( me.currentSelectedArr );
        //閸︹暟d闁插矁绔熼悙鐟板毊閿涘畮nchorTd娑撳秵妲竧d
        if ( anchorTd.tagName !== 'TD' ) {
            anchorTd = domUtils.findParentByTagName( anchorTd, 'td' ) || anchorTd;
        }

        if ( anchorTd.tagName == 'TD' ) {


            me.addListener( 'mouseover', function ( type, evt ) {
                var tmpTd = evt.target || evt.srcElement;
                _mouseOverEvent.call( me, tmpTd );
                evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
            } );

        } else {


            reset();
        }

    }

    /**
     * 姒х姵鐖ｇ粔璇插З娴滃娆�
     * @param tmpTd
     */
    function _mouseOverEvent( tmpTd ) {
        //闂囷拷顪呴崚銈嗘焽娑撱倓閲淭D閺勵垰鎯佹担宥勭艾閸氬奔绔存稉顏囥�閺嶇厧鍞�
        if ( anchorTd && tmpTd.tagName == "TD" && domUtils.findParentByTagName( anchorTd, 'table' ) == domUtils.findParentByTagName( tmpTd, 'table' ) ) {
            me.document.body.style.webkitUserSelect = 'none';
            var table = tmpTd.parentNode.parentNode.parentNode;
            me.selection.getNative()[browser.ie ? 'empty' : 'removeAllRanges']();
            var range = _getCellsRange( anchorTd, tmpTd );
            _toggleSelect( table, range );
        }
    }

    /**
     * 閸掑洦宕查柅澶婂隘閻樿埖锟�
     * @param table
     * @param cellsRange
     */
    function _toggleSelect( table, cellsRange ) {
        var rows = table.rows;
        clearSelectedTd( me.currentSelectedArr );
        for ( var i = cellsRange.beginRowIndex; i <= cellsRange.endRowIndex; i++ ) {
            for ( var j = cellsRange.beginCellIndex; j <= cellsRange.endCellIndex; j++ ) {
                var td = rows[i].cells[j];
                td.className = "selectTdClass";
                me.currentSelectedArr.push( td );
            }
        }
    }

    //閺囧瓨鏌妑ootRowIndxe,rootCellIndex
    function update( table ) {
        var tds = table.getElementsByTagName( 'td' ),
                rowIndex, cellIndex, rows = table.rows;
        for ( var j = 0, tj; tj = tds[j++]; ) {
            if ( !_isHide( tj ) ) {
                rowIndex = tj.parentNode.rowIndex;
                cellIndex = getIndex( tj );
                for ( var r = 0; r < tj.rowSpan; r++ ) {
                    var c = r == 0 ? 1 : 0;
                    for ( ; c < tj.colSpan; c++ ) {
                        var tmp = rows[rowIndex + r].children[cellIndex + c];


                        tmp.setAttribute( 'rootRowIndex', rowIndex );
                        tmp.setAttribute( 'rootCellIndex', cellIndex );

                    }
                }
            }
            if ( !_isHide( tj ) ) {
                domUtils.removeAttributes( tj, ['rootRowIndex', 'rootCellIndex'] );
            }
            if ( tj.colSpan && tj.colSpan == 1 ) {
                tj.removeAttribute( 'colSpan' )
            }
            if ( tj.rowSpan && tj.rowSpan == 1 ) {
                tj.removeAttribute( 'rowSpan' )
            }
            var width;
            if ( !_isHide( tj ) && (width = tj.style.width) && /%/.test( width ) ) {
                tj.style.width = Math.floor( 100 / tj.parentNode.cells.length ) + '%'
            }
        }
    }

    me.adjustTable = function ( cont ) {
        var table = cont.getElementsByTagName( 'table' );
        for ( var i = 0, ti; ti = table[i++]; ) {
            //婵″倹鐏夌悰銊︾壐閻ㄥ垷lign娑撳秵妲告妯款吇閿涘苯鐨㈡稉宥呭窗娴ｏ拷缂佹瑥鎮楁潏鍦畱block閸忓啰绀岀拋鍓х枂clear:both
            if ( ti.getAttribute( 'align' ) ) {
                var next = ti.nextSibling;
                while ( next ) {
                    if ( domUtils.isBlockElm( next ) ) {
                        break;
                    }
                    next = next.nextSibling;
                }
                if ( next ) {
                    next.style.clear = 'both';
                }
            }
            if(!ti.getAttribute('border') && !domUtils.getComputedStyle(ti,'border')){
                domUtils.addClass(ti,'noBorderTable')
            }
            ti.removeAttribute( '_innerCreateTable' );
            var tds = domUtils.getElementsByTagName( ti, 'td' ),
                    td, tmpTd;

            for ( var j = 0, tj; tj = tds[j++]; ) {
                if ( domUtils.isEmptyNode( tj ) ) {
                    tj.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                }
                var index = getIndex( tj ),
                        rowIndex = tj.parentNode.rowIndex,
                        rows = domUtils.findParentByTagName( tj, 'table' ).rows;

                for ( var r = 0; r < tj.rowSpan; r++ ) {
                    var c = r == 0 ? 1 : 0;
                    for ( ; c < tj.colSpan; c++ ) {

                        if ( !td ) {
                            td = tj.cloneNode( false );

                            td.rowSpan = td.colSpan = 1;
                            td.style.display = 'none';
                            td.innerHTML = browser.ie ? '' : '<br/>';


                        } else {
                            td = td.cloneNode( true )
                        }

                        td.setAttribute( 'rootRowIndex', tj.parentNode.rowIndex );
                        td.setAttribute( 'rootCellIndex', index );
                        if ( r == 0 ) {
                            if ( tj.nextSibling ) {
                                tj.parentNode.insertBefore( td, tj.nextSibling );
                            } else {
                                tj.parentNode.appendChild( td )
                            }
                        } else {
                            var row;
                            if(!rows[rowIndex + r]){
                               row  = ti.insertRow(rowIndex+r)
                            }else{
                               row = rows[rowIndex + r]
                            }

                            tmpTd = row.children[index];
                            if ( tmpTd ) {
                                tmpTd.parentNode.insertBefore( td, tmpTd )
                            } else {
                                //trace:1032
                                rows[rowIndex + r].appendChild( td )
                            }
                        }


                    }
                }


            }
            var bw = domUtils.getComputedStyle( ti, "border-width" );
            if ( bw == '0px' && ti.style.border!="none" || ((bw == ""||bw =="medium") && ti.getAttribute( "border" ) === "0")) { //trace 2377 ie7娑撳骞忛崣鏍ь啍鎼达箑锟芥稉绨僥dium
                domUtils.addClass(ti,"noBorderTable");
            }
        }
        me.fireEvent( "afteradjusttable", cont );
    };
    me.addListener("aftersetcontent",function(){
        me.adjustTable( me.body );
    });

//    me.addListener( 'beforegetcontent', function () {
//        for ( var i = 0, ti, ts = me.document.getElementsByTagName( 'table' ); ti = ts[i++]; ) {
//            var pN = ti.parentNode;
//            if ( pN && pN.getAttribute( 'dropdrag' ) ) {
//                domUtils.remove( pN, true )
//            }
//        }
//    } );
//
//    me.addListener( 'aftergetcontent', function () {
//        if ( !me.queryCommandState( 'source' ) )
//            me.fireEvent( 'afteradjusttable', me.document )
//    } );
//    //table閹锋牗瀚�
//    me.addListener( "afteradjusttable", function ( type, cont ) {
//        var table = cont.getElementsByTagName( "table" ),
//                dragCont = domUtils.createElement( me.document, 'div', {
//                    style:'margin:0;padding:5px;border:0;',
//                    dropdrag:true
//                } );
//
//        for ( var i = 0, ti; ti = table[i++]; ) {
//            var parentNode = ti.parentNode;
//            if ( parentNode && parentNode.nodeType == 1 ) {
//                //閹绘帒鍙嗘禒锝囩垳
//                if ( /syntaxhighlighter/.test( parentNode.className ) ) continue;
//                (function ( ti ) {
//                    var div = dragCont.cloneNode( false );
//                    ti.parentNode.insertBefore( div, ti );
//                    div.appendChild( ti );
//                    var borderStyle;
//                    domUtils.on( div, 'mousemove', function ( evt ) {
//                        var tag = evt.srcElement || evt.target;
//                        if ( tag.tagName.toLowerCase() == "div" ) {
//                            if ( ie && me.body.getAttribute( "contentEditable" ) == 'true' )
//                                me.body.setAttribute( "contentEditable", "false" );
//                            borderStyle = clickPosition( ti, this, evt )
//
//                        }
//                    } );
//                    if ( ie ) {
//                        domUtils.on( div, 'mouseleave', function ( evt ) {
//
//                            if ( domUtils.isTagNode( evt.srcElement, "div" ) && me.body.getAttribute( "contentEditable" ) == 'false' ) {
//
//                                me.body.setAttribute( "contentEditable", "true" );
//                            }
//
//
//                        } );
//                    }
//
//                    domUtils.on( div, "mousedown", function ( evt ) {
//
//                        if ( domUtils.isTagNode( evt.srcElement || evt.target, 'div' ) ) {
//                            if ( ie && me.body.getAttribute( "contentEditable" ) == 'true' )
//                                me.body.setAttribute( "contentEditable", "false" );
//                            var tWidth = ti.offsetWidth,
//                                    tHeight = ti.offsetHeight,
//                                    align = ti.getAttribute( 'align' );
//                            try {
//                                baidu.editor.ui.uiUtils.startDrag( evt, {
//                                    ondragstart:function () {
//                                    },
//                                    ondragmove:function ( x, y ) {
//
//                                        if ( align && align != "left" && /\w?w-/.test( borderStyle ) ) {
//                                            x = -x;
//                                        }
//                                        if ( /^s?[we]/.test( borderStyle ) ) {
//                                            ti.setAttribute( "width", (tWidth + x) > 0 ? tWidth + x : 0 );
//                                        }
//                                        if ( /^s/.test( borderStyle ) ) {
//                                            ti.setAttribute( "height", (tHeight + y) > 0 ? tHeight + y : 0 );
//                                        }
//                                    },
//                                    ondragstop:function () {
//                                    }
//                                }, me.document );
//                            } catch ( e ) {
//                                alert( me.getLang("tableDrag"));
//                            }
//
//                        }
//                    } );
//
//                    domUtils.on( ti, "mouseover", function () {
//                        var div = ti.parentNode;
//                        if ( div && div.parentNode && div.getAttribute( 'dropdrag' ) ) {
//                            domUtils.setStyle( div, "cursor", "text" );
//                            if ( ie && me.body.getAttribute( "contentEditable" ) == 'false' )
//                                me.body.setAttribute( "contentEditable", "true" );
//                        }
//
//
//                    } );
//                })( ti );
//
//            }
//        }
//    } );
//    function clickPosition( table, div, evt ) {
//        var pos = domUtils.getXY( table ),
//                tWidth = table.offsetWidth,
//                tHeight = table.offsetHeight,
//                evtPos = {
//                    top:evt.clientY,
//                    left:evt.clientX
//                },
//                borderStyle = "";
//
//        if ( Math.abs( evtPos.left - pos.x - tWidth ) < 15 ) {
//            //閸欑绱濋崣鍏呯瑓
//            borderStyle = Math.abs( evtPos.top - pos.y - tHeight ) < 15 ? "se-resize" : "e-resize";
//        } else if ( Math.abs( evtPos.top - pos.y - tHeight ) < 15 && Math.abs( evtPos.left - pos.x ) < tWidth ) {
//            //娑擄拷
//            borderStyle = "s-resize";
//        }
//        domUtils.setStyle( div, "cursor", borderStyle || 'text' );
//        return borderStyle;
//    }
};

///import core
///commands 閸欐娊鏁懣婊冨礋
///commandsName  ContextMenu
///commandsTitle  閸欐娊鏁懣婊冨礋
/**
 * 閸欐娊鏁懣婊冨礋
 * @function
 * @name baidu.editor.plugins.contextmenu
 * @author zhanyi
 */

UE.plugins['contextmenu'] = function () {
    var me = this,
            lang = me.getLang( "contextMenu" ),
            menu,
            items = me.options.contextMenu || [
                {label:lang['delete'], cmdName:'delete'},
                {label:lang['selectall'], cmdName:'selectall'},
                {
                    label:lang.deletecode,
                    cmdName:'highlightcode',
                    icon:'deletehighlightcode'
                },
                {
                    label:lang.cleardoc,
                    cmdName:'cleardoc',
                    exec:function () {
                        if ( confirm( lang.confirmclear ) ) {
                            this.execCommand( 'cleardoc' );
                        }
                    }
                },
                '-',
                {
                    label:lang.unlink,
                    cmdName:'unlink'
                },
                '-',
                {
                    group:lang.paragraph,
                    icon:'justifyjustify',
                    subMenu:[
                        {
                            label:lang.justifyleft,
                            cmdName:'justify',
                            value:'left'
                        },
                        {
                            label:lang.justifyright,
                            cmdName:'justify',
                            value:'right'
                        },
                        {
                            label:lang.justifycenter,
                            cmdName:'justify',
                            value:'center'
                        },
                        {
                            label:lang.justifyjustify,
                            cmdName:'justify',
                            value:'justify'
                        }
                    ]
                },
                '-',
                {
                    label:lang.edittable,
                    cmdName:'edittable',
                    exec:function () {
                        this.ui._dialogs['inserttableDialog'].open();
                    }
                },
                {
                    label:lang.edittd,
                    cmdName:'edittd',
                    exec:function () {
                        //婵″倹鐏夊▽鈩冩箒閸掓稑缂撻敍灞藉灡瀵よ桨绔存稉瀣帥
                        if ( UE.ui['edittd'] ) {
                            new UE.ui['edittd']( this );
                        }
                        this.ui._dialogs['edittdDialog'].open();
                    }
                },
                {
                    group:lang.table,
                    icon:'table',
                    subMenu:[
                        {
                            label:lang.inserttable,
                            cmdName:'inserttable'
                        },
                        {
                            label:lang.deletetable,
                            cmdName:'deletetable'
                        },
                        {
                            label:lang.insertparagraphbeforetable,
                            cmdName:'insertparagraphbeforetable'
                        },
                        {
                            label:lang.deleterow,
                            cmdName:'deleterow'
                        },
                        {
                            label:lang.deletecol,
                            cmdName:'deletecol'
                        },
                        {
                            label:lang.insertrow,
                            cmdName:'insertrow'
                        },
                        {
                            label:lang.insertcol,
                            cmdName:'insertcol'
                        },
                        {
                            label:lang.mergeright,
                            cmdName:'mergeright'
                        },
                        {
                            label:lang.mergedown,
                            cmdName:'mergedown'
                        },
                        {
                            label:lang.splittorows,
                            cmdName:'splittorows'
                        },
                        {
                            label:lang.splittocols,
                            cmdName:'splittocols'
                        },
                        {
                            label:lang.mergecells,
                            cmdName:'mergecells'
                        },
                        {
                            label:lang.splittocells,
                            cmdName:'splittocells'
                        }
                    ]
                },
                '-',
                {
                    label:lang['copy'],
                    cmdName:'copy',
                    exec:function () {
                        alert( lang.copymsg );
                    },
                    query:function () {
                        return 0;
                    }
                },
                {
                    label:lang['paste'],
                    cmdName:'paste',
                    exec:function () {
                        alert( lang.pastemsg );
                    },
                    query:function () {
                        return 0;
                    }
                },{
                    label:lang['highlightcode'],
                    cmdName:'highlightcode',
                    exec:function () {
                        if ( UE.ui['highlightcode'] ) {
                            new UE.ui['highlightcode']( this );
                        }
                        this.ui._dialogs['highlightcodeDialog'].open();
                    }
                }
            ];
    if ( !items.length ) {
        return;
    }
    var uiUtils = UE.ui.uiUtils;
    me.addListener( 'contextmenu', function ( type, evt ) {
        var offset = uiUtils.getViewportOffsetByEvent( evt );
        me.fireEvent( 'beforeselectionchange' );
        if ( menu ) {
            menu.destroy();
        }
        for ( var i = 0, ti, contextItems = []; ti = items[i]; i++ ) {
            var last;
            (function ( item ) {
                if ( item == '-' ) {
                    if ( (last = contextItems[contextItems.length - 1 ] ) && last !== '-' ) {
                        contextItems.push( '-' );
                    }
                } else if ( item.hasOwnProperty( "group" ) ) {
                    for ( var j = 0, cj, subMenu = []; cj = item.subMenu[j]; j++ ) {
                        (function ( subItem ) {
                            if ( subItem == '-' ) {
                                if ( (last = subMenu[subMenu.length - 1 ] ) && last !== '-' ) {
                                    subMenu.push( '-' );
                                }
                            } else {
                                if ( (me.commands[subItem.cmdName] || UE.commands[subItem.cmdName] || subItem.query) &&
                                        (subItem.query ? subItem.query() : me.queryCommandState( subItem.cmdName )) > -1 ) {
                                    subMenu.push( {
                                        'label':subItem.label || me.getLang( "contextMenu." + subItem.cmdName + (subItem.value || '') ),
                                        'className':'edui-for-' + subItem.cmdName + (subItem.value || ''),
                                        onclick:subItem.exec ? function () {
                                            subItem.exec.call( me );
                                        } : function () {
                                            me.execCommand( subItem.cmdName, subItem.value );
                                        }
                                    } );
                                }
                            }
                        })( cj );
                    }
                    if ( subMenu.length ) {
                        contextItems.push( {
                            //todo 娣囶喗顒滈幋鎰殰閸斻劏骞忛崣鏍ㄦ煙瀵拷
                            'label':item.icon == "table" ? me.getLang( "contextMenu.table" ) : me.getLang( "contextMenu.paragraph" ),
                            className:'edui-for-' + item.icon,
                            'subMenu':{
                                items:subMenu,
                                editor:me
                            }
                        } );
                    }

                } else {
                    //閺堝褰查懗绲歰mmmand濞屸剝婀侀崝鐘烘祰閸欐娊鏁稉宥堝厴閸戠儤娼甸敍灞惧灗閼板懏鐥呴張濉﹐mmand娑旂喐鍏傞懗钘夌潔缁�搫鍤弶銉﹀潑閸旂垗uery閺傝纭�
                    if ( (me.commands[item.cmdName] || UE.commands[item.cmdName] || item.query) &&
                            (item.query ? item.query.call(me) : me.queryCommandState( item.cmdName )) > -1 ) {
                        //highlight todo
                        if ( item.cmdName == 'highlightcode' ) {
                            if(me.queryCommandState( item.cmdName ) == 1 && item.icon != 'deletehighlightcode'){
                                return;
                            }
                            if(me.queryCommandState( item.cmdName ) != 1 && item.icon == 'deletehighlightcode'){
                                return;
                            }
                        }
                        contextItems.push( {
                            'label':item.label || me.getLang( "contextMenu." + item.cmdName ),
                            className:'edui-for-' + (item.icon ? item.icon : item.cmdName + (item.value || '')),
                            onclick:item.exec ? function () {
                                item.exec.call( me );
                            } : function () {
                                me.execCommand( item.cmdName, item.value );
                            }
                        } );
                    }

                }

            })( ti );
        }
        if ( contextItems[contextItems.length - 1] == '-' ) {
            contextItems.pop();
        }
        menu = new UE.ui.Menu( {
            items:contextItems,
            editor:me
        } );
        menu.render();
        menu.showAt( offset );
        domUtils.preventDefault( evt );
        if ( browser.ie ) {
            var ieRange;
            try {
                ieRange = me.selection.getNative().createRange();
            } catch ( e ) {
                return;
            }
            if ( ieRange.item ) {
                var range = new dom.Range( me.document );
                range.selectNode( ieRange.item( 0 ) ).select( true, true );

            }
        }
    } );
};



///import core
///commands 閸旂姷鐭�閺傛粈缍�娑撳﹥鐖�娑撳鐖�
///commandsName  Bold,Italic,Subscript,Superscript
///commandsTitle  閸旂姷鐭�閸旂姵鏋�娑撳鐖�娑撳﹥鐖�
/**
 * b u i缁涘鐔�涵锟藉閼宠棄鐤勯悳锟�
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName    bold閸旂姷鐭栭妴淇皌alic閺傛粈缍嬮妴淇縰bscript娑撳﹥鐖ｉ妴淇縰perscript娑撳鐖ｉ妴锟�
*/
UE.plugins['basestyle'] = function(){
    var basestyles = {
            'bold':['strong','b'],
            'italic':['em','i'],
            'subscript':['sub'],
            'superscript':['sup']
        },
        getObj = function(editor,tagNames){
            return domUtils.filterNodeList(editor.selection.getStartElementPath(),tagNames);
        },
        me = this;
    for ( var style in basestyles ) {
        (function( cmd, tagNames ) {
            me.commands[cmd] = {
                execCommand : function( cmdName ) {

                    var range = new dom.Range(me.document),obj = '';
                    //table閻ㄥ嫬顦甸悶锟�
                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                        for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                            if(ci.style.display != 'none'){
                                range.selectNodeContents(ci).select();
                                //trace:943
                                !obj && (obj = getObj(this,tagNames));
                                if(cmdName == 'superscript' || cmdName == 'subscript'){
                                    
                                    if(!obj || obj.tagName.toLowerCase() != cmdName){
                                        range.removeInlineStyle(['sub','sup']);
                                    }

                                }
                                obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] );
                            }

                        }
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }else{
                        range = me.selection.getRange();
                        obj = getObj(this,tagNames);

                        if ( range.collapsed ) {
                            if ( obj ) {
                                var tmpText =  me.document.createTextNode('');
                                range.insertNode( tmpText ).removeInlineStyle( tagNames );

                                range.setStartBefore(tmpText);
                                domUtils.remove(tmpText);
                            } else {
                                
                                var tmpNode = range.document.createElement( tagNames[0] );
                                if(cmdName == 'superscript' || cmdName == 'subscript'){
                                    tmpText = me.document.createTextNode('');
                                    range.insertNode(tmpText)
                                        .removeInlineStyle(['sub','sup'])
                                        .setStartBefore(tmpText)
                                        .collapse(true);

                                }
                                range.insertNode( tmpNode ).setStart( tmpNode, 0 );
                                


                            }
                            range.collapse( true );

                        } else {
                            if(cmdName == 'superscript' || cmdName == 'subscript'){
                                if(!obj || obj.tagName.toLowerCase() != cmdName){
                                    range.removeInlineStyle(['sub','sup']);
                                }

                            }
                            obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] );
                        }

                        range.select();
                        
                    }

                    return true;
                },
                queryCommandState : function() {
                   if(this.highlight){
                       return -1;
                   }
                   return getObj(this,tagNames) ? 1 : 0;
                }
            };
        })( style, basestyles[style] );

    }
};


///import core
///commands 闁灏捄顖氱窞
///commandsName  ElementPath,elementPathEnabled
///commandsTitle  闁灏捄顖氱窞
/**
 * 闁灏捄顖氱窞
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName     elementpath闁灏捄顖氱窞
 */
UE.plugins['elementpath'] = function(){

    var currentLevel,
        tagNames,
        me = this;
    me.setOpt('elementPathEnabled',true);
    if(!me.options.elementPathEnabled){
        return;
    }
    me.commands['elementpath'] = {
        execCommand : function( cmdName, level ) {
            var start = tagNames[level],
                range = me.selection.getRange();
            me.currentSelectedArr && domUtils.clearSelectedArr(me.currentSelectedArr);
            currentLevel = level*1;
            if(dtd.$tableContent[start.tagName]){
                switch (start.tagName){
                    case 'TD':me.currentSelectedArr = [start];
                            start.className = me.options.selectedTdClass;
                            break;
                    case 'TR':
                        var cells = start.cells;
                        for(var i=0,ti;ti=cells[i++];){
                            me.currentSelectedArr.push(ti);
                            ti.className = me.options.selectedTdClass;
                        }
                        break;
                    case 'TABLE':
                    case 'TBODY':

                        var rows = start.rows;
                        for(var i=0,ri;ri=rows[i++];){
                            cells = ri.cells;
                            for(var j=0,tj;tj=cells[j++];){
                                 me.currentSelectedArr.push(tj);
                                tj.className = me.options.selectedTdClass;
                            }
                        }

                }
                start = me.currentSelectedArr[0];
                if(domUtils.isEmptyNode(start)){
                    range.setStart(start,0).setCursor();
                }else{
                   range.selectNodeContents(start).select();
                }
            }else{
                range.selectNode(start).select();

            }
        },
        queryCommandValue : function() {
            //娴溠呮晸娑擄拷閲滈崜顖涙拱閿涘奔绗夐懗鎴掓叏閺�懓甯弶銉ф畱startElementPath;
            var parents = [].concat(this.selection.getStartElementPath()).reverse(),
                names = [];
            tagNames = parents;
            for(var i=0,ci;ci=parents[i];i++){
                if(ci.nodeType == 3) {
                    continue;
                }
                var name = ci.tagName.toLowerCase();
                if(name == 'img' && ci.getAttribute('anchorname')){
                    name = 'anchor';
                }
                names[i] = name;
                if(currentLevel == i){
                   currentLevel = -1;
                    break;
                }
            }
            return names;
        }
    };
};


///import core
///import plugins\removeformat.js
///commands 閺嶇厧绱￠崚锟�
///commandsName  FormatMatch
///commandsTitle  閺嶇厧绱￠崚锟�
/**
 * 閺嶇厧绱￠崚鍑ょ礉閸欘亝鐗稿寤糿line閻拷
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    formatmatch閹笛嗩攽閺嶇厧绱￠崚锟�
 */
UE.plugins['formatmatch'] = function(){

    var me = this,
        list = [],img,
        flag = 0;

     me.addListener('reset',function(){
         list = [];
         flag = 0;
     });

    function addList(type,evt){
        
        if(browser.webkit){
            var target = evt.target.tagName == 'IMG' ? evt.target : null;
        }

        function addFormat(range){

            if(text && (!me.currentSelectedArr || !me.currentSelectedArr.length)){
                range.selectNode(text);
            }
            return range.applyInlineStyle(list[list.length-1].tagName,null,list);

        }

        me.undoManger && me.undoManger.save();

        var range = me.selection.getRange(),
            imgT = target || range.getClosedNode();
        if(img && imgT && imgT.tagName == 'IMG'){
            //trace:964

            imgT.style.cssText += ';float:' + (img.style.cssFloat || img.style.styleFloat ||'none') + ';display:' + (img.style.display||'inline');

            img = null;
        }else{
            if(!img){
                var collapsed = range.collapsed;
                if(collapsed){
                    var text = me.document.createTextNode('match');
                    range.insertNode(text).select();


                }
                me.__hasEnterExecCommand = true;
                //娑撳秷鍏橀幎濂瞝ock娑撳﹦娈戠仦鐐达拷楠炲弶甯�
                //trace:1553
                var removeFormatAttributes = me.options.removeFormatAttributes;
                me.options.removeFormatAttributes = '';
                me.execCommand('removeformat');
                me.options.removeFormatAttributes = removeFormatAttributes;
                me.__hasEnterExecCommand = false;
                //trace:969
                range = me.selection.getRange();
                if(list.length == 0){

                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }
                }else{
                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){

                        for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                            range.selectNodeContents(ci);
                            addFormat(range);

                        }
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }else{


                        addFormat(range);

                    }
                }
                if(!me.currentSelectedArr || !me.currentSelectedArr.length){
                    if(text){
                        range.setStartBefore(text).collapse(true);

                    }

                    range.select();
                }
                text && domUtils.remove(text);
            }

        }




        me.undoManger && me.undoManger.save();
        me.removeListener('mouseup',addList);
        flag = 0;
    }

    me.commands['formatmatch'] = {
        execCommand : function( cmdName ) {
          
            if(flag){
                flag = 0;
                list = [];
                 me.removeListener('mouseup',addList);
                return;
            }


              
            var range = me.selection.getRange();
            img = range.getClosedNode();
            if(!img || img.tagName != 'IMG'){
               range.collapse(true).shrinkBoundary();
               var start = range.startContainer;
               list = domUtils.findParents(start,true,function(node){
                   return !domUtils.isBlockElm(node) && node.nodeType == 1;
               });
               //a娑撳秷鍏橀崝鐘插弳閺嶇厧绱￠崚锟�楠炴湹绗栭崗瀣畷閼哄倻鍋�
               for(var i=0,ci;ci=list[i];i++){
                   if(ci.tagName == 'A'){
                       list.splice(i,1);
                       break;
                   }
               }

            }

            me.addListener('mouseup',addList);
            flag = 1;


        },
        queryCommandState : function() {
             if(this.highlight){
                       return -1;
                   }
            return flag;
        },
        notNeedUndo : 1
    };
};


///import core
///commands 閺屻儲澹橀弴鎸庡床
///commandsName  SearchReplace
///commandsTitle  閺屻儴顕楅弴鎸庡床
///commandsDialog  dialogs\searchreplace\searchreplace.html
/**
 * @description 閺屻儲澹橀弴鎸庡床
 * @author zhanyi
 */
UE.plugins['searchreplace'] = function(){

    var currentRange,
        first,
        me = this;
    me.addListener('reset',function(){
        currentRange = null;
        first = null;
    });
    me.commands['searchreplace'] = {

            execCommand : function(cmdName,opt){
               	var me = this,
                    sel = me.selection,
                    range,
                    nativeRange,
                    num = 0,
                opt = utils.extend(opt,{
                    all : false,
                    casesensitive : false,
                    dir : 1
                },true);


                if(browser.ie){
                    while(1){
                        var tmpRange;
                        nativeRange = me.document.selection.createRange();
                        tmpRange = nativeRange.duplicate();
                        tmpRange.moveToElementText(me.document.body);
                        if(opt.all){
                            first = 0;
                            opt.dir = 1;
                            
                            if(currentRange){
                                tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',currentRange);
                            }
                        }else{
                            tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',nativeRange);
                            if(opt.hasOwnProperty("replaceStr")){
                                tmpRange.setEndPoint(opt.dir == -1 ? 'StartToEnd' : 'EndToStart',nativeRange);
                            }
                        }
                        nativeRange = tmpRange.duplicate();



                        if(!tmpRange.findText(opt.searchStr,opt.dir,opt.casesensitive ? 4 : 0)){
                            currentRange = null;
                            tmpRange = me.document.selection.createRange();
                            tmpRange.scrollIntoView();
                            return num;
                        }
                        tmpRange.select();
                        //閺囨寧宕�
                        if(opt.hasOwnProperty("replaceStr")){
                            range = sel.getRange();
                            range.deleteContents().insertNode(range.document.createTextNode(opt.replaceStr)).select();
                            currentRange = sel.getNative().createRange();

                        }
                        num++;
                        if(!opt.all){
                            break;
                        }
                    }
                }else{
                    var w = me.window,nativeSel = sel.getNative(),tmpRange;
                    while(1){
                        if(opt.all){
                            if(currentRange){
                                currentRange.collapse(false);
                                nativeRange = currentRange;

                            }else{
                                nativeRange  = me.document.createRange();
                                nativeRange.setStart(me.document.body,0);

                            }
                            nativeSel.removeAllRanges();
                            nativeSel.addRange( nativeRange );
                            first = 0;
                            opt.dir = 1;
                        }else{
                            //safari瀵懓鍤仦鍌︾礉閸樼喓鏁撳鑼病閹靛彞绗夐崚鐨塧nge娴滃棴绱濋幍锟戒簰闂囷拷顪呴崗鍫ワ拷閸ョ偞娼甸敍灞藉晙閸欐牕甯悽锟�
                            if(browser.safari){
                                me.selection.getRange().select();

                            }
                            nativeRange = w.getSelection().getRangeAt(0);


                           
                            if(opt.hasOwnProperty("replaceStr")){
                                nativeRange.collapse(opt.dir == 1 ? true : false);
                            }
                        }

                        //婵″倹鐏夐弰顖滎儑娑擄拷顐奸獮鏈电瑬濞寸兘锟芥稉顓濈啊閸愬懎顔愰柇锝呮皑鐟曚焦绔婚梽銈忕礉娑撶ind閸嬫艾鍣径锟�
                       
                        if(!first){
                            nativeRange.collapse( opt.dir <0 ? true : false);
                            nativeSel.removeAllRanges();
                            nativeSel.addRange( nativeRange );
                        }else{
                            nativeSel.removeAllRanges();
                        }

                        if(!w.find(opt.searchStr,opt.casesensitive,opt.dir < 0 ? true : false) ) {
                            currentRange = null;
                            nativeSel.removeAllRanges();

                            return num;
                        }
                        first = 0;
                        range = w.getSelection().getRangeAt(0);
                        if(!range.collapsed){

                            if(opt.hasOwnProperty("replaceStr")){
                                range.deleteContents();
                                var text = w.document.createTextNode(opt.replaceStr);
                                range.insertNode(text);
                                range.selectNode(text);
                                nativeSel.addRange(range);
                                currentRange = range.cloneRange();
                            }
                        }
                        num++;
                        if(!opt.all){
                            break;
                        }
                    }

                }
                return true;
            }
    };

};
///import core
///commands 閼奉亜鐣炬稊澶嬬壉瀵拷
///commandsName  CustomStyle
///commandsTitle  閼奉亜鐣炬稊澶嬬壉瀵拷
UE.plugins['customstyle'] = function() {
    var me = this;
    me.setOpt({ 'customstyle':[
        {tag:'h1',name:'tc', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
        {tag:'h1',name:'tl', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;'},
        {tag:'span',name:'im', style:'font-size:16px;font-style:italic;font-weight:bold;line-height:18px;'},
        {tag:'span',name:'hi', style:'font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;'}
    ]});
    me.commands['customstyle'] = {
        execCommand : function(cmdName, obj) {
            var me = this,
                    tagName = obj.tag,
                    node = domUtils.findParent(me.selection.getStart(), function(node) {
                        return node.getAttribute('label');
                    }, true),
                    range,bk,tmpObj = {};
            for (var p in obj) {
               if(obj[p]!==undefined)
                    tmpObj[p] = obj[p];
            }
            delete tmpObj.tag;
            if (node && node.getAttribute('label') == obj.label) {
                range = this.selection.getRange();
                bk = range.createBookmark();
                if (range.collapsed) {
                    //trace:1732 閸掔姵甯�懛顏勭暰娑斿鐖ｇ粵鎾呯礉鐟曚焦婀乸閺夈儱娲栨繅顐ょ彲娴ｏ拷
                    if(dtd.$block[node.tagName]){
                        var fillNode = me.document.createElement('p');
                        domUtils.moveChild(node, fillNode);
                        node.parentNode.insertBefore(fillNode, node);
                        domUtils.remove(node);
                    }else{
                        domUtils.remove(node,true);
                    }

                } else {

                    var common = domUtils.getCommonAncestor(bk.start, bk.end),
                            nodes = domUtils.getElementsByTagName(common, tagName);
                    if(new RegExp(tagName,'i').test(common.tagName)){
                        nodes.push(common);
                    }
                    for (var i = 0,ni; ni = nodes[i++];) {
                        if (ni.getAttribute('label') == obj.label) {
                            var ps = domUtils.getPosition(ni, bk.start),pe = domUtils.getPosition(ni, bk.end);
                            if ((ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                                    &&
                                    (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                                    )
                                if (dtd.$block[tagName]) {
                                    var fillNode = me.document.createElement('p');
                                    domUtils.moveChild(ni, fillNode);
                                    ni.parentNode.insertBefore(fillNode, ni);
                                }
                            domUtils.remove(ni, true);
                        }
                    }
                    node = domUtils.findParent(common, function(node) {
                        return node.getAttribute('label') == obj.label;
                    }, true);
                    if (node) {

                        domUtils.remove(node, true);

                    }

                }
                range.moveToBookmark(bk).select();
            } else {
                if (dtd.$block[tagName]) {
                    this.execCommand('paragraph', tagName, tmpObj,'customstyle');
                    range = me.selection.getRange();
                    if (!range.collapsed) {
                        range.collapse();
                        node = domUtils.findParent(me.selection.getStart(), function(node) {
                            return node.getAttribute('label') == obj.label;
                        }, true);
                        var pNode = me.document.createElement('p');
                        domUtils.insertAfter(node, pNode);
                        domUtils.fillNode(me.document, pNode);
                        range.setStart(pNode, 0).setCursor();
                    }
                } else {

                    range = me.selection.getRange();
                    if (range.collapsed) {
                        node = me.document.createElement(tagName);
                        domUtils.setAttributes(node, tmpObj);
                        range.insertNode(node).setStart(node, 0).setCursor();

                        return;
                    }

                    bk = range.createBookmark();
                    range.applyInlineStyle(tagName, tmpObj).moveToBookmark(bk).select();
                }
            }

        },
        queryCommandValue : function() {
            var parent = domUtils.filterNodeList(
                this.selection.getStartElementPath(),
                function(node){return node.getAttribute('label')}
            );
            return  parent ? parent.getAttribute('label') : '';
        },
        queryCommandState : function() {
            return this.highlight ? -1 : 0;
        }
    };
    //瑜版挸骞撻幒濉﹗stomstyle閺勵垽绱濇俊鍌涚亯閺勵垰娼￠崗鍐閿涘瞼鏁娴狅絾娴�
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;

        if (keyCode == 32 || keyCode == 13) {
            var range = me.selection.getRange();
            if (range.collapsed) {
                var node = domUtils.findParent(me.selection.getStart(), function(node) {
                    return node.getAttribute('label');
                }, true);
                if (node && dtd.$block[node.tagName] && domUtils.isEmptyNode(node)) {
                        var p = me.document.createElement('p');
                        domUtils.insertAfter(node, p);
                        domUtils.fillNode(me.document, p);
                        domUtils.remove(node);
                        range.setStart(p, 0).setCursor();


                }
            }
        }
    });
};
///import core
///commandsName  catchRemoteImage
/**
 * 鏉╂粎鈻奸崶鍓у閹舵挸褰�瑜版挸绱戦崥顖涙拱閹绘帊娆㈤弮鑸靛閺堝绗夌粭锕�値閺堫剙婀撮崺鐔锋倳閻ㄥ嫬娴橀悧鍥厴鐏忓棜顤嗛幎鎾冲絿閹存劒璐熼張顒�勾閺堝秴濮熼崳銊ょ瑐閻ㄥ嫬娴橀悧锟�
 *
 */
UE.plugins['catchremoteimage'] = function () {
    if (this.options.catchRemoteImageEnable===false){
        return;
    }
    var me = this;
    this.setOpt({
            localDomain:["127.0.0.1","localhost","img.baidu.com"],
            separater:'ue_separate_ue',
            catchFieldName:"upfile",
            catchRemoteImageEnable:true
        });
    var ajax = UE.ajax,
        localDomain = me.options.localDomain ,
        catcherUrl = me.options.catcherUrl,
        separater = me.options.separater;
    function catchremoteimage(imgs, callbacks) {
        var submitStr = imgs.join(separater);
        var tmpOption = {
            timeout:60000, //閸楁洑缍呴敍姘嚑缁夋帪绱濋崶鐐剁殶鐠囬攱鐪扮搾鍛鐠佸墽鐤嗛妴鍌滄窗閺嶅洨鏁ら幋宄邦渾閺嬫粎缍夐柅鐔剁瑝閺勵垰绶㈣箛顐ゆ畱鐠囨繃顒濇径鍕紦鐠侇喛顔曠純顔荤娑擃亣绶濇径褏娈戦弫鏉匡拷
            onsuccess:callbacks["success"],
            onerror:callbacks["error"]
        };
        tmpOption[me.options.catchFieldName] = submitStr;
        ajax.request(catcherUrl, tmpOption);
    }

    me.addListener("afterpaste", function () {
        me.fireEvent("catchRemoteImage");
    });

    me.addListener("catchRemoteImage", function () {
        var remoteImages = [];
        var imgs = domUtils.getElementsByTagName(me.document, "img");
        var test = function (src,urls) {
            for (var j = 0, url; url = urls[j++];) {
                if (src.indexOf(url) !== -1) {
                    return true;
                }
            }
            return false;
        };
        for (var i = 0, ci; ci = imgs[i++];) {
            if (ci.getAttribute("word_img")){
                continue;
            }
            var src = ci.getAttribute("data_ue_src") || ci.src || "";
            if (/^(https?|ftp):/i.test(src) && !test(src,localDomain)) {
                remoteImages.push(src);
            }
        }
        if (remoteImages.length) {
            catchremoteimage(remoteImages, {
                //閹存劕濮涢幎鎾冲絿
                success:function (xhr) {
                    try {
                        var info = eval("(" + xhr.responseText + ")");
                    } catch (e) {
                        return;
                    }
                    var srcUrls = info.srcUrl.split(separater),
                        urls = info.url.split(separater);
                    for (var i = 0, ci; ci = imgs[i++];) {
                        var src = ci.getAttribute("data_ue_src") || ci.src || "";
                        for (var j = 0, cj; cj = srcUrls[j++];) {
                            var url = urls[j - 1];
                            if (src == cj && url != "error") {  //閹舵挸褰囨径杈Е閺冩湹绗夐崑姘禌閹广垹顦甸悶锟�
                                //閸︽澘娼冩穱顔筋劀
                                var newSrc = me.options.catcherPath + url;
                                domUtils.setAttributes(ci, {
                                    "src":newSrc,
                                    "data_ue_src":newSrc
                                });
                                break;
                            }
                        }
                    }
                    me.fireEvent('catchremotesuccess')
                },
                //閸ョ偠鐨熸径杈Е閿涘本婀板▎陇顕Ч鍌濈Т閺冿拷
                error:function () {
                    me.fireEvent("catchremoteerror");
                }
            });
        }

    });
};
///import core
///commandsName  snapscreen
///commandsTitle  閹搭亜鐫�
/**
 * 閹搭亜鐫嗛幓鎺嶆
 */
UE.commands['snapscreen'] = {
    execCommand: function(){
        var me = this,lang = me.getLang("snapScreen_plugin");
        me.setOpt({
               snapscreenServerPort: 80                                    //鐏炲繐绠烽幋顏勬禈閻ㄥ墕erver缁旑垳顏崣锟�
              ,snapscreenImgAlign: 'left'                                //閹搭亜娴橀惃鍕禈閻楀洭绮拋銈囨畱閹烘帞澧楅弬鐟扮础
        });
        var editorOptions = me.options;

        if(!browser.ie){
            alert(lang.browserMsg);
            return;
        }

        var onSuccess = function(rs){
            try{
                rs = eval("("+ rs +")");
            }catch(e){
                alert(lang.callBackErrorMsg);
                return;
            }

            if(rs.state != 'SUCCESS'){
                alert(rs.state);
                return;
            }
            me.execCommand('insertimage', {
                src: editorOptions.snapscreenPath + rs.url,
                floatStyle: editorOptions.snapscreenImgAlign,
                data_ue_src:editorOptions.snapscreenPath + rs.url
            });
        };
        var onStartUpload = function(){
            //瀵拷顬婇幋顏勬禈娑撳﹣绱�
        };
        var onError = function(){
            alert(lang.uploadErrorMsg);
        };
        try{
            var nativeObj = new ActiveXObject('Snapsie.CoSnapsie');
            nativeObj.saveSnapshot(editorOptions.snapscreenHost, editorOptions.snapscreenServerUrl, editorOptions.snapscreenServerPort, onStartUpload,onSuccess,onError);
        }catch(e){
            me.ui._dialogs['snapscreenDialog'].open();
        }
    },
    queryCommandState: function(){
        return this.highlight || !browser.ie ? -1 :0;
    }
};

///import core
///commandsName  attachment
///commandsTitle  闂勫嫪娆㈡稉濠佺炊
UE.commands["attachment"] = {
    queryCommandState:function(){
        return this.highlight ? -1 :0;
    }
};
/**
 * Created by JetBrains PhpStorm.
 * User: taoqili
 * Date: 12-5-7
 * Time: 娑撳宕�:37
 * To change this template use File | Settings | File Templates.
 */
UE.plugins['webapp'] = function () {
    var me = this;
    function createInsertStr( obj, toIframe, addParagraph ) {
        return !toIframe ?
                (addParagraph ? '<p>' : '') + '<img title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"' +
                        ' src="' + me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" style="background:url(' + obj.logo+') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="' + obj.url + '" />' +
                        (addParagraph ? '</p>' : '')
                :
                '<iframe class="edui-faked-webapp" title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"  scrolling="no" frameborder="0" src="' + obj.url + '" logo_url = '+obj.logo+'></iframe>';
    }

    function switchImgAndIframe( img2frame ) {
        var tmpdiv,
                nodes = domUtils.getElementsByTagName( me.document, !img2frame ? "iframe" : "img" );
        for ( var i = 0, node; node = nodes[i++]; ) {
            if ( node.className != "edui-faked-webapp" ){
                continue;
            }
            tmpdiv = me.document.createElement( "div" );
            tmpdiv.innerHTML = createInsertStr( img2frame ? {url:node.getAttribute( "_url" ), width:node.width, height:node.height,title:node.title,logo:node.style.backgroundImage.replace("url(","").replace(")","")} : {url:node.getAttribute( "src", 2 ),title:node.title, width:node.width, height:node.height,logo:node.getAttribute("logo_url")}, img2frame ? true : false,false );
            node.parentNode.replaceChild( tmpdiv.firstChild, node );
        }
    }

    me.addListener( "beforegetcontent", function () {
        switchImgAndIframe( true );
    } );
    me.addListener( 'aftersetcontent', function () {
        switchImgAndIframe( false );
    } );
    me.addListener( 'aftergetcontent', function ( cmdName ) {
        if ( cmdName == 'aftergetcontent' && me.queryCommandState( 'source' ) ){
            return;
        }
        switchImgAndIframe( false );
    } );

    me.commands['webapp'] = {
        execCommand:function ( cmd, obj ) {
            me.execCommand( "inserthtml", createInsertStr( obj, false,true ) );
        },
        queryCommandState:function () {
            return me.highlight ? -1 : 0;
        }
    };
};

///import core
///commands 濡剝婢�
///commandsName  template
///commandsTitle  濡剝婢�
///commandsDialog  dialogs\template\template.html
UE.plugins['template'] = function () {
    UE.commands['template'] = {
        execCommand:function (cmd, obj) {
            obj.html && this.execCommand("inserthtml", obj.html);
        },
        queryCommandState:function () {
            return this.highlight ? -1 : 0;
        }
    };
    this.addListener("click", function (type, evt) {
        var el = evt.target || evt.srcElement,
            range = this.selection.getRange();
        var tnode = domUtils.findParent(el, function (node) {
            if (node.className && domUtils.hasClass(node, "ue_t")) {
                return node;
            }
        }, true);
        tnode && range.selectNode(tnode).shrinkBoundary().select();
    });
    this.addListener("keydown", function (type, evt) {
        var range = this.selection.getRange();
        if (!range.collapsed) {
            if (!evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
                var tnode = domUtils.findParent(range.startContainer, function (node) {
                    if (node.className && domUtils.hasClass(node, "ue_t")) {
                        return node;
                    }
                }, true);
                if (tnode) {
                    domUtils.removeClasses(tnode, ["ue_t"]);
                }
            }
        }
    });
};

///import core
///import plugins/inserthtml.js
///commands 闂婂厖绠�
///commandsName InsertMusic
///commandsTitle  閹绘帒鍙嗛棅鍏呯
///commandsDialog  dialogs\music\music.html
UE.plugins['music'] = function () {
    var me = this,
        div;

    /**
     * 閸掓稑缂撻幓鎺戝弳闂婂厖绠扮�妤冾儊缁愶拷
     * @param url 闂婂厖绠伴崷鏉挎絻
     * @param width 闂婂厖绠扮�钘夊
     * @param height 闂婂厖绠版妯哄
     * @param align 闂冩挳娲︾�褰掔秷
     * @param toEmbed 閺勵垰鎯佹禒顨僱ash娴狅絾娴涢弰鍓с仛
     * @param addParagraph  閺勵垰鎯侀棁锟筋渽濞ｈ濮濸閺嶅洨顒�
     */
    function creatInsertStr(url,width,height,align,toEmbed,addParagraph){
        return  !toEmbed ?
            (addParagraph? ('<p '+ (align !="none" ? ( align == "center"? ' style="text-align:center;" ':' style="float:"'+ align ) : '') + '>'): '') +
                '<img align="'+align+'" width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-music"' +
                ' src="'+me.options.langPath+me.options.lang+'/images/music.png" />' +
                (addParagraph?'</p>':'')
            :
            '<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '" align="' + align + '"' +
                ( align !="none" ? ' style= "'+ ( align == "center"? "display:block;":" float: "+ align )  + '"' :'' ) +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(img2embed) {
        var tmpdiv,
            nodes = domUtils.getElementsByTagName(me.document, !img2embed ? "embed" : "img");
        for (var i = 0, node; node = nodes[i++];) {
            if (node.className != "edui-faked-music") {
                continue;
            }
            tmpdiv = me.document.createElement("div");
            //閸忓牏婀協loat閸︺劎婀卆lign,濞搭喖濮╅張澶屾畱閺勵垱妞傞崐娆愭Ц閸︹暍loat娑撳﹤鐣炬稊澶屾畱
            var align = node.style.cssFloat;
            tmpdiv.innerHTML = creatInsertStr(img2embed ? node.getAttribute("_url") : node.getAttribute("src"), node.width, node.height, node.getAttribute("align"), img2embed);
            node.parentNode.replaceChild(tmpdiv.firstChild, node);
        }
    }

    me.addListener("beforegetcontent", function () {
        switchImgAndEmbed(true);
    });
    me.addListener('aftersetcontent', function () {
        switchImgAndEmbed(false);
    });
    me.addListener('aftergetcontent', function (cmdName) {
        if (cmdName == 'aftergetcontent' && me.queryCommandState('source')) {
            return;
        }
        switchImgAndEmbed(false);
    });

    me.commands["music"] = {
        execCommand:function (cmd, musicObj) {
            var me = this,
                str = creatInsertStr(musicObj.url, musicObj.width || 400, musicObj.height || 95, "none", false, true);
            me.execCommand("inserthtml",str);
        },
        queryCommandState:function () {
            var me = this,
                img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-music");
            return me.highlight ? -1 : (flag ? 1 : 0);
        }
    };
};
var baidu = baidu || {};
baidu.editor = baidu.editor || {};
baidu.editor.ui = {};
(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils;

    var magic = '$EDITORUI';
    var root = window[magic] = {};
    var uidMagic = 'ID' + magic;
    var uidCount = 0;

    var uiUtils = baidu.editor.ui.uiUtils = {
        uid: function (obj){
            return (obj ? obj[uidMagic] || (obj[uidMagic] = ++ uidCount) : ++ uidCount);
        },
        hook: function ( fn, callback ) {
            var dg;
            if (fn && fn._callbacks) {
                dg = fn;
            } else {
                dg = function (){
                    var q;
                    if (fn) {
                        q = fn.apply(this, arguments);
                    }
                    var callbacks = dg._callbacks;
                    var k = callbacks.length;
                    while (k --) {
                        var r = callbacks[k].apply(this, arguments);
                        if (q === undefined) {
                            q = r;
                        }
                    }
                    return q;
                };
                dg._callbacks = [];
            }
            dg._callbacks.push(callback);
            return dg;
        },
        createElementByHtml: function (html){
            var el = document.createElement('div');
            el.innerHTML = html;
            el = el.firstChild;
            el.parentNode.removeChild(el);
            return el;
        },
        getViewportElement: function (){
            return (browser.ie && browser.quirks) ?
                document.body : document.documentElement;
        },
        getClientRect: function (element){
            var bcr;
            //trace  IE6娑撳婀幒褍鍩楃紓鏍帆閸ｃ劍妯夐梾鎰閸欘垵鍏樻导姘Г闁挎瑱绱漜atch娑擄拷绗�
            try{
                bcr = element.getBoundingClientRect();
            }catch(e){
                bcr={left:0,top:0,height:0,width:0}
            }
            var rect = {
                left: Math.round(bcr.left),
                top: Math.round(bcr.top),
                height: Math.round(bcr.bottom - bcr.top),
                width: Math.round(bcr.right - bcr.left)
            };
            var doc;
            while ((doc = element.ownerDocument) !== document &&
                (element = domUtils.getWindow(doc).frameElement)) {
                bcr = element.getBoundingClientRect();
                rect.left += bcr.left;
                rect.top += bcr.top;
            }
            rect.bottom = rect.top + rect.height;
            rect.right = rect.left + rect.width;
            return rect;
        },
        getViewportRect: function (){
            var viewportEl = uiUtils.getViewportElement();
            var width = (window.innerWidth || viewportEl.clientWidth) | 0;
            var height = (window.innerHeight ||viewportEl.clientHeight) | 0;
            return {
                left: 0,
                top: 0,
                height: height,
                width: width,
                bottom: height,
                right: width
            };
        },
        setViewportOffset: function (element, offset){
            var rect;
            var fixedLayer = uiUtils.getFixedLayer();
            if (element.parentNode === fixedLayer) {
                element.style.left = offset.left + 'px';
                element.style.top = offset.top + 'px';
            } else {
                domUtils.setViewportOffset(element, offset);
            }
        },
        getEventOffset: function (evt){
            var el = evt.target || evt.srcElement;
            var rect = uiUtils.getClientRect(el);
            var offset = uiUtils.getViewportOffsetByEvent(evt);
            return {
                left: offset.left - rect.left,
                top: offset.top - rect.top
            };
        },
        getViewportOffsetByEvent: function (evt){
            var el = evt.target || evt.srcElement;
            var frameEl = domUtils.getWindow(el).frameElement;
            var offset = {
                left: evt.clientX,
                top: evt.clientY
            };
            if (frameEl && el.ownerDocument !== document) {
                var rect = uiUtils.getClientRect(frameEl);
                offset.left += rect.left;
                offset.top += rect.top;
            }
            return offset;
        },
        setGlobal: function (id, obj){
            root[id] = obj;
            return magic + '["' + id  + '"]';
        },
        unsetGlobal: function (id){
            delete root[id];
        },
        copyAttributes: function (tgt, src){
            var attributes = src.attributes;
            var k = attributes.length;
            while (k --) {
                var attrNode = attributes[k];
                if ( attrNode.nodeName != 'style' && attrNode.nodeName != 'class' && (!browser.ie || attrNode.specified) ) {
                    tgt.setAttribute(attrNode.nodeName, attrNode.nodeValue);
                }
            }
            if (src.className) {
                domUtils.addClass(tgt,src.className);
            }
            if (src.style.cssText) {
                tgt.style.cssText += ';' + src.style.cssText;
            }
        },
        removeStyle: function (el, styleName){
            if (el.style.removeProperty) {
                el.style.removeProperty(styleName);
            } else if (el.style.removeAttribute) {
                el.style.removeAttribute(styleName);
            } else throw '';
        },
        contains: function (elA, elB){
            return elA && elB && (elA === elB ? false : (
                elA.contains ? elA.contains(elB) :
                    elA.compareDocumentPosition(elB) & 16
                ));
        },
        startDrag: function (evt, callbacks,doc){
            var doc = doc || document;
            var startX = evt.clientX;
            var startY = evt.clientY;
            function handleMouseMove(evt){
                var x = evt.clientX - startX;
                var y = evt.clientY - startY;
                callbacks.ondragmove(x, y);
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = true;
                }
            }
            if (doc.addEventListener) {
                function handleMouseUp(evt){
                    doc.removeEventListener('mousemove', handleMouseMove, true);
                    doc.removeEventListener('mouseup', handleMouseMove, true);
                    window.removeEventListener('mouseup', handleMouseUp, true);
                    callbacks.ondragstop();
                }
                doc.addEventListener('mousemove', handleMouseMove, true);
                doc.addEventListener('mouseup', handleMouseUp, true);
                window.addEventListener('mouseup', handleMouseUp, true);

                evt.preventDefault();
            } else {
                var elm = evt.srcElement;
                elm.setCapture();
                function releaseCaptrue(){
                    elm.releaseCapture();
                    elm.detachEvent('onmousemove', handleMouseMove);
                    elm.detachEvent('onmouseup', releaseCaptrue);
                    elm.detachEvent('onlosecaptrue', releaseCaptrue);
                    callbacks.ondragstop();
                }
                elm.attachEvent('onmousemove', handleMouseMove);
                elm.attachEvent('onmouseup', releaseCaptrue);
                elm.attachEvent('onlosecaptrue', releaseCaptrue);
                evt.returnValue = false;
            }
            callbacks.ondragstart();
        },
        getFixedLayer: function (){
            var layer = document.getElementById('edui_fixedlayer');
            if (layer == null) {
                layer = document.createElement('div');
                layer.id = 'edui_fixedlayer';
                document.body.appendChild(layer);
                if (browser.ie && browser.version <= 8) {
                    layer.style.position = 'absolute';
                    bindFixedLayer();
                    setTimeout(updateFixedOffset);
                } else {
                    layer.style.position = 'fixed';
                }
                layer.style.left = '0';
                layer.style.top = '0';
                layer.style.width = '0';
                layer.style.height = '0';
            }
            return layer;
        },
        makeUnselectable: function (element){
            if (browser.opera || (browser.ie && browser.version < 9)) {
                element.unselectable = 'on';
                if (element.hasChildNodes()) {
                    for (var i=0; i<element.childNodes.length; i++) {
                        if (element.childNodes[i].nodeType == 1) {
                            uiUtils.makeUnselectable(element.childNodes[i]);
                        }
                    }
                }
            } else {
                if (element.style.MozUserSelect !== undefined) {
                    element.style.MozUserSelect = 'none';
                } else if (element.style.WebkitUserSelect !== undefined) {
                    element.style.WebkitUserSelect = 'none';
                } else if (element.style.KhtmlUserSelect !== undefined) {
                    element.style.KhtmlUserSelect = 'none';
                }
            }
        }
    };
    function updateFixedOffset(){
        var layer = document.getElementById('edui_fixedlayer');
        uiUtils.setViewportOffset(layer, {
            left: 0,
            top: 0
        });
//        layer.style.display = 'none';
//        layer.style.display = 'block';

        //#trace: 1354
//        setTimeout(updateFixedOffset);
    }
    function bindFixedLayer(adjOffset){
        domUtils.on(window, 'scroll', updateFixedOffset);
        domUtils.on(window, 'resize', baidu.editor.utils.defer(updateFixedOffset, 0, true));
    }
})();

(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        EventBase = baidu.editor.EventBase,
        UIBase = baidu.editor.ui.UIBase = function () {
        };

    UIBase.prototype = {
        className:'',
        uiName:'',
        initOptions:function (options) {
            var me = this;
            for (var k in options) {
                me[k] = options[k];
            }
            this.id = this.id || 'edui' + uiUtils.uid();
        },
        initUIBase:function () {
            this._globalKey = utils.unhtml(uiUtils.setGlobal(this.id, this));
        },
        render:function (holder) {
            var html = this.renderHtml();
            var el = uiUtils.createElementByHtml(html);

            //by xuheng 缂佹瑦鐦℃稉鐚瞣de濞ｈ濮瀋lass
            var list = domUtils.getElementsByTagName(el, "*");
            var theme = "edui-" + (this.theme || this.editor.options.theme);
            var layer = document.getElementById('edui_fixedlayer');
            for (var i = 0, node; node = list[i++];) {
                domUtils.addClass(node, theme);
            }
            domUtils.addClass(el, theme);
            if(layer){
                layer.className="";
                domUtils.addClass(layer,theme);
            }

            var seatEl = this.getDom();
            if (seatEl != null) {
                seatEl.parentNode.replaceChild(el, seatEl);
                uiUtils.copyAttributes(el, seatEl);
            } else {
                if (typeof holder == 'string') {
                    holder = document.getElementById(holder);
                }
                holder = holder || uiUtils.getFixedLayer();
                domUtils.addClass(holder, theme);
                holder.appendChild(el);
            }
            this.postRender();
        },
        getDom:function (name) {
            if (!name) {
                return document.getElementById(this.id);
            } else {
                return document.getElementById(this.id + '_' + name);
            }
        },
        postRender:function () {
            this.fireEvent('postrender');
        },
        getHtmlTpl:function () {
            return '';
        },
        formatHtml:function (tpl) {
            var prefix = 'edui-' + this.uiName;
            return (tpl
                .replace(/##/g, this.id)
                .replace(/%%-/g, this.uiName ? prefix + '-' : '')
                .replace(/%%/g, (this.uiName ? prefix : '') + ' ' + this.className)
                .replace(/\$\$/g, this._globalKey));
        },
        renderHtml:function () {
            return this.formatHtml(this.getHtmlTpl());
        },
        dispose:function () {
            var box = this.getDom();
            if (box) baidu.editor.dom.domUtils.remove(box);
            uiUtils.unsetGlobal(this.id);
        }
    };
    utils.inherits(UIBase, EventBase);
})();

(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Separator = baidu.editor.ui.Separator = function (options){
            this.initOptions(options);
            this.initSeparator();
        };
    Separator.prototype = {
        uiName: 'separator',
        initSeparator: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%"></div>';
        }
    };
    utils.inherits(Separator, UIBase);

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var Mask = baidu.editor.ui.Mask = function (options){
        this.initOptions(options);
        this.initUIBase();
    };
    Mask.prototype = {
        getHtmlTpl: function (){
            return '<div id="##" class="edui-mask %%" onmousedown="return $$._onMouseDown(event, this);"></div>';
        },
        postRender: function (){
            var me = this;
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me._fill();
                    }
                });
            });
        },
        show: function (zIndex){
            this._fill();
            this.getDom().style.display = '';
            this.getDom().style.zIndex = zIndex;
        },
        hide: function (){
            this.getDom().style.display = 'none';
            this.getDom().style.zIndex = '';
        },
        isHidden: function (){
            return this.getDom().style.display == 'none';
        },
        _onMouseDown: function (){
            return false;
        },
        _fill: function (){
            var el = this.getDom();
            var vpRect = uiUtils.getViewportRect();
            el.style.width = vpRect.width + 'px';
            el.style.height = vpRect.height + 'px';
        }
    };
    utils.inherits(Mask, UIBase);
})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup = function (options){
            this.initOptions(options);
            this.initPopup();
        };

    var allPopups = [];
    function closeAllPopup( el ){
        var newAll = [];
        for ( var i = 0; i < allPopups.length; i++ ) {
            var pop = allPopups[i];
            if (!pop.isHidden()) {
                if (pop.queryAutoHide(el) !== false) {
                    pop.hide();
                }
            }
        }
    }

    Popup.postHide = closeAllPopup;

    var ANCHOR_CLASSES = ['edui-anchor-topleft','edui-anchor-topright',
        'edui-anchor-bottomleft','edui-anchor-bottomright'];
    Popup.prototype = {
        SHADOW_RADIUS: 5,
        content: null,
        _hidden: false,
        autoRender: true,
        canSideLeft: true,
        canSideUp: true,
        initPopup: function (){
            this.initUIBase();
            allPopups.push( this );
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-popup %%">' +
                ' <div id="##_body" class="edui-popup-body">' +
                ' <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe>' +
                ' <div class="edui-shadow"></div>' +
                ' <div id="##_content" class="edui-popup-content">' +
                this.getContentHtmlTpl() +
                '  </div>' +
                ' </div>' +
                '</div>';
        },
        getContentHtmlTpl: function (){
            if(this.content){
                if (typeof this.content == 'string') {
                    return this.content;
                }
                return this.content.renderHtml();
            }else{
                return ''
            }

        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){
            if (this.content instanceof UIBase) {
                this.content.postRender();
            }
            this.fireEvent('postRenderAfter');
            this.hide(true);
            this._UIBase_postRender();
        },
        _doAutoRender: function (){
            if (!this.getDom() && this.autoRender) {
                this.render();
            }
        },
        mesureSize: function (){
            var box = this.getDom('content');
            return uiUtils.getClientRect(box);
        },
        fitSize: function (){
            var popBodyEl = this.getDom('body');
            popBodyEl.style.width = '';
            popBodyEl.style.height = '';
            var size = this.mesureSize();
            popBodyEl.style.width = size.width + 'px';
            popBodyEl.style.height = size.height + 'px';
            return size;
        },
        showAnchor: function ( element, hoz ){
            this.showAnchorRect( uiUtils.getClientRect( element ), hoz );
        },
        showAnchorRect: function ( rect, hoz, adj ){
            this._doAutoRender();
            var vpRect = uiUtils.getViewportRect();
            this._show();
            var popSize = this.fitSize();

            var sideLeft, sideUp, left, top;
            if (hoz) {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.left - popSize.width : rect.right);
                top = (sideUp ? rect.bottom - popSize.height : rect.top);
            } else {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.right - popSize.width : rect.left);
                top = (sideUp ? rect.top - popSize.height : rect.bottom);
            }

            var popEl = this.getDom();
            uiUtils.setViewportOffset(popEl, {
                left: left,
                top: top
            });
            domUtils.removeClasses(popEl, ANCHOR_CLASSES);
            popEl.className += ' ' + ANCHOR_CLASSES[(sideUp ? 1 : 0) * 2 + (sideLeft ? 1 : 0)];
            if(this.editor){
                popEl.style.zIndex = this.editor.container.style.zIndex * 1 + 10;
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = popEl.style.zIndex - 1;
            }

        },
        showAt: function (offset) {
            var left = offset.left;
            var top = offset.top;
            var rect = {
                left: left,
                top: top,
                right: left,
                bottom: top,
                height: 0,
                width: 0
            };
            this.showAnchorRect(rect, false, true);
        },
        _show: function (){
            if (this._hidden) {
                var box = this.getDom();
                box.style.display = '';
                this._hidden = false;
//                if (box.setActive) {
//                    box.setActive();
//                }
                this.fireEvent('show');
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        show: function (){
            this._doAutoRender();
            this._show();
        },
        hide: function (notNofity){
            if (!this._hidden && this.getDom()) {
//                this.getDom().style.visibility = 'hidden';
                this.getDom().style.display = 'none';
                this._hidden = true;
                if (!notNofity) {
                    this.fireEvent('hide');
                }
            }
        },
        queryAutoHide: function (el){
            return !el || !uiUtils.contains(this.getDom(), el);
        }
    };
    utils.inherits(Popup, UIBase);
    
    domUtils.on( document, 'mousedown', function ( evt ) {
        var el = evt.target || evt.srcElement;
        closeAllPopup( el );
    } );
    domUtils.on( window, 'scroll', function () {
        closeAllPopup();
    } );

//    var lastVpRect = uiUtils.getViewportRect();
//    domUtils.on( window, 'resize', function () {
//        var vpRect = uiUtils.getViewportRect();
//        if (vpRect.width != lastVpRect.width || vpRect.height != lastVpRect.height) {
//            closeAllPopup();
//        }
//    } );

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        ColorPicker = baidu.editor.ui.ColorPicker = function (options){
            this.initOptions(options);
            this.noColorText = this.noColorText || this.editor.getLang("clearColor");
            this.initUIBase();
        };

    ColorPicker.prototype = {
        getHtmlTpl: function (){
            return genColorPicker(this.noColorText,this.editor);
        },
        _onTableClick: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.fireEvent('pickcolor', color);
            }
        },
        _onTableOver: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.getDom('preview').style.backgroundColor = color;
            }
        },
        _onTableOut: function (){
            this.getDom('preview').style.backgroundColor = '';
        },
        _onPickNoColor: function (){
            this.fireEvent('picknocolor');
        }
    };
    utils.inherits(ColorPicker, UIBase);

    var COLORS = (
            'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,' +
            'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,' +
            'd8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,' +
            'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,' +
            'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,' +
            '7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,' +
            'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,').split(',');

    function genColorPicker(noColorText,editor){
        var html = '<div id="##" class="edui-colorpicker %%">' +
            '<div class="edui-colorpicker-topbar edui-clearfix">' +
             '<div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div>' +
             '<div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+ noColorText +'</div>' +
            '</div>' +
            '<table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0">' +
            '<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">'+editor.getLang("themeColor")+'</td> </tr>'+
            '<tr class="edui-colorpicker-tablefirstrow" >';
        for (var i=0; i<COLORS.length; i++) {
            if (i && i%10 === 0) {
                html += '</tr>'+(i==60?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">'+editor.getLang("standardColor")+'</td></tr>':'')+'<tr'+(i==60?' class="edui-colorpicker-tablefirstrow"':'')+'>';
            }
            html += i<70 ? '<td style="padding: 0 2px;"><a hidefocus title="'+COLORS[i]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell"' +
                        ' data-color="#'+ COLORS[i] +'"'+
                        ' style="background-color:#'+ COLORS[i] +';border:solid #ccc;'+
                        (i<10 || i>=60?'border-width:1px;':
                         i>=10&&i<20?'border-width:1px 1px 0 1px;':

                        'border-width:0 1px 0 1px;')+
                        '"' +
                    '></a></td>':'';
        }
        html += '</tr></table></div>';
        return html;
    }
})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase;
    
    var TablePicker = baidu.editor.ui.TablePicker = function (options){
        this.initOptions(options);
        this.initTablePicker();
    };
    TablePicker.prototype = {
        defaultNumRows: 10,
        defaultNumCols: 10,
        maxNumRows: 20,
        maxNumCols: 20,
        numRows: 10,
        numCols: 10,
        lengthOfCellSide: 22,
        initTablePicker: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            var me = this;
            return '<div id="##" class="edui-tablepicker %%">' +
                 '<div class="edui-tablepicker-body">' +
                  '<div class="edui-infoarea">' +
                   '<span id="##_label" class="edui-label"></span>' +
                   '<span class="edui-clickable" onclick="$$._onMore();">'+me.editor.getLang("more")+'</span>' +
                  '</div>' +
                  '<div class="edui-pickarea"' +
                   ' onmousemove="$$._onMouseMove(event, this);"' +
                   ' onmouseover="$$._onMouseOver(event, this);"' +
                   ' onmouseout="$$._onMouseOut(event, this);"' +
                   ' onclick="$$._onClick(event, this);"' +
                  '>' +
                    '<div id="##_overlay" class="edui-overlay"></div>' +
                  '</div>' +
                 '</div>' +
                '</div>';
        },
        _UIBase_render: UIBase.prototype.render,
        render: function (holder){
            this._UIBase_render(holder);
            this.getDom('label').innerHTML = '0'+this.editor.getLang("t_row")+' x 0'+this.editor.getLang("t_col");
        },
        _track: function (numCols, numRows){
            var style = this.getDom('overlay').style;
            var sideLen = this.lengthOfCellSide;
            style.width = numCols * sideLen + 'px';
            style.height = numRows * sideLen + 'px';
            var label = this.getDom('label');
            label.innerHTML = numCols +this.editor.getLang("t_col")+' x ' + numRows + this.editor.getLang("t_row");
            this.numCols = numCols;
            this.numRows = numRows;
        },
        _onMouseOver: function (evt, el){
            var rel = evt.relatedTarget || evt.fromElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
                this.getDom('overlay').style.visibility = '';
            }
        },
        _onMouseOut: function (evt, el){
            var rel = evt.relatedTarget || evt.toElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
                this.getDom('overlay').style.visibility = 'hidden';
            }
        },
        _onMouseMove: function (evt, el){
            var style = this.getDom('overlay').style;
            var offset = uiUtils.getEventOffset(evt);
            var sideLen = this.lengthOfCellSide;
            var numCols = Math.ceil(offset.left / sideLen);
            var numRows = Math.ceil(offset.top / sideLen);
            this._track(numCols, numRows);
        },
        _onClick: function (){
            this.fireEvent('picktable', this.numCols, this.numRows);
        },
        _onMore: function (){
            this.fireEvent('more');
        }
    };
    utils.inherits(TablePicker, UIBase);
})();

(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var TPL_STATEFUL = 'onmousedown="$$.Stateful_onMouseDown(event, this);"' +
        ' onmouseup="$$.Stateful_onMouseUp(event, this);"' +
        ( browser.ie ? (
        ' onmouseenter="$$.Stateful_onMouseEnter(event, this);"' +
        ' onmouseleave="$$.Stateful_onMouseLeave(event, this);"' )
        : (
        ' onmouseover="$$.Stateful_onMouseOver(event, this);"' +
        ' onmouseout="$$.Stateful_onMouseOut(event, this);"' ));
    
    baidu.editor.ui.Stateful = {
        alwalysHoverable: false,
        Stateful_init: function (){
            this._Stateful_dGetHtmlTpl = this.getHtmlTpl;
            this.getHtmlTpl = this.Stateful_getHtmlTpl;
        },
        Stateful_getHtmlTpl: function (){
            var tpl = this._Stateful_dGetHtmlTpl();
            // 娴ｈ法鏁unction闁灝鍘�鏉烆兛绠�
            return tpl.replace(/stateful/g, function (){ return TPL_STATEFUL; });
        },
        Stateful_onMouseEnter: function (evt, el){
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.addState('hover');
                this.fireEvent('over');
            }
        },
        Stateful_onMouseLeave: function (evt, el){
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.removeState('hover');
                this.removeState('active');
                this.fireEvent('out');
            }
        },
        Stateful_onMouseOver: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseEnter(evt, el);
            }
        },
        Stateful_onMouseOut: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseLeave(evt, el);
            }
        },
        Stateful_onMouseDown: function (evt, el){
            if (!this.isDisabled()) {
                this.addState('active');
            }
        },
        Stateful_onMouseUp: function (evt, el){
            if (!this.isDisabled()) {
                this.removeState('active');
            }
        },
        Stateful_postRender: function (){
            if (this.disabled && !this.hasState('disabled')) {
                this.addState('disabled');
            }
        },
        hasState: function (state){
            return domUtils.hasClass(this.getStateDom(), 'edui-state-' + state);
        },
        addState: function (state){
            if (!this.hasState(state)) {
                this.getStateDom().className += ' edui-state-' + state;
            }
        },
        removeState: function (state){
            if (this.hasState(state)) {
                domUtils.removeClasses(this.getStateDom(), ['edui-state-' + state]);
            }
        },
        getStateDom: function (){
            return this.getDom('state');
        },
        isChecked: function (){
            return this.hasState('checked');
        },
        setChecked: function (checked){
            if (!this.isDisabled() && checked) {
                this.addState('checked');
            } else {
                this.removeState('checked');
            }
        },
        isDisabled: function (){
            return this.hasState('disabled');
        },
        setDisabled: function (disabled){
            if (disabled) {
                this.removeState('hover');
                this.removeState('checked');
                this.removeState('active');
                this.addState('disabled');
            } else {
                this.removeState('disabled');
            }
        }
    };
})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        Button = baidu.editor.ui.Button = function (options){
            this.initOptions(options);
            this.initButton();
        };
    Button.prototype = {
        uiName: 'button',
        label: '',
        title: '',
        showIcon: true,
        showText: true,
        initButton: function (){
            this.initUIBase();
            this.Stateful_init();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div id="##_state" stateful>' +
                 '<div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : '') +
                 ' class="%%-body" onmousedown="return false;" onclick="return $$._onClick();">' +
                  (this.showIcon ? '<div class="edui-box edui-icon"></div>' : '') +
                  (this.showText ? '<div class="edui-box edui-label">' + this.label + '</div>' : '') +
                 '</div>' +
                '</div>' +
                '</div></div>';
        },
        postRender: function (){
            this.Stateful_postRender();
            this.setDisabled(this.disabled)
        },
        _onClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('click');
            }
        }
    };
    utils.inherits(Button, UIBase);
    utils.extend(Button.prototype, Stateful);

})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        SplitButton = baidu.editor.ui.SplitButton = function (options){
            this.initOptions(options);
            this.initSplitButton();
        };
    SplitButton.prototype = {
        popup: null,
        uiName: 'splitbutton',
        title: '',
        initSplitButton: function (){
            this.initUIBase();
            this.Stateful_init();
            var me = this;
            if (this.popup != null) {
                var popup = this.popup;
                this.popup = null;
                this.setPopup(popup);
            }
        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){
            this.Stateful_postRender();
            this._UIBase_postRender();
        },
        setPopup: function (popup){
            if (this.popup === popup) return;
            if (this.popup != null) {
                this.popup.dispose();
            }
            popup.addListener('show', utils.bind(this._onPopupShow, this));
            popup.addListener('hide', utils.bind(this._onPopupHide, this));
            popup.addListener('postrender', utils.bind(function (){
                popup.getDom('body').appendChild(
                    uiUtils.createElementByHtml('<div id="' +
                        this.popup.id + '_bordereraser" class="edui-bordereraser edui-background" style="width:' +
                        (uiUtils.getClientRect(this.getDom()).width - 2) + 'px"></div>')
                    );
                popup.getDom().className += ' ' + this.className;
            }, this));
            this.popup = popup;
        },
        _onPopupShow: function (){
            this.addState('opened');
        },
        _onPopupHide: function (){
            this.removeState('opened');
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div '+ (this.title ? 'title="' + this.title + '"' : '') +' id="##_state" stateful><div class="%%-body">' +
                '<div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);">' +
                '<div class="edui-box edui-icon"></div>' +
                '</div>' +
                '<div class="edui-box edui-splitborder"></div>' +
                '<div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div>' +
                '</div></div></div>';
        },
        showPopup: function (){
            // 瑜版悕opup瀵帮拷绗傚鐟板毉閻ㄥ嫭妞傞崐娆欑礉閸嬫氨澹掑▓濠傤樀閻烇拷
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top -= this.popup.SHADOW_RADIUS;
            rect.height += this.popup.SHADOW_RADIUS;
            this.popup.showAnchorRect(rect);
        },
        _onArrowClick: function (event, el){
            if (!this.isDisabled()) {
                this.showPopup();
            }
        },
        _onButtonClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('buttonclick');
            }
        }
    };
    utils.inherits(SplitButton, UIBase);
    utils.extend(SplitButton.prototype, Stateful, true);

})();

///import core
///import uicore
///import ui/colorpicker.js
///import ui/popup.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        ColorPicker = baidu.editor.ui.ColorPicker,
        Popup = baidu.editor.ui.Popup,
        SplitButton = baidu.editor.ui.SplitButton,
        ColorButton = baidu.editor.ui.ColorButton = function (options){
            this.initOptions(options);
            this.initColorButton();
        };
    ColorButton.prototype = {
        initColorButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new ColorPicker({
                    noColorText: me.editor.getLang("clearColor"),
                    editor:me.editor,
                    onpickcolor: function (t, color){
                        me._onPickColor(color);
                    },
                    onpicknocolor: function (t, color){
                        me._onPickNoColor(color);
                    }
                }),
                editor:me.editor
            });
            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.getDom('button_body').appendChild(
                uiUtils.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>')
                );
            this.getDom().className += ' edui-colorbutton';
        },
        setColor: function (color){
            this.getDom('colorlump').style.backgroundColor = color;
            this.color = color;
        },
        _onPickColor: function (color){
            if (this.fireEvent('pickcolor', color) !== false) {
                this.setColor(color);
                this.popup.hide();
            }
        },
        _onPickNoColor: function (color){
            if (this.fireEvent('picknocolor') !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(ColorButton, SplitButton);

})();

///import core
///import uicore
///import ui/popup.js
///import ui/tablepicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        TablePicker = baidu.editor.ui.TablePicker,
        SplitButton = baidu.editor.ui.SplitButton,
        TableButton = baidu.editor.ui.TableButton = function (options){
            this.initOptions(options);
            this.initTableButton();
        };
    TableButton.prototype = {
        initTableButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new TablePicker({
                    editor:me.editor,
                    onpicktable: function (t, numCols, numRows){
                        me._onPickTable(numCols, numRows);
                    },
                    onmore: function (){
                        me.popup.hide();
                        me.fireEvent('more');
                    }
                }),
                'editor':me.editor
            });
            this.initSplitButton();
        },
        _onPickTable: function (numCols, numRows){
            if (this.fireEvent('picktable', numCols, numRows) !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(TableButton, SplitButton);

})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase;

    var AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker = function (options) {
        this.initOptions(options);
        this.initAutoTypeSetPicker();
    };
    AutoTypeSetPicker.prototype = {
        initAutoTypeSetPicker:function () {
            this.initUIBase();
        },
        getHtmlTpl:function () {
            var me = this.editor,
                opt = me.options.autotypeset,
                lang = me.getLang("autoTypeSet");

            return '<div id="##" class="edui-autotypesetpicker %%">' +
                '<div class="edui-autotypesetpicker-body">' +
                '<table >' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="mergeEmptyline" ' + (opt["mergeEmptyline"] ? "checked" : "" ) + '>' + lang.mergeLine + '</td><td colspan="2"><input type="checkbox" name="removeEmptyline" ' + (opt["removeEmptyline"] ? "checked" : "" ) + '>' + lang.delLine + '</td></tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="removeClass" ' + (opt["removeClass"] ? "checked" : "" ) + '>' + lang.removeFormat + '</td><td colspan="2"><input type="checkbox" name="indent" ' + (opt["indent"] ? "checked" : "" ) + '>' + lang.indent + '</td></tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="textAlign" ' + (opt["textAlign"] ? "checked" : "" ) + '>' + lang.alignment + '</td><td colspan="2" id="textAlignValue"><input type="radio" name="textAlignValue" value="left" ' + ((opt["textAlign"] && opt["textAlign"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") + '<input type="radio" name="textAlignValue" value="center" ' + ((opt["textAlign"] && opt["textAlign"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") + '<input type="radio" name="textAlignValue" value="right" ' + ((opt["textAlign"] && opt["textAlign"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") + ' </tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="imageBlockLine" ' + (opt["imageBlockLine"] ? "checked" : "" ) + '>' + lang.imageFloat + '</td>' +
                '<td nowrap colspan="2" id="imageBlockLineValue">' +
                '<input type="radio" name="imageBlockLineValue" value="none" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "none") ? "checked" : "") + '>' + me.getLang("default") +
                '<input type="radio" name="imageBlockLineValue" value="left" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") +
                '<input type="radio" name="imageBlockLineValue" value="center" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") +
                '<input type="radio" name="imageBlockLineValue" value="right" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") + '</tr>' +

                '<tr><td nowrap colspan="2"><input type="checkbox" name="clearFontSize" ' + (opt["clearFontSize"] ? "checked" : "" ) + '>' + lang.removeFontsize + '</td><td colspan="2"><input type="checkbox" name="clearFontFamily" ' + (opt["clearFontFamily"] ? "checked" : "" ) + '>' + lang.removeFontFamily + '</td></tr>' +
                '<tr><td nowrap colspan="4"><input type="checkbox" name="removeEmptyNode" ' + (opt["removeEmptyNode"] ? "checked" : "" ) + '>' + lang.removeHtml + '</td></tr>' +
                '<tr><td nowrap colspan="4"><input type="checkbox" name="pasteFilter" ' + (opt["pasteFilter"] ? "checked" : "" ) + '>' + lang.pasteFilter + '</td></tr>' +
                '<tr><td nowrap colspan="4" align="right"><button >' + lang.run + '</button></td></tr>' +
                '</table>' +
                '</div>' +
                '</div>';


        },
        _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(AutoTypeSetPicker, UIBase);
})();

///import core
///import uicore
///import ui/popup.js
///import ui/autotypesetpicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker,
        SplitButton = baidu.editor.ui.SplitButton,
        AutoTypeSetButton = baidu.editor.ui.AutoTypeSetButton = function (options){
            this.initOptions(options);
            this.initAutoTypeSetButton();
        };
    function getPara(me){
        var opt = me.editor.options.autotypeset,
            cont = me.getDom(),
            ipts = domUtils.getElementsByTagName(cont,"input");
        for(var i=ipts.length-1,ipt;ipt=ipts[i--];){
            if(ipt.getAttribute("type")=="checkbox"){
                var attrName = ipt.getAttribute("name");
                opt[attrName] && delete opt[attrName];
                if(ipt.checked){
                    var attrValue = document.getElementById(attrName+"Value");
                    if(attrValue){
                        if(/input/ig.test(attrValue.tagName)){
                            opt[attrName] = attrValue.value;
                        }else{
                            var iptChilds = attrValue.getElementsByTagName("input");
                            for(var j=iptChilds.length-1,iptchild;iptchild=iptChilds[j--];){
                                if(iptchild.checked){
                                    opt[attrName] = iptchild.value;
                                    break;
                                }
                            }
                        }
                    }else{
                        opt[attrName] = true;
                    }
                }
            }
        }
        var selects = domUtils.getElementsByTagName(cont,"select");
        for(var i=0,si;si=selects[i++];){
            var attr = si.getAttribute('name');
            opt[attr] = opt[attr] ? si.value : '';
        }
        me.editor.options.autotypeset = opt;
    }
    AutoTypeSetButton.prototype = {
        initAutoTypeSetButton: function (){
            var me = this;
            this.popup = new Popup({
                //娴肩姴鍙嗛柊宥囩枂閸欏倹鏆�
                content: new AutoTypeSetPicker({editor:me.editor}),
                'editor':me.editor,
                hide : function(){

                    if (!this._hidden && this.getDom()) {
                        getPara(this);
                        this.getDom().style.display = 'none';
                        this._hidden = true;
                        this.fireEvent('hide');
                    }
                }
            });
            var flag = 0;
            this.popup.addListener('postRenderAfter',function(){
                var popupUI = this;
                if(flag)return;
                var cont = this.getDom(),
                    btn = cont.getElementsByTagName('button')[0];
                btn.onclick = function(){
                    getPara(popupUI);
                    me.editor.execCommand('autotypeset');
                    popupUI.hide()
                };
                flag = 1;
            });
            this.initSplitButton();
        }
    };
    utils.inherits(AutoTypeSetButton, SplitButton);

})();

(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Toolbar = baidu.editor.ui.Toolbar = function (options){
            this.initOptions(options);
            this.initToolbar();
        };
    Toolbar.prototype = {
        items: null,
        initToolbar: function (){
            this.items = this.items || [];
            this.initUIBase();
        },
        add: function (item){
            this.items.push(item);
        },
        getHtmlTpl: function (){
            var buff = [];
            for (var i=0; i<this.items.length; i++) {
                buff[i] = this.items[i].renderHtml();
            }
            return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' +
                buff.join('') +
                '</div>'
        },
        postRender: function (){
            var box = this.getDom();
            for (var i=0; i<this.items.length; i++) {
                this.items[i].postRender();
            }
            uiUtils.makeUnselectable(box);
        },
        _onMouseDown: function (){
            return false;
        }
    };
    utils.inherits(Toolbar, UIBase);

})();

///import core
///import uicore
///import ui\popup.js
///import ui\stateful.js
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup,
        Stateful = baidu.editor.ui.Stateful,
        Menu = baidu.editor.ui.Menu = function (options){
            this.initOptions(options);
            this.initMenu();
        };

    var menuSeparator = {
        renderHtml: function (){
            return '<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>';
        },
        postRender: function (){},
        queryAutoHide: function (){ return true; }
    };
    Menu.prototype = {
        items: null,
        uiName: 'menu',
        initMenu: function (){
            this.items = this.items || [];
            this.initPopup();
            this.initItems();
        },
        initItems: function (){
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                if (item == '-') {
                    this.items[i] = this.getSeparator();
                } else if (!(item instanceof MenuItem)) {
                    item.theme=this.editor.options.theme;
                    this.items[i] = this.createItem(item);
                }
            }
        },
        getSeparator: function (){
            return menuSeparator;
        },
        createItem: function (item){
            return new MenuItem(item);
        },
        _Popup_getContentHtmlTpl: Popup.prototype.getContentHtmlTpl,
        getContentHtmlTpl: function (){
            if (this.items.length == 0) {
                return this._Popup_getContentHtmlTpl();
            }
            var buff = [];
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                buff[i] = item.renderHtml();
            }
            return ('<div class="%%-body">' + buff.join('') + '</div>');
        },
        _Popup_postRender: Popup.prototype.postRender,
        postRender: function (){
            var me = this;
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                item.ownerMenu = this;
                item.postRender();
            }
            domUtils.on(this.getDom(), 'mouseover', function (evt){
                evt = evt || event;
                var rel = evt.relatedTarget || evt.fromElement;
                var el = me.getDom();
                if (!uiUtils.contains(el, rel) && el !== rel) {
                    me.fireEvent('over');
                }
            });
            this._Popup_postRender();
        },
        queryAutoHide: function (el){
            if (el) {
                if (uiUtils.contains(this.getDom(), el)) {
                    return false;
                }
                for (var i=0; i<this.items.length; i++) {
                    var item = this.items[i];
                    if (item.queryAutoHide(el) === false) {
                        return false;
                    }
                }
            }
        },
        clearItems: function (){
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                clearTimeout(item._showingTimer);
                clearTimeout(item._closingTimer);
                if (item.subMenu) {
                    item.subMenu.destroy();
                }
            }
            this.items = [];
        },
        destroy: function (){
            if (this.getDom()) {
                domUtils.remove(this.getDom());
            }
            this.clearItems();
        },
        dispose: function (){
            this.destroy();
        }
    };
    utils.inherits(Menu, Popup);
    
    var MenuItem = baidu.editor.ui.MenuItem = function (options){
        this.initOptions(options);
        this.initUIBase();
        this.Stateful_init();
        if (this.subMenu && !(this.subMenu instanceof Menu)) {
            this.subMenu = new Menu(this.subMenu);
        }
    };
    MenuItem.prototype = {
        label: '',
        subMenu: null,
        ownerMenu: null,
        uiName: 'menuitem',
        alwalysHoverable: true,
        getHtmlTpl: function (){
            return '<div id="##" class="%%" stateful onclick="$$._onClick(event, this);">' +
                '<div class="%%-body">' +
                this.renderLabelHtml() +
                '</div>' +
                '</div>';
        },
        postRender: function (){
            var me = this;
            this.addListener('over', function (){
                me.ownerMenu.fireEvent('submenuover', me);
                if (me.subMenu) {
                    me.delayShowSubMenu();
                }
            });
            if (this.subMenu) {
                this.getDom().className += ' edui-hassubmenu';
                this.subMenu.render();
                this.addListener('out', function (){
                    me.delayHideSubMenu();
                });
                this.subMenu.addListener('over', function (){
                    clearTimeout(me._closingTimer);
                    me._closingTimer = null;
                    me.addState('opened');
                });
                this.ownerMenu.addListener('hide', function (){
                    me.hideSubMenu();
                });
                this.ownerMenu.addListener('submenuover', function (t, subMenu){
                    if (subMenu !== me) {
                        me.delayHideSubMenu();
                    }
                });
                this.subMenu._bakQueryAutoHide = this.subMenu.queryAutoHide;
                this.subMenu.queryAutoHide = function (el){
                    if (el && uiUtils.contains(me.getDom(), el)) {
                        return false;
                    }
                    return this._bakQueryAutoHide(el);
                };
            }
            this.getDom().style.tabIndex = '-1';
            uiUtils.makeUnselectable(this.getDom());
            this.Stateful_postRender();
        },
        delayShowSubMenu: function (){
            var me = this;
            if (!me.isDisabled()) {
                me.addState('opened');
                clearTimeout(me._showingTimer);
                clearTimeout(me._closingTimer);
                me._closingTimer = null;
                me._showingTimer = setTimeout(function (){
                    me.showSubMenu();
                }, 250);
            }
        },
        delayHideSubMenu: function (){
            var me = this;
            if (!me.isDisabled()) {
                me.removeState('opened');
                clearTimeout(me._showingTimer);
                if (!me._closingTimer) {
                    me._closingTimer = setTimeout(function (){
                        if (!me.hasState('opened')) {
                            me.hideSubMenu();
                        }
                        me._closingTimer = null;
                    }, 400);
                }
            }
        },
        renderLabelHtml: function (){
            return '<div class="edui-arrow"></div>' +
                '<div class="edui-box edui-icon"></div>' +
                '<div class="edui-box edui-label %%-label">' + (this.label || '') + '</div>';
        },
        getStateDom: function (){
            return this.getDom();
        },
        queryAutoHide: function (el){
            if (this.subMenu && this.hasState('opened')) {
                return this.subMenu.queryAutoHide(el);
            }
        },
        _onClick: function (event, this_){
            if (this.hasState('disabled')) return;
            if (this.fireEvent('click', event, this_) !== false) {
                if (this.subMenu) {
                    this.showSubMenu();
                } else {
                    Popup.postHide();
                }
            }
        },
        showSubMenu: function (){
            var rect = uiUtils.getClientRect(this.getDom());
            rect.right -= 5;
            rect.left += 2;
            rect.width -= 7;
            rect.top -= 4;
            rect.bottom += 4;
            rect.height += 8;
            this.subMenu.showAnchorRect(rect, true, true);
        },
        hideSubMenu: function (){
            this.subMenu.hide();
        }
    };
    utils.inherits(MenuItem, UIBase);
    utils.extend(MenuItem.prototype, Stateful, true);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    // todo: menu閸滃tem閹绘劖鍨氶柅姘辨暏list
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        Combox = baidu.editor.ui.Combox = function (options){
            this.initOptions(options);
            this.initCombox();
        };
    Combox.prototype = {
        uiName: 'combox',
        initCombox: function (){
            var me = this;
            this.items = this.items || [];
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                item.uiName = 'listitem';
                item.index = i;
                item.onclick = function (){
                    me.selectByIndex(this.index);
                };
            }
            this.popup = new Menu({
                items: this.items,
                uiName: 'list',
                editor:this.editor
            });
            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.setLabel(this.label || '');
            this.setValue(this.initValue || '');
        },
        showPopup: function (){
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top += 1;
            rect.bottom -= 1;
            rect.height -= 2;
            this.popup.showAnchorRect(rect);
        },
        getValue: function (){
            return this.value;
        },
        setValue: function (value){
            var index = this.indexByValue(value);
            if (index != -1) {
                this.selectedIndex = index;
                this.setLabel(this.items[index].label);
                this.value = this.items[index].value;
            } else {
                this.selectedIndex = -1;
                this.setLabel(this.getLabelForUnknowValue(value));
                this.value = value;
            }
        },
        setLabel: function (label){
            this.getDom('button_body').innerHTML = label;
            this.label = label;
        },
        getLabelForUnknowValue: function (value){
            return value;
        },
        indexByValue: function (value){
            for (var i=0; i<this.items.length; i++) {
                if (value == this.items[i].value) {
                    return i;
                }
            }
            return -1;
        },
        getItem: function (index){
            return this.items[index];
        },
        selectByIndex: function (index){
            if (index < this.items.length && this.fireEvent('select', index) !== false) {
                this.selectedIndex = index;
                this.value = this.items[index].value;
                this.setLabel(this.items[index].label);
            }
        }
    };
    utils.inherits(Combox, SplitButton);
})();

///import core
///import uicore
///import ui/mask.js
///import ui/button.js
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        Mask = baidu.editor.ui.Mask,
        UIBase = baidu.editor.ui.UIBase,
        Button = baidu.editor.ui.Button,
        Dialog = baidu.editor.ui.Dialog = function (options){
            this.initOptions(utils.extend({
                autoReset: true,
                draggable: true,
                onok: function (){},
                oncancel: function (){},
                onclose: function (t, ok){
                    return ok ? this.onok() : this.oncancel();
                }
            },options));
            this.initDialog();
        };
    var modalMask;
    var dragMask;
    Dialog.prototype = {
        draggable: false,
        uiName: 'dialog',
        initDialog: function (){
            var me = this,
                theme=this.editor.options.theme;
            this.initUIBase();
            this.modalMask = (modalMask || (modalMask = new Mask({
                className: 'edui-dialog-modalmask',
                theme:theme
            })));
            this.dragMask = (dragMask || (dragMask = new Mask({
                className: 'edui-dialog-dragmask',
                theme:theme
            })));
            this.closeButton = new Button({
                className: 'edui-dialog-closebutton',
                title: me.closeDialog,
                theme:theme,
                onclick: function (){
                    me.close(false);
                }
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    if (!(this.buttons[i] instanceof Button)) {
                        this.buttons[i] = new Button(this.buttons[i]);
                    }
                }
            }
        },
        fitSize: function (){
            var popBodyEl = this.getDom('body');
//            if (!(baidu.editor.browser.ie && baidu.editor.browser.version == 7)) {
//                uiUtils.removeStyle(popBodyEl, 'width');
//                uiUtils.removeStyle(popBodyEl, 'height');
//            }
            var size = this.mesureSize();
            popBodyEl.style.width = size.width + 'px';
            popBodyEl.style.height = size.height + 'px';
            return size;
        },
        safeSetOffset: function (offset){
            var me = this;
            var el = me.getDom();
            var vpRect = uiUtils.getViewportRect();
            var rect = uiUtils.getClientRect(el);
            var left = offset.left;
            if (left + rect.width > vpRect.right) {
                left = vpRect.right - rect.width;
            }
            var top = offset.top;
            if (top + rect.height > vpRect.bottom) {
                top = vpRect.bottom - rect.height;
            }
            el.style.left = Math.max(left, 0) + 'px';
            el.style.top = Math.max(top, 0) + 'px';
        },
        showAtCenter: function (){
            this.getDom().style.display = '';
            var vpRect = uiUtils.getViewportRect();
            var popSize = this.fitSize();
            var titleHeight = this.getDom('titlebar').offsetHeight | 0;
            var left = vpRect.width / 2 - popSize.width / 2;
            var top = vpRect.height / 2 - (popSize.height - titleHeight) / 2 - titleHeight;
            var popEl = this.getDom();
            this.safeSetOffset({
                left: Math.max(left | 0, 0),
                top: Math.max(top | 0, 0)
            });
            if (!domUtils.hasClass(popEl, 'edui-state-centered')) {
                popEl.className += ' edui-state-centered';
            }
            this._show();
        },
        getContentHtml: function (){
            var contentHtml = '';
            if (typeof this.content == 'string') {
                contentHtml = this.content;
            } else if (this.iframeUrl) {
                contentHtml = '<span id="'+ this.id +'_contmask" class="dialogcontmask"></span><iframe id="'+ this.id +
                    '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+ this.iframeUrl +'"></iframe>';
            }
            return contentHtml;
        },
        getHtmlTpl: function (){
            var footHtml = '';

            if (this.buttons) {
                var buff = [];
                for (var i=0; i<this.buttons.length; i++) {
                    buff[i] = this.buttons[i].renderHtml();
                }
                footHtml = '<div class="%%-foot">' +
                     '<div id="##_buttons" class="%%-buttons">' + buff.join('') + '</div>' +
                    '</div>';
            }
            return '<div id="##" class="%%"><div class="%%-wrap"><div id="##_body" class="%%-body">' +
                '<div class="%%-shadow"></div>' +
                '<div id="##_titlebar" class="%%-titlebar">' +
                '<div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);">' +
                 '<span class="%%-caption">' + (this.title || '') + '</span>' +
                '</div>' +
                this.closeButton.renderHtml() +
                '</div>' +
                '<div id="##_content" class="%%-content">'+ ( this.autoReset ? '' : this.getContentHtml()) +'</div>' +
                footHtml +
                '</div></div></div>';
        },
        postRender: function (){
            // todo: 娣囨繃瀵旂仦鍛厬/鐠侀缍囨稉濠冾偧閸忔娊妫存担宥囩枂闁銆�
            if (!this.modalMask.getDom()) {
                this.modalMask.render();
                this.modalMask.hide();
            }
            if (!this.dragMask.getDom()) {
                this.dragMask.render();
                this.dragMask.hide();
            }
            var me = this;
            this.addListener('show', function (){
                me.modalMask.show(this.getDom().style.zIndex - 2);
            });
            this.addListener('hide', function (){
                me.modalMask.hide();
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    this.buttons[i].postRender();
                }
            }
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me.safeSetOffset(uiUtils.getClientRect(me.getDom()));
                    }
                });
            });
            this._hide();
        },
        mesureSize: function (){
            var body = this.getDom('body');
            var width = uiUtils.getClientRect(this.getDom('content')).width;
            var dialogBodyStyle = body.style;
            dialogBodyStyle.width = width;
            return uiUtils.getClientRect(body);
        },
        _onTitlebarMouseDown: function (evt, el){
            if (this.draggable) {
                var rect;
                var vpRect = uiUtils.getViewportRect();
                var me = this;
                uiUtils.startDrag(evt, {
                    ondragstart: function (){
                        rect = uiUtils.getClientRect(me.getDom());
                        me.getDom('contmask').style.visibility = 'visible';
                        me.dragMask.show(me.getDom().style.zIndex - 1);
                    },
                    ondragmove: function (x, y){
                        var left = rect.left + x;
                        var top = rect.top + y;
                        me.safeSetOffset({
                            left: left,
                            top: top
                        });
                    },
                    ondragstop: function (){
                        me.getDom('contmask').style.visibility = 'hidden';
                        domUtils.removeClasses(me.getDom(), ['edui-state-centered']);
                        me.dragMask.hide();
                    }
                });
            }
        },
        reset: function (){
            this.getDom('content').innerHTML = this.getContentHtml();
        },
        _show: function (){
            if (this._hidden) {
                this.getDom().style.display = '';

                //鐟曚線鐝潻鍥╃椽鏉堟垵娅掗惃鍓抜ndxe
                this.editor.container.style.zIndex && (this.getDom().style.zIndex = this.editor.container.style.zIndex * 1 + 10);
                this._hidden = false;
                this.fireEvent('show');
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex;
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        _hide: function (){
            if (!this._hidden) {
                this.getDom().style.display = 'none';
                this.getDom().style.zIndex = '';
                this._hidden = true;
                this.fireEvent('hide');
            }
        },
        open: function (){
            if (this.autoReset) {
                //閺堝褰查懗鍊熺箷濞屸剝婀佸〒鍙夌厠
                try{
                    this.reset();
                }catch(e){
                    this.render();
                    this.open()
                }
            }
            this.showAtCenter();
            if (this.iframeUrl) {
                try {
                    this.getDom('iframe').focus();
                } catch(ex){}
            }
        },
        _onCloseButtonClick: function (evt, el){
            this.close(false);
        },
        close: function (ok){
            if (this.fireEvent('close', ok) !== false) {
                this._hide();
            }
        }
    };
    utils.inherits(Dialog, UIBase);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        MenuButton = baidu.editor.ui.MenuButton = function (options){
            this.initOptions(options);
            this.initMenuButton();
        };
    MenuButton.prototype = {
        initMenuButton: function (){
            var me = this;
            this.uiName = "menubutton";
            this.popup = new Menu({
                items: me.items,
                className: me.className,
                editor:me.editor
            });
            this.popup.addListener('show', function (){
                var list = this;
                for (var i=0; i<list.items.length; i++) {
                    list.items[i].removeState('checked');
                    if (list.items[i].value == me._value) {
                        list.items[i].addState('checked');
                        this.value = me._value;
                    }
                }
            });
            this.initSplitButton();
        },
        setValue : function(value){
            this._value = value;
        }
        
    };
    utils.inherits(MenuButton, SplitButton);
})();
//ui鐠虹喓绱潏鎴濇珤閻ㄥ嫰锟介柊宥呭牎
//闁絼閲滈幐澶愭尦瀵懓鍤弰鐥檌alog閿涘本妲告稉瀣缁涙劗鐡戦柈鑺ユЦ閸︺劏绻栨稉鐚╯娑擃參鍘ょ純锟�
//閼奉亜绻侀崘娆戞畱ui娑旂喕顪呴崷銊ㄧ箹闁插矂鍘ょ純顕嗙礉閺�儳鍩宐aidu.editor.ui娑撳绔熼敍灞界秼缂傛牞绶崳銊ョ杽娓氬瀵查惃鍕閸婃瑤绱伴弽瑙勫祦editor_config娑擃厾娈憈oolbars閹垫儳鍩岄惄绋跨安閻ㄥ嫯绻樼悰灞界杽娓氬瀵�
(function () {
    var utils = baidu.editor.utils;
    var editorui = baidu.editor.ui;
    var _Dialog = editorui.Dialog;
    editorui.Dialog = function (options) {
        var dialog = new _Dialog(options);
        dialog.addListener('hide', function () {

            if (dialog.editor) {
                var editor = dialog.editor;
                try {
                    if (browser.gecko) {
                        var y = editor.window.scrollY,
                            x = editor.window.scrollX;
                        editor.body.focus();
                        editor.window.scrollTo(x, y);
                    } else {
                        editor.focus();
                    }


                } catch (ex) {
                }
            }
        });
        return dialog;
    };

    var iframeUrlMap = {
        'anchor':'~/dialogs/anchor/anchor.html',
        'insertimage':'~/dialogs/image/image.jsp',
        'inserttable':'~/dialogs/table/table.html',
        'link':'~/dialogs/link/link.jsp',
        'spechars':'~/dialogs/spechars/spechars.html',
        'searchreplace':'~/dialogs/searchreplace/searchreplace.html',
        'map':'~/dialogs/map/map.html',
        'gmap':'~/dialogs/gmap/gmap.html',
        'insertvideo':'~/dialogs/video/video.html',
        'help':'~/dialogs/help/help.html',
        'highlightcode':'~/dialogs/highlightcode/highlightcode.html',
        'emotion':'~/dialogs/emotion/emotion.html',
        'wordimage':'~/dialogs/wordimage/wordimage.html',
        'attachment':'~/dialogs/attachment/attachment.html',
        'insertframe':'~/dialogs/insertframe/insertframe.html',
        'edittd':'~/dialogs/table/edittd.html',
        'webapp':'~/dialogs/webapp/webapp.html',
        'snapscreen':'~/dialogs/snapscreen/snapscreen.html',
        'scrawl':'~/dialogs/scrawl/scrawl.html',
        'music':'~/dialogs/music/music.html',
        'template':'~/dialogs/template/template.html',
        'background':'~/dialogs/background/background.html'
    };
    //娑撳搫浼愰崗閿嬬埉濞ｈ濮為幐澶愭尦閿涘奔浜掓稉瀣厴閺勵垳绮烘稉锟芥畱閹稿鎸崇憴锕�絺閸涙垝鎶ら敍灞惧娴犮儱鍟撻崷銊ょ鐠э拷
    var btnCmds = ['undo', 'redo', 'formatmatch',
        'bold', 'italic', 'underline', 'touppercase', 'tolowercase',
        'strikethrough', 'subscript', 'superscript', 'source', 'indent', 'outdent',
        'blockquote', 'pasteplain', 'pagebreak',
        'selectall', 'print', 'preview', 'horizontal', 'removeformat', 'time', 'date', 'unlink',
        'insertparagraphbeforetable', 'insertrow', 'insertcol', 'mergeright', 'mergedown', 'deleterow',
        'deletecol', 'splittorows', 'splittocols', 'splittocells', 'mergecells', 'deletetable'];

    for (var i = 0, ci; ci = btnCmds[i++];) {
        ci = ci.toLowerCase();
        editorui[ci] = function (cmd) {
            return function (editor) {
                var ui = new editorui.Button({
                    className:'edui-for-' + cmd,
                    title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
                    onclick:function () {
                        editor.execCommand(cmd);
                    },
                    theme:editor.options.theme,
                    showText:false
                });
                editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                        ui.setChecked(false);
                    } else {
                        if (!uiReady) {
                            ui.setDisabled(false);
                            ui.setChecked(state);
                        }
                    }
                });
                return ui;
            };
        }(ci);
    }

    //濞撳懘娅庨弬鍥ㄣ�
    editorui.cleardoc = function (editor) {
        var ui = new editorui.Button({
            className:'edui-for-cleardoc',
            title:editor.options.labelMap.cleardoc || editor.getLang("labelMap.cleardoc") || '',
            theme:editor.options.theme,
            onclick:function () {
                if (confirm(editor.getLang("confirmClear"))) {
                    editor.execCommand('cleardoc');
                }
            }
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('cleardoc') == -1);
        });
        return ui;
    };

    //閹烘帞澧楅敍灞芥禈閻楀洦甯撻悧鍫礉閺傚洤鐡ч弬鐟版倻
    var typeset = {
        'justify':['left', 'right', 'center', 'justify'],
        'imagefloat':['none', 'left', 'center', 'right'],
        'directionality':['ltr', 'rtl']
    };

    for (var p in typeset) {

        (function (cmd, val) {
            for (var i = 0, ci; ci = val[i++];) {
                (function (cmd2) {
                    editorui[cmd.replace('float', '') + cmd2] = function (editor) {
                        var ui = new editorui.Button({
                            className:'edui-for-' + cmd.replace('float', '') + cmd2,
                            title:editor.options.labelMap[cmd.replace('float', '') + cmd2] || editor.getLang("labelMap." + cmd.replace('float', '') + cmd2) || '',
                            theme:editor.options.theme,
                            onclick:function () {
                                editor.execCommand(cmd, cmd2);
                            }
                        });
                        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
                            ui.setDisabled(editor.queryCommandState(cmd) == -1);
                            ui.setChecked(editor.queryCommandValue(cmd) == cmd2 && !uiReady);
                        });
                        return ui;
                    };
                })(ci)
            }
        })(p, typeset[p])
    }

    //鐎涙ぞ缍嬫０婊嗗閸滃矁鍎楅弲顖烆杹閼癸拷
    for (var i = 0, ci; ci = ['backcolor', 'forecolor'][i++];) {
        editorui[ci] = function (cmd) {
            return function (editor) {
                var ui = new editorui.ColorButton({
                    className:'edui-for-' + cmd,
                    color:'default',
                    title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
                    editor:editor,
                    onpickcolor:function (t, color) {
                        editor.execCommand(cmd, color);
                    },
                    onpicknocolor:function () {
                        editor.execCommand(cmd, 'default');
                        this.setColor('transparent');
                        this.color = 'default';
                    },
                    onbuttonclick:function () {
                        editor.execCommand(cmd, this.color);
                    }
                });
                editor.addListener('selectionchange', function () {
                    ui.setDisabled(editor.queryCommandState(cmd) == -1);
                });
                return ui;
            };
        }(ci);
    }


    var dialogBtns = {
        noOk:['searchreplace', 'help', 'spechars', 'webapp'],
        ok:['attachment', 'anchor', 'link', 'insertimage', 'map', 'gmap', 'insertframe', 'wordimage',
            'insertvideo', 'highlightcode', 'insertframe', 'edittd', 'scrawl', 'template','music', 'background']

    };

    for (var p in dialogBtns) {
        (function (type, vals) {
            for (var i = 0, ci; ci = vals[i++];) {
                //todo opera娑撳鐡ㄩ崷銊╂６妫帮拷
                if (browser.opera && ci === "searchreplace") {
                    continue;
                }
                (function (cmd) {
                    editorui[cmd] = function (editor, iframeUrl, title) {
                        iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})[cmd] || iframeUrlMap[cmd];
                        title = editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '';

                        var dialog;
                        //濞屸剝婀乮frameUrl娑撳秴鍨卞绡竔alog
                        if (iframeUrl) {
                            dialog = new editorui.Dialog(utils.extend({
                                iframeUrl:editor.ui.mapUrl(iframeUrl),
                                editor:editor,
                                className:'edui-for-' + cmd,
                                title:title,
                                closeDialog:editor.getLang("closeDialog")
                            }, type == 'ok' ? {
                                buttons:[
                                    {
                                        className:'edui-okbutton',
                                        label:editor.getLang("ok"),
                                        editor:editor,
                                        onclick:function () {
                                            dialog.close(true);
                                        }
                                    },
                                    {
                                        className:'edui-cancelbutton',
                                        label:editor.getLang("cancel"),
                                        editor:editor,
                                        onclick:function () {
                                            dialog.close(false);
                                        }
                                    }
                                ]
                            } : {}));

                            editor.ui._dialogs[cmd + "Dialog"] = dialog;
                        }

                        var ui = new editorui.Button({
                            className:'edui-for-' + cmd,
                            title:title,
                            onclick:function () {
                                if (dialog) {
                                    switch (cmd) {
                                        case "wordimage":
                                            editor.execCommand("wordimage", "word_img");
                                            if (editor.word_img) {
                                                dialog.render();
                                                dialog.open();
                                            }
                                            break;
                                        case "scrawl":
                                            if (editor.queryCommandState("scrawl") != -1) {
                                                dialog.render();
                                                dialog.open();
                                            }

                                            break;
                                        default:
                                            dialog.render();
                                            dialog.open();
                                    }
                                }
                            },
                            theme:editor.options.theme,
                            disabled:cmd == 'scrawl' && editor.queryCommandState("scrawl") == -1
                        });
                        editor.addListener('selectionchange', function () {
                            //閸欘亜鐡ㄩ崷銊ょ艾閸欐娊鏁懣婊冨礋閼板本妫ゅ銉ュ徔閺嶅繑瀵滈柦顔炬畱ui娑撳秹娓剁憰浣诡棏濞村濮搁幀锟�
                            var unNeedCheckState = {'edittd':1, 'edittable':1};
                            if (cmd in unNeedCheckState)return;

                            var state = editor.queryCommandState(cmd);
                            if (ui.getDom()) {
                                ui.setDisabled(state == -1);
                                ui.setChecked(state);
                            }

                        });

                        return ui;
                    };
                })(ci.toLowerCase())
            }
        })(p, dialogBtns[p])
    }

    editorui.snapscreen = function (editor, iframeUrl, title) {
        title = editor.options.labelMap['snapscreen'] || editor.getLang("labelMap.snapscreen") || '';
        var ui = new editorui.Button({
            className:'edui-for-snapscreen',
            title:title,
            onclick:function () {
                editor.execCommand("snapscreen");
            },
            theme:editor.options.theme,
            disabled:!browser.ie

        });

        if (browser.ie) {
            iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})["snapscreen"] || iframeUrlMap["snapscreen"];
            if (iframeUrl) {
                var dialog = new editorui.Dialog({
                    iframeUrl:editor.ui.mapUrl(iframeUrl),
                    editor:editor,
                    className:'edui-for-snapscreen',
                    title:title,
                    buttons:[
                        {
                            className:'edui-okbutton',
                            label:editor.getLang("ok"),
                            editor:editor,
                            onclick:function () {
                                dialog.close(true);
                            }
                        },
                        {
                            className:'edui-cancelbutton',
                            label:editor.getLang("cancel"),
                            editor:editor,
                            onclick:function () {
                                dialog.close(false);
                            }
                        }
                    ]

                });
                dialog.render();
                editor.ui._dialogs["snapscreenDialog"] = dialog;
            }

        }
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('snapscreen') == -1);
        });
        return ui;
    };


    editorui.fontfamily = function (editor, list, title) {
        list = editor.options['fontfamily'] || [];
        title = editor.options.labelMap['fontfamily'] || editor.getLang("labelMap.fontfamily") || '';
        if(!list.length) return;
        for (var i = 0, ci, items = []; ci = list[i]; i++) {
            var langLabel = editor.getLang('fontfamily')[ci.name] || "";
            (function (key, val) {
                items.push({
                    label:key,
                    value:val,
                    theme:editor.options.theme,
                    renderLabelHtml:function () {
                        return '<div class="edui-label %%-label" style="font-family:' +
                            utils.unhtml(this.value) + '">' + (this.label || '') + '</div>';
                    }
                });
            })(ci.label || langLabel, ci.val)
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            onselect:function (t, index) {
                editor.execCommand('FontFamily', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            title:title,
            initValue:title,
            className:'edui-for-fontfamily',
            indexByValue:function (value) {
                if (value) {
                    for (var i = 0, ci; ci = this.items[i]; i++) {
                        if (ci.value.indexOf(value) != -1)
                            return i;
                    }
                }

                return -1;
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('FontFamily');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('FontFamily');
                    //trace:1871 ie娑撳绮犲┃鎰垳濡�绱￠崚鍥ㄥ床閸ョ偞娼甸弮璁圭礉鐎涙ぞ缍嬫导姘敨閸楁洖绱╅崣鍑ょ礉閼板奔绗栨导姘箒闁褰�
                    value && (value = value.replace(/['"]/g, '').split(',')[0]);
                    ui.setValue(value);

                }
            }

        });
        return ui;
    };

    editorui.fontsize = function (editor, list, title) {
        title = editor.options.labelMap['fontsize'] || editor.getLang("labelMap.fontsize") || '';
        list = list || editor.options['fontsize'] || [];
        if(!list.length) return;
        var items = [];
        for (var i = 0; i < list.length; i++) {
            var size = list[i] + 'px';
            items.push({
                label:size,
                value:size,
                theme:editor.options.theme,
                renderLabelHtml:function () {
                    return '<div class="edui-label %%-label" style="line-height:1;font-size:' +
                        this.value + '">' + (this.label || '') + '</div>';
                }
            });
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            onselect:function (t, index) {
                editor.execCommand('FontSize', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            className:'edui-for-fontsize'
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('FontSize');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    ui.setValue(editor.queryCommandValue('FontSize'));
                }
            }

        });
        return ui;
    };

    editorui.paragraph = function (editor, list, title) {
        title = editor.options.labelMap['paragraph'] || editor.getLang("labelMap.paragraph") || '';
        list = editor.options['paragraph'] || [];
        if(utils.isEmptyObject(list)) return;
        var items = [];
        for (var i in list) {
            items.push({
                value:i,
                label:list[i] || editor.getLang("paragraph")[i],
                theme:editor.options.theme,
                renderLabelHtml:function () {
                    return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || '') + '</span></div>';
                }
            })
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            className:'edui-for-paragraph',
            onselect:function (t, index) {
                editor.execCommand('Paragraph', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('Paragraph');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('Paragraph');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };


    //閼奉亜鐣炬稊澶嬬垼妫帮拷
    editorui.customstyle = function (editor) {
        var list = editor.options['customstyle'] || [],
            title = editor.options.labelMap['customstyle'] || editor.getLang("labelMap.customstyle") || '';
        if (!list.length)return;
        var langCs = editor.getLang('customstyle');
        for (var i = 0, items = [], t; t = list[i++];) {
            (function (t) {
                var ck = {};
                ck.label = t.label ? t.label : langCs[t.name];
                ck.style = t.style;
                ck.className = t.className;
                ck.tag = t.tag;
                items.push({
                    label:ck.label,
                    value:ck,
                    theme:editor.options.theme,
                    renderLabelHtml:function () {
                        return '<div class="edui-label %%-label">' + '<' + ck.tag + ' ' + (ck.className ? ' class="' + ck.className + '"' : "")
                            + (ck.style ? ' style="' + ck.style + '"' : "") + '>' + ck.label + "<\/" + ck.tag + ">"
                            + '</div>';
                    }
                });
            })(t);
        }

        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            className:'edui-for-customstyle',
            onselect:function (t, index) {
                editor.execCommand('customstyle', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            indexByValue:function (value) {
                for (var i = 0, ti; ti = this.items[i++];) {
                    if (ti.label == value) {
                        return i - 1
                    }
                }
                return -1;
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('customstyle');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('customstyle');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };
    editorui.inserttable = function (editor, iframeUrl, title) {
        iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})['inserttable'] || iframeUrlMap['inserttable'];
        title = editor.options.labelMap['inserttable'] || editor.getLang("labelMap.inserttable") || '';
        if (iframeUrl) {
            var dialog = new editorui.Dialog({
                iframeUrl:editor.ui.mapUrl(iframeUrl),
                editor:editor,
                className:'edui-for-inserttable',
                title:title,
                buttons:[
                    {
                        className:'edui-okbutton',
                        label:editor.getLang("ok"),
                        editor:editor,
                        onclick:function () {
                            dialog.close(true);
                        }
                    },
                    {
                        className:'edui-cancelbutton',
                        label:editor.getLang("cancel"),
                        editor:editor,
                        onclick:function () {
                            dialog.close(false);
                        }
                    }
                ]

            });
            dialog.render();
            editor.ui._dialogs['inserttableDialog'] = dialog;
        }
        var openDialog = function () {
            if (dialog) {
                //閹垫挸绱戦崥搴″晙閸忔娊妫撮崘宥嗗ⅵ瀵拷妲告稉杞扮啊鐟欙絽鍠協ieldset閺傚洤鐡ч柨娆庣秴闂傤噣顣�
                if (browser.webkit) {
                    dialog.open();
                    dialog.close();
                }
                dialog.open();
            }
        };
        var ui = new editorui.TableButton({
            editor:editor,
            title:title,
            className:'edui-for-inserttable',
            onpicktable:function (t, numCols, numRows) {
                editor.execCommand('InsertTable', {numRows:numRows, numCols:numCols, border:1});
            },
            onmore:openDialog,
            onbuttonclick:openDialog
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('inserttable') == -1);
        });
        return ui;
    };

    editorui.lineheight = function (editor) {
        var val = editor.options.lineheight || [];
        if(!val.length)return;
        for (var i = 0, ci, items = []; ci = val[i++];) {
            items.push({
                //todo:閸愭瑦顒存禍锟�
                label:ci,
                value:ci,
                theme:editor.options.theme,
                onclick:function () {
                    editor.execCommand("lineheight", this.value);
                }
            })
        }
        var ui = new editorui.MenuButton({
            editor:editor,
            className:'edui-for-lineheight',
            title:editor.options.labelMap['lineheight'] || editor.getLang("labelMap.lineheight") || '',
            items:items,
            onbuttonclick:function () {
                var value = editor.queryCommandValue('LineHeight') || this.value;
                editor.execCommand("LineHeight", value);
            }
        });
        editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState('LineHeight');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('LineHeight');
                value && ui.setValue((value + '').replace(/cm/, ''));
                ui.setChecked(state)
            }
        });
        return ui;
    };

    var rowspacings = ['top', 'bottom'];
    for (var r = 0, ri; ri = rowspacings[r++];) {
        (function (cmd) {
            editorui['rowspacing' + cmd] = function (editor) {
                var val = editor.options['rowspacing' + cmd] || [];
                if(!val.length) return null;
                for (var i = 0, ci, items = []; ci = val[i++];) {
                    items.push({
                        label:ci,
                        value:ci,
                        theme:editor.options.theme,
                        onclick:function () {
                            editor.execCommand("rowspacing", this.value, cmd);
                        }
                    })
                }
                var ui = new editorui.MenuButton({
                    editor:editor,
                    className:'edui-for-rowspacing' + cmd,
                    title:editor.options.labelMap['rowspacing' + cmd] || editor.getLang("labelMap.rowspacing" + cmd) || '',
                    items:items,
                    onbuttonclick:function () {
                        var value = editor.queryCommandValue('rowspacing', cmd) || this.value;
                        editor.execCommand("rowspacing", value, cmd);
                    }
                });
                editor.addListener('selectionchange', function () {
                    var state = editor.queryCommandState('rowspacing', cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                        var value = editor.queryCommandValue('rowspacing', cmd);
                        value && ui.setValue((value + '').replace(/%/, ''));
                        ui.setChecked(state)
                    }
                });
                return ui;
            }
        })(ri)
    }
    //閺堝绨敍灞炬￥鎼村繐鍨悰锟�
    var lists = ['insertorderedlist', 'insertunorderedlist'];
    for (var l = 0, cl; cl = lists[l++];) {
        (function (cmd) {
            editorui[cmd] = function (editor) {
                var vals = editor.options[cmd],
                    _onMenuClick = function () {
                        editor.execCommand(cmd, this.value);
                    }, items = [];
                for (var i in vals) {
                    items.push({
                        label:vals[i] || editor.getLang()[cmd][i] || "",
                        value:i,
                        theme:editor.options.theme,
                        onclick:_onMenuClick
                    })
                }
                var ui = new editorui.MenuButton({
                    editor:editor,
                    className:'edui-for-' + cmd,
                    title:editor.getLang("labelMap." + cmd) || '',
                    'items':items,
                    onbuttonclick:function () {
                        var value = editor.queryCommandValue(cmd) || this.value;
                        editor.execCommand(cmd, value);
                    }
                });
                editor.addListener('selectionchange', function () {
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                        var value = editor.queryCommandValue(cmd);
                        ui.setValue(value);
                        ui.setChecked(state)
                    }
                });
                return ui;
            };
        })(cl)
    }

    editorui.fullscreen = function (editor, title) {
        title = editor.options.labelMap['fullscreen'] || editor.getLang("labelMap.fullscreen") || '';
        var ui = new editorui.Button({
            className:'edui-for-fullscreen',
            title:title,
            theme:editor.options.theme,
            onclick:function () {
                var scale=editor.ui.getDom("scale");
                if (editor.ui) {

                    editor.ui.setFullScreen(!editor.ui.isFullScreen());
                }
                this.setChecked(editor.ui.isFullScreen());
            }
        });
        editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState('fullscreen');
            ui.setDisabled(state == -1);
            ui.setChecked(editor.ui.isFullScreen());
        });
        return ui;
    };

    // 鐞涖劍鍎�
    editorui.emotion = function (editor, iframeUrl) {
        var ui = new editorui.MultiMenuPop({
            title:editor.options.labelMap['emotion'] || editor.getLang("labelMap.emotion") || '',
            editor:editor,
            className:'edui-for-emotion',
            iframeUrl:editor.ui.mapUrl(iframeUrl || (editor.options.iframeUrlMap || {})['emotion'] || iframeUrlMap['emotion'])
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('emotion') == -1)
        });
        return ui;
    };

    editorui.autotypeset = function (editor) {
        var ui = new editorui.AutoTypeSetButton({
            editor:editor,
            title:editor.options.labelMap['autotypeset'] || editor.getLang("labelMap.autotypeset") || '',
            className:'edui-for-autotypeset',
            onbuttonclick:function () {
                editor.execCommand('autotypeset')
            }
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('autotypeset') == -1);
        });
        return ui;
    };

})();

///import core
///commands 閸忋劌鐫�
///commandsName FullScreen
///commandsTitle  閸忋劌鐫�
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        domUtils = baidu.editor.dom.domUtils;
    var nodeStack=[];

    function EditorUI(options) {
        this.initOptions(options);
        this.initEditorUI();
    }

    EditorUI.prototype = {
        uiName:'editor',
        initEditorUI:function () {
            this.editor.ui = this;
            this._dialogs = {};
            this.initUIBase();
            this._initToolbars();
            var editor = this.editor,
                me = this;

            editor.addListener('ready', function () {
                //閹绘劒绶礸etDialog閺傝纭�
                editor.getDialog = function (name) {
                    return editor.ui._dialogs[name + "Dialog"];
                };
                domUtils.on(editor.window, 'scroll', function () {
                    baidu.editor.ui.Popup.postHide();
                });

                //display bottom-bar label based on config
                if (editor.options.elementPathEnabled) {
                    editor.ui.getDom('elementpath').innerHTML = '<div class="edui-editor-breadcrumb">' + editor.getLang("elementPathTip") + ':</div>';
                }
                if (editor.options.wordCount) {
                    editor.ui.getDom('wordcount').innerHTML = editor.getLang("wordCountTip");
                    //娑撶皯ordcount閹规洝骞忔稉顓熸瀮鏉堟挸鍙嗗▔鏇犳畱缁岀儤鐗�
                    editor.addListener('keyup', function (type, evt) {
                        var keyCode = evt.keyCode || evt.which;
                        if (keyCode == 32) {
                            me._wordCount();
                        }
                    });
                }
                editor.ui._scale();
                if (editor.options.scaleEnabled) {
                    if(editor.autoHeightEnabled){
                        editor.disableAutoHeight();
                    }
                    me.enableScale();
                }else{
                    me.disableScale();
                }
                if (!editor.options.elementPathEnabled && !editor.options.wordCount && !editor.options.scaleEnabled) {
                    editor.ui.getDom('elementpath').style.display = "none";
                    editor.ui.getDom('wordcount').style.display = "none";
                    editor.ui.getDom('scale').style.display = "none";
                }

                if (!editor.selection.isFocus())return;
                editor.fireEvent('selectionchange', false, true);


            });

            editor.addListener('mousedown', function (t, evt) {
                var el = evt.target || evt.srcElement;
                baidu.editor.ui.Popup.postHide(el);
            });
            editor.addListener('contextmenu', function (t, evt) {
                baidu.editor.ui.Popup.postHide();
            });
            editor.addListener('selectionchange', function () {
                //if(!editor.selection.isFocus())return;
                if (editor.options.elementPathEnabled) {
                    me[(editor.queryCommandState('elementpath') == -1 ? 'dis' : 'en') + 'ableElementPath']()
                }
                if (editor.options.wordCount) {
                    me[(editor.queryCommandState('wordcount') == -1 ? 'dis' : 'en') + 'ableWordCount']()
                }
                if (editor.options.scaleEnabled) {
                    me[(editor.queryCommandState('scale') == -1 ? 'dis' : 'en') + 'ableScale']();

                }
            });
            var popup = new baidu.editor.ui.Popup({
                editor:editor,
                content:'',
                className:'edui-bubble',
                _onEditButtonClick:function () {
                    this.hide();
                    editor.ui._dialogs.linkDialog.open();
                },
                _onImgEditButtonClick:function (name) {
                    this.hide();
                    editor.ui._dialogs[name] && editor.ui._dialogs[name].open();

                },
                _onImgSetFloat:function (value) {
                    this.hide();
                    editor.execCommand("imagefloat", value);

                },
                _setIframeAlign:function (value) {
                    var frame = popup.anchorEl;
                    var newFrame = frame.cloneNode(true);
                    switch (value) {
                        case -2:
                            newFrame.setAttribute("align", "");
                            break;
                        case -1:
                            newFrame.setAttribute("align", "left");
                            break;
                        case 1:
                            newFrame.setAttribute("align", "right");
                            break;
                        case 2:
                            newFrame.setAttribute("align", "middle");
                            break;
                    }
                    frame.parentNode.insertBefore(newFrame, frame);
                    domUtils.remove(frame);
                    popup.anchorEl = newFrame;
                    popup.showAnchor(popup.anchorEl);
                },
                _updateIframe:function () {
                    editor._iframe = popup.anchorEl;
                    editor.ui._dialogs.insertframeDialog.open();
                    popup.hide();
                },
                _onRemoveButtonClick:function (cmdName) {
                    editor.execCommand(cmdName);
                    this.hide();
                },
                queryAutoHide:function (el) {
                    if (el && el.ownerDocument == editor.document) {
                        if (el.tagName.toLowerCase() == 'img' || domUtils.findParentByTagName(el, 'a', true)) {
                            return el !== popup.anchorEl;
                        }
                    }
                    return baidu.editor.ui.Popup.prototype.queryAutoHide.call(this, el);
                }
            });
            popup.render();
            if (editor.options.imagePopup) {
                editor.addListener('mouseover', function (t, evt) {
                    evt = evt || window.event;
                    var el = evt.target || evt.srcElement;
                    if (editor.ui._dialogs.insertframeDialog && /iframe/ig.test(el.tagName)) {
                        var html = popup.formatHtml(
                            '<nobr>' + editor.getLang("property") + ': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._setIframeAlign(2) class="edui-clickable">' + editor.getLang("justifycenter") + '</span>' +
                                ' <span onclick="$$._updateIframe( this);" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>');
                        if (html) {
                            popup.getDom('content').innerHTML = html;
                            popup.anchorEl = el;
                            popup.showAnchor(popup.anchorEl);
                        } else {
                            popup.hide();
                        }
                    }
                });
                editor.addListener('selectionchange', function (t, causeByUi) {
                    if (!causeByUi) return;
                    var html = '',
                        img = editor.selection.getRange().getClosedNode(),
                        dialogs = editor.ui._dialogs;
                    if (img && img.tagName == 'IMG') {
                        var dialogName = 'insertimageDialog';
                        if (img.className.indexOf("edui-faked-video") != -1) {
                            dialogName = "insertvideoDialog"
                        }
                        if (img.className.indexOf("edui-faked-webapp") != -1) {
                            dialogName = "webappDialog"
                        }
                        if (img.src.indexOf("http://api.map.baidu.com") != -1) {
                            dialogName = "mapDialog"
                        }
                        if (img.className.indexOf("edui-faked-music") != -1) {
                            dialogName = "musicDialog"
                        }
                        if (img.src.indexOf("http://maps.google.com/maps/api/staticmap") != -1) {
                            dialogName = "gmapDialog"
                        }
                        if (img.getAttribute("anchorname")) {
                            dialogName = "anchorDialog";
                            html = popup.formatHtml(
                                '<nobr>' + editor.getLang("property") + ': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">' + editor.getLang("modify") + '</span>&nbsp;&nbsp;' +
                                    '<span onclick=$$._onRemoveButtonClick(\'anchor\') class="edui-clickable">' + editor.getLang("delete") + '</span></nobr>');
                        }
                        if (img.getAttribute("word_img")) {
                            //todo 閺�儳鍩宒ialog閸樿浠涢弻銉嚄
                            editor.word_img = [img.getAttribute("word_img")];
                            dialogName = "wordimageDialog"
                        }
                        if (!dialogs[dialogName]) {
                            return;
                        }
                        !html && (html = popup.formatHtml(
                            '<nobr>' + editor.getLang("property") + ': <span onclick=$$._onImgSetFloat("none") class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._onImgSetFloat("left") class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._onImgSetFloat("right") class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._onImgSetFloat("center") class="edui-clickable">' + editor.getLang("justifycenter") + '</span>&nbsp;&nbsp;' +
                                '<span onclick="$$._onImgEditButtonClick(\'' + dialogName + '\');" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>'))

                    }
                    if (editor.ui._dialogs.linkDialog) {
                        var link = editor.queryCommandValue('link');
                        var url;
                        if (link && (url = (link.getAttribute('data_ue_src') || link.getAttribute('href', 2)))) {
                            var txt = url;
                            if (url.length > 30) {
                                txt = url.substring(0, 20) + "...";
                            }
                            if (html) {
                                html += '<div style="height:5px;"></div>'
                            }
                            html += popup.formatHtml(
                                '<nobr>' + editor.getLang("anthorMsg") + ': <a target="_blank" href="' + url + '" title="' + url + '" >' + txt + '</a>' +
                                    ' <span class="edui-clickable" onclick="$$._onEditButtonClick();">' + editor.getLang("modify") + '</span>' +
                                    ' <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> ' + editor.getLang("clear") + '</span></nobr>');
                            popup.showAnchor(link);
                        }
                    }

                    if (html) {
                        popup.getDom('content').innerHTML = html;
                        popup.anchorEl = img || link;
                        popup.showAnchor(popup.anchorEl);
                    } else {
                        popup.hide();
                    }
                });
            }

        },
        _initToolbars:function () {
            var editor = this.editor;
            var toolbars = this.toolbars || [];
            var toolbarUis = [];
            for (var i = 0; i < toolbars.length; i++) {
                var toolbar = toolbars[i];
                var toolbarUi = new baidu.editor.ui.Toolbar({theme:editor.options.theme});
                for (var j = 0; j < toolbar.length; j++) {
                    var toolbarItem = toolbar[j];
                    var toolbarItemUi = null;
                    if (typeof toolbarItem == 'string') {
                        toolbarItem = toolbarItem.toLowerCase();
                        if (toolbarItem == '|') {
                            toolbarItem = 'Separator';
                        }

                        if (baidu.editor.ui[toolbarItem]) {
                            toolbarItemUi = new baidu.editor.ui[toolbarItem](editor);
                        }

                        //fullscreen鏉╂瑩鍣烽崡鏇犲婢跺嫮鎮婃稉锟界瑓閿涘本鏂侀崚浼搭湚鐞涘苯骞�
                        if (toolbarItem == 'fullscreen') {
                            if (toolbarUis && toolbarUis[0]) {
                                toolbarUis[0].items.splice(0, 0, toolbarItemUi);
                            } else {
                                toolbarItemUi && toolbarUi.items.splice(0, 0, toolbarItemUi);
                            }

                            continue;


                        }
                    } else {
                        toolbarItemUi = toolbarItem;
                    }
                    if (toolbarItemUi && toolbarItemUi.id) {

                        toolbarUi.add(toolbarItemUi);
                    }
                }
                toolbarUis[i] = toolbarUi;
            }
            this.toolbars = toolbarUis;
        },
        getHtmlTpl:function () {
            return '<div id="##" class="%%">' +
                '<div id="##_toolbarbox" class="%%-toolbarbox">' +
                (this.toolbars.length ?
                    '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' +
                        this.renderToolbarBoxHtml() +
                        '</div></div>' : '') +
                '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;">' +
                '<div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">' + this.editor.getLang("clickToUpload") + '</div>' +
                '<div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div>' +
                '<div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div>' +
                '<div style="height:0;overflow:hidden;clear:both;"></div>' +
                '</div>' +
                '</div>' +
                '<div id="##_iframeholder" class="%%-iframeholder"></div>' +
                //modify wdcount by matao
                '<div id="##_bottombar" class="%%-bottomContainer"><table><tr>' +
                '<td id="##_elementpath" class="%%-bottombar"></td>' +
                '<td id="##_wordcount" class="%%-wordcount"></td>' +
                '<td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td>' +
                '</tr></table></div>' +
                '<div id="##_scalelayer"></div>' +
                '</div>';
        },
        showWordImageDialog:function () {
            this.editor.execCommand("wordimage", "word_img");
            this._dialogs['wordimageDialog'].open();
        },
        renderToolbarBoxHtml:function () {
            var buff = [];
            for (var i = 0; i < this.toolbars.length; i++) {
                buff.push(this.toolbars[i].renderHtml());
            }
            return buff.join('');
        },
        setFullScreen:function (fullscreen) {

            var editor = this.editor,
                container = editor.container.parentNode.parentNode;
            if (this._fullscreen != fullscreen) {
                this._fullscreen = fullscreen;
                this.editor.fireEvent('beforefullscreenchange', fullscreen);
                if (baidu.editor.browser.gecko) {
                    var bk = editor.selection.getRange().createBookmark();
                }
                if (fullscreen) {
                    while(container.tagName!="BODY"){
                        var position = baidu.editor.dom.domUtils.getComputedStyle(container,"position");
                        nodeStack.push(position);
                        container.style.position = "static";
                        container = container.parentNode;
                    }
                    this._bakHtmlOverflow = document.documentElement.style.overflow;
                    this._bakBodyOverflow = document.body.style.overflow;
                    this._bakAutoHeight = this.editor.autoHeightEnabled;
                    this._bakScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                    if (this._bakAutoHeight) {
                        //瑜版挸鍙忕仦蹇旀娑撳秷鍏橀幍褑顢戦懛顏勫З闂�潡鐝�
                        editor.autoHeightEnabled = false;
                        this.editor.disableAutoHeight();
                    }
                    document.documentElement.style.overflow = 'hidden';
                    document.body.style.overflow = 'hidden';
                    this._bakCssText = this.getDom().style.cssText;
                    this._bakCssText1 = this.getDom('iframeholder').style.cssText;
                    this._updateFullScreen();
                } else {
                    while(container.tagName!="BODY"){
                        container.style.position = nodeStack.shift();
                        container = container.parentNode;
                    }
                    this.getDom().style.cssText = this._bakCssText;
                    this.getDom('iframeholder').style.cssText = this._bakCssText1;
                    if (this._bakAutoHeight) {
                        editor.autoHeightEnabled = true;
                        this.editor.enableAutoHeight();
                    }

                    document.documentElement.style.overflow = this._bakHtmlOverflow;
                    document.body.style.overflow = this._bakBodyOverflow;
                    window.scrollTo(0, this._bakScrollTop);
                }
                if (baidu.editor.browser.gecko) {
                    var input = document.createElement('input');
                    document.body.appendChild(input);
                    editor.body.contentEditable = false;
                    setTimeout(function () {
                        input.focus();
                        setTimeout(function () {
                            editor.body.contentEditable = true;
                            editor.selection.getRange().moveToBookmark(bk).select(true);
                            baidu.editor.dom.domUtils.remove(input);
                            fullscreen && window.scroll(0, 0);
                        },0)
                    },0)
                }
                this.editor.fireEvent('fullscreenchanged', fullscreen);
                this.triggerLayout();
            }
        },
        _wordCount:function () {
            var wdcount = this.getDom('wordcount');
            if (!this.editor.options.wordCount) {
                wdcount.style.display = "none";
                return;
            }
            wdcount.innerHTML = this.editor.queryCommandValue("wordcount");
        },
        disableWordCount:function () {
            var w = this.getDom('wordcount');
            w.innerHTML = '';
            w.style.display = 'none';
            this.wordcount = false;

        },
        enableWordCount:function () {
            var w = this.getDom('wordcount');
            w.style.display = '';
            this.wordcount = true;
            this._wordCount();
        },
        _updateFullScreen:function () {
            if (this._fullscreen) {
                var vpRect = uiUtils.getViewportRect();
                this.getDom().style.cssText = 'border:0;position:absolute;left:0;top:' + (this.editor.options.topOffset || 0) + 'px;width:' + vpRect.width + 'px;height:' + vpRect.height + 'px;z-index:' + (this.getDom().style.zIndex * 1 + 100);
                uiUtils.setViewportOffset(this.getDom(), { left:0, top:this.editor.options.topOffset || 0 });
                this.editor.setHeight(vpRect.height - this.getDom('toolbarbox').offsetHeight - this.getDom('bottombar').offsetHeight - (this.editor.options.topOffset || 0));

            }
        },
        _updateElementPath:function () {
            var bottom = this.getDom('elementpath'), list;
            if (this.elementPathEnabled && (list = this.editor.queryCommandValue('elementpath'))) {

                var buff = [];
                for (var i = 0, ci; ci = list[i]; i++) {
                    buff[i] = this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + i + '&quot;);">' + ci + '</span>');
                }
                bottom.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">' + this.editor.getLang("elementPathTip") + ': ' + buff.join(' &gt; ') + '</div>';

            } else {
                bottom.style.display = 'none'
            }
        },
        disableElementPath:function () {
            var bottom = this.getDom('elementpath');
            bottom.innerHTML = '';
            bottom.style.display = 'none';
            this.elementPathEnabled = false;

        },
        enableElementPath:function () {
            var bottom = this.getDom('elementpath');
            bottom.style.display = '';
            this.elementPathEnabled = true;
            this._updateElementPath();
        },
        _scale:function () {
            var doc = document,
                editor = this.editor,
                editorHolder = editor.container,
                editorDocument = editor.document,
                toolbarBox = this.getDom("toolbarbox"),
                bottombar = this.getDom("bottombar"),
                scale = this.getDom("scale"),
                scalelayer = this.getDom("scalelayer");

            var isMouseMove = false,
                position = null,
                minEditorHeight = 0,
                minEditorWidth = editor.options.minFrameWidth,
                pageX = 0,
                pageY = 0,
                scaleWidth = 0,
                scaleHeight = 0;

            function down() {
                position = domUtils.getXY(editorHolder);

                if (!minEditorHeight) {
                    minEditorHeight = editor.options.minFrameHeight + toolbarBox.offsetHeight + bottombar.offsetHeight;
                }

                scalelayer.style.cssText = "position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:" + editorHolder.offsetWidth + "px;height:"
                    + editorHolder.offsetHeight + "px;z-index:" + (editor.options.zIndex + 1);

                domUtils.on(doc, "mousemove", move);
                domUtils.on(editorDocument, "mouseup", up);
                domUtils.on(doc, "mouseup", up);
            }
            var me = this;
            //by xuheng 閸忋劌鐫嗛弮璺哄彠閹哄缂夐弨锟�
            this.editor.addListener('fullscreenchanged',function(e,fullScreen){
                if(fullScreen){
                    me.disableScale();

                }else{
                    if(me.editor.options.scaleEnabled){
                        me.enableScale();
                        var tmpNode = me.editor.document.createElement('span');
                        me.editor.body.appendChild(tmpNode);
                        me.editor.body.style.height = Math.max(domUtils.getXY(tmpNode).y,me.editor.iframe.offsetHeight - 20 ) + 'px';
                        domUtils.remove(tmpNode)
                    }
                }
            });
            function move(event) {
                clearSelection();
                var e = event || window.event;
                pageX = e.pageX || (doc.documentElement.scrollLeft + e.clientX);
                pageY = e.pageY || (doc.documentElement.scrollTop + e.clientY);
                scaleWidth = pageX - position.x;
                scaleHeight = pageY - position.y;

                if (scaleWidth >= minEditorWidth) {
                    isMouseMove = true;
                    scalelayer.style.width = scaleWidth + 'px';
                }
                if (scaleHeight >= minEditorHeight) {
                    isMouseMove = true;
                    scalelayer.style.height = scaleHeight + "px";
                }
            }

            function up() {
                if (isMouseMove) {
                    isMouseMove = false;
                    editorHolder.style.width = scalelayer.offsetWidth - 2 + 'px';
                    editor.setHeight(scalelayer.offsetHeight - bottombar.offsetHeight - toolbarBox.offsetHeight - 2);
                }
                if (scalelayer) {
                    scalelayer.style.display = "none";
                }
                clearSelection();
                domUtils.un(doc, "mousemove", move);
                domUtils.un(editorDocument, "mouseup", up);
                domUtils.un(doc, "mouseup", up);
            }

            function clearSelection() {
                if (browser.ie)
                    doc.selection.clear();
                else
                    window.getSelection().removeAllRanges();
            }

            this.enableScale = function () {
                //trace:2868
                if(editor.queryCommandState("source")==1)    return;
                scale.style.display = "";
                this.scaleEnabled = true;
                domUtils.on(scale, "mousedown", down);
            };
            this.disableScale = function () {
                scale.style.display = "none";
                this.scaleEnabled = false;
                domUtils.un(scale, "mousedown", down);
            };
        },
        isFullScreen:function () {
            return this._fullscreen;
        },
        postRender:function () {
            UIBase.prototype.postRender.call(this);
            for (var i = 0; i < this.toolbars.length; i++) {
                this.toolbars[i].postRender();
            }
            var me = this;
            var timerId,
                domUtils = baidu.editor.dom.domUtils,
                updateFullScreenTime = function () {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () {
                        me._updateFullScreen();
                    });
                };
            domUtils.on(window, 'resize', updateFullScreenTime);

            me.addListener('destroy', function () {
                domUtils.un(window, 'resize', updateFullScreenTime);
                clearTimeout(timerId);
            })
        },
        showToolbarMsg:function (msg, flag) {
            this.getDom('toolbarmsg_label').innerHTML = msg;
            this.getDom('toolbarmsg').style.display = '';
            //
            if (!flag) {
                var w = this.getDom('upload_dialog');
                w.style.display = 'none';
            }
        },
        hideToolbarMsg:function () {
            this.getDom('toolbarmsg').style.display = 'none';
        },
        mapUrl:function (url) {
            return url ? url.replace('~/', this.editor.options.UEDITOR_HOME_URL || '') : ''
        },
        triggerLayout:function () {
            var dom = this.getDom();
            if (dom.style.zoom == '1') {
                dom.style.zoom = '100%';
            } else {
                dom.style.zoom = '1';
            }
        }
    };
    utils.inherits(EditorUI, baidu.editor.ui.UIBase);


    var instances = {};


    UE.ui.Editor = function (options) {
        var editor = new baidu.editor.Editor(options);
        editor.options.editor = editor;
        utils.loadFile(document, {
            href:editor.options.themePath + editor.options.theme + "/css/ueditor.css",
            tag:"link",
            type:"text/css",
            rel:"stylesheet"
        });

        var oldRender = editor.render;
        editor.render = function (holder) {
            if(holder.constructor === String){
                editor.key = holder;
                instances[holder] = editor;
            }
            utils.domReady(function () {
                editor.langIsReady ? renderUI() : editor.addListener("langReady", renderUI);
                function renderUI() {
                    editor.setOpt({
                        labelMap:editor.options.labelMap || editor.getLang('labelMap')
                    });
                    new EditorUI(editor.options);
                    if (holder) {
                        if (holder.constructor === String) {
                            holder = document.getElementById(holder);
                        }
                        holder && holder.getAttribute('name') && ( editor.options.textarea = holder.getAttribute('name'));
                        if (holder && /script|textarea/ig.test(holder.tagName)) {
                            var newDiv = document.createElement('div');
                            holder.parentNode.insertBefore(newDiv, holder);
                            var cont = holder.value || holder.innerHTML;
                            editor.options.initialContent = /^[\t\r\n ]*$/.test(cont) ? editor.options.initialContent :
                                cont.replace(/>[\n\r\t]+([ ]{4})+/g, '>')
                                    .replace(/[\n\r\t]+([ ]{4})+</g, '<')
                                    .replace(/>[\n\r\t]+</g, '><');
                            holder.className && (newDiv.className = holder.className);
                            holder.style.cssText && (newDiv.style.cssText = holder.style.cssText);
                            if (/textarea/i.test(holder.tagName)) {
                                editor.textarea = holder;
                                editor.textarea.style.display = 'none';

                            } else {
                                holder.parentNode.removeChild(holder);
                                holder.id && (newDiv.id = holder.id);
                            }
                            holder = newDiv;
                            holder.innerHTML = '';
                        }

                    }
                    domUtils.addClass(holder, "edui-" + editor.options.theme);
                    editor.ui.render(holder);
                    var iframeholder = editor.ui.getDom('iframeholder');
                    //缂佹瑥鐤勬笟瀣潑閸旂姳绔存稉顏嗙椽鏉堟垵娅掗惃鍕啇閸ｃ劌绱╅悽锟�
                    editor.container = editor.ui.getDom();
                    editor.container.style.cssText = "z-index:" + editor.options.zIndex + ";width:" + editor.options.initialFrameWidth + "px";
                    oldRender.call(editor, iframeholder);

                }
            })
        };
        return editor;
    };



    /**
     * @file
     * @name UE
     * @short UE
     * @desc UEditor閻ㄥ嫰銆婇柈銊ユ嚒閸氬秶鈹栭梻锟�
     */
    /**
     * @name getEditor
     * @since 1.2.4+
     * @grammar UE.getEditor(id,[opt])  =>  Editor鐎圭偘绶�
     * @desc 閹绘劒绶垫稉锟介嚋閸忋劌鐪惃鍕煙濞夋洖绶遍崚鎵椽鏉堟垵娅掔�鐐扮伐
     *
     * * ''id''  閺�墽鐤嗙紓鏍帆閸ｃ劎娈戠�鐟版珤id, 婵″倹鐏夌�鐟版珤娑撳娈戠紓鏍帆閸ｃ劌鍑＄紒蹇撶摠閸︻煉绱濈亸杈╂纯閹恒儴绻戦崶锟�
     * * ''opt'' 缂傛牞绶崳銊ф畱閸欘垶锟介崣鍌涙殶
     * @example
     *  UE.getEditor('containerId',{onready:function(){//閸掓稑缂撴稉锟介嚋缂傛牞绶崳銊ョ杽娓氾拷
     *      this.setContent('hello')
     *  }});
     *  UE.getEditor('containerId'); //鏉╂柨娲栭崚姘灡瀵よ櫣娈戠�鐐扮伐
     *
     */
    UE.getEditor = function (id, opt) {
        var editor = instances[id];
        if (!editor) {
            editor = instances[id] = new UE.ui.Editor(opt);
            editor.render(id);
        }
        return editor;
    };


    UE.delEditor = function (id) {
        var editor;
        if (editor = instances[id]) {
            editor.key && editor.destroy();
            delete instances[id]
        }
    }
})();
///import core
///import uicore
 ///commands 鐞涖劍鍎�
(function(){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        SplitButton = baidu.editor.ui.SplitButton,
        MultiMenuPop = baidu.editor.ui.MultiMenuPop = function(options){
            this.initOptions(options);
            this.initMultiMenu();
        };

    MultiMenuPop.prototype = {
        initMultiMenu: function (){
            var me = this;
            this.popup = new Popup({
                content: '',
                editor : me.editor,
                iframe_rendered: false,
                onshow: function (){
                    if (!this.iframe_rendered) {
                        this.iframe_rendered = true;
                        this.getDom('content').innerHTML = '<iframe id="'+me.id+'_iframe" src="'+ me.iframeUrl +'" frameborder="0"></iframe>';
                        me.editor.container.style.zIndex && (this.getDom().style.zIndex = me.editor.container.style.zIndex * 1 + 1);
                    }
                }
               // canSideUp:false,
               // canSideLeft:false
            });
            this.onbuttonclick = function(){
                this.showPopup();
            };
            this.initSplitButton();
        }

    };

    utils.inherits(MultiMenuPop, SplitButton);
})();
})();