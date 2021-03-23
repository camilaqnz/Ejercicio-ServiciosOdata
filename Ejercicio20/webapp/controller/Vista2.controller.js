sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "Ejercicio20/Ejercicio20/util/Services",
        "Ejercicio20/Ejercicio20/util/Constants",
        "sap/ui/model/json/JSONModel",
        "Ejercicio20/Ejercicio20/util/Commons"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Services, Constants, JSONModel, Commons) {
		"use strict";

		return Controller.extend("Ejercicio20.Ejercicio20.controller.Vista2", {
			onInit: function () {
            },
                //SE EJECUTA CADA VEZ QUE INGRESA A LA RUTA
                /* this.getOwnerComponent().getRouter().getRoute(Constants.routes.vista2).attachPatternMatched(this.onRouteMatched, this);
                this.loadModelOrder();
            },

            onRouteMatched: function () {
                var orderID = this.getOwnerComponent().getModel("ItemSelectModel").getData();
                this.loadModelOrder(orderID);
            },

            /* loadModelOrder: async function(orderID) {
            var oComponent = this.getOwnerComponent();

            const oResponse = await Services.getOrders(orderID);
            const oData = oResponse[0];

            var oOrderSelectModel = new JSONModel();
            oOrderSelectModel.setData(oData);

            oComponent.setModel(oOrderSelectModel, "opcionSeleccionModel");
            }, */

            onNavBack: function () {
                Commons.onNavBack()
            }

		});
	});