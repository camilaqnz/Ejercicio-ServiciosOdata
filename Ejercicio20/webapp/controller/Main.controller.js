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

		return Controller.extend("Ejercicio20.Ejercicio20.controller.Main", {
			onInit: function () {
                this.loadModel();
            },
            
            loadModel: async function() {
            var oComponent = this.getOwnerComponent();

            const oResponse = await Services.getOrderDetails();
            const oData = oResponse[0];

            var oOrderModel = new JSONModel();
            oOrderModel.setData(oData);

            oComponent.setModel(oOrderModel, Constants.model.orderSelected);
            },

            onSelectOrder: async function(oEvent){
                var oBindingContext = oEvent.getSource().getSelectedItem().getBindingContext(Constants.model.orderSelected).getPath();
                var oModel = this.getOwnerComponent().getModel(Constants.model.orderSelected);
                var oItemSelect = oModel.getProperty(oBindingContext);

                var oItemID=oItemSelect.OrderID;

                var oComponent = this.getOwnerComponent();
                const oResponse = await Services.getOrders(oItemID);
            
                const oData = oResponse[0];
                

                var oSelectModel = new JSONModel();
                oSelectModel.setData(oData);

                console.log(oSelectModel);

                oComponent.setModel(oSelectModel, Constants.model.orderItemSelected);

                Commons.onNavigate(this, Constants.routes.vista2);
            }

		});
	});