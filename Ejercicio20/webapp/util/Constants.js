sap.ui.define([], function(){
    "use strict";
    return {
        model:{
            I18N: "i18n",
            selectedOrder: "SelectedOrderModel",
            optionSelected: "OptionSelectedModel",
            orderSelected: "OrderDetailsModel",
            orderItemSelected: "OrderItemsModel"
        },

        entity: {
            ORDERS: "/V3/Northwind/Northwind.svc/Orders",
            ORDER_DETAILS: "/V3/Northwind/Northwind.svc/Order_Details"
        },

        method:{
            GET: "GET"
        },

        endPoint:{
            NORTHWIND: "Northwind"
        },
        
        FRAGMENTS:{
            detail: "idDialogDetail"
        },

        routes: {
            main: "Main",
            vista2: "RouteVista2"
        },
    };
}, true);