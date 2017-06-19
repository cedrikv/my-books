define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class App {

    constructor() {
      this.books = [];
      this.bookTitle = "";
    }

    addBook() {
      this.books.push({ title: this.bookTitle });
      this.bookTitle = "";
      console.log("Book list ", this.books);
    }
  }
  exports.App = App;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('book-list',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BookList = undefined;
  class BookList {}
  exports.BookList = BookList;
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>Add book</h1><form submit.trigger=\"addBook()\"><input value.bind=\"bookTitle\" id=\"book-title\" type=\"text\" placeholder=\"book title...\"> <input type=\"submit\" value=\"add\"></form><hr><ul><li repeat.for=\"book of books\">${book.title}</li></ul></template>"; });
define('text!book-list.html', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map