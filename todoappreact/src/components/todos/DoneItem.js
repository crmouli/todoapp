"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var PropTypes = require("prop-types");
var DoneItem = /** @class */ (function (_super) {
    __extends(DoneItem, _super);
    function DoneItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoneItem.prototype.render = function () {
        return React.createElement("li", { key: this.props.id },
            " ",
            this.props.title,
            React.createElement("button", { className: "remove-item btn btn-default btn-xs pull-right" },
                React.createElement("span", { className: "fa fa-times fa-1", onClick: this.props.removeItem })));
    };
    DoneItem.propTypes = {
        title: PropTypes.string.isRequired,
        status: PropTypes.any.isRequired,
        id: PropTypes.string.isRequired,
        removeItem: PropTypes.func.isRequired
    };
    return DoneItem;
}(React.Component));
exports.DoneItem = DoneItem;
