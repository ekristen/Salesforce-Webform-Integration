
(function ($) {

Drupal.behaviors.salesforceWebformFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.salesforce-webform-settings-form', context).drupalSetSummary(function (context) {
      var use = $("input[@name=use_salesforce]:checked").val();

      if (use == 1)
      {
		$('div.form-item-salesforce-object').removeClass("form-disabled")
        $("select#edit-salesforce-object").removeAttr("disabled");
      }
      else
      {
        $('div.form-item-salesforce-object').addClass("form-disabled")
        $("select#edit-salesforce-object").attr("disabled", "disabled");
      }

      return use == true ?
        Drupal.t('Enabled, Object: @object', { '@object': $("select#edit-salesforce-object option:selected").val() }) :
        Drupal.t('Disabled');

    });
  }
};

})(jQuery);
