
(function ($) {

Drupal.behaviors.salesforceWebformFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.salesforce-webform-settings-form', context).drupalSetSummary(function (context) {
      var use = $("input#edit-salesforce-webform-settings-use-salesforce:checked").val();

      if (use == 1)
      {
		$('div.form-item-salesforce-object').removeClass("form-disabled")
        $("select#edit-salesforce-webform-settings-salesforce-object").removeAttr("disabled");
      }
      else
      {
        $('div.form-item-salesforce-object').addClass("form-disabled")
        $("select#edit-salesforce-webform-settings-salesforce-object").attr("disabled", "disabled");
      }

      return use ? Drupal.t('Enabled, Object: @object', { '@object': $("select#edit-salesforce-webform-settings-salesforce-object").val() }) : Drupal.t('Disabled');
    });
  }
};

})(jQuery);
