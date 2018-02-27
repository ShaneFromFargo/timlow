var dripFormId = "340726239";
/*This script uses jQuery. You need to import jQuery before this script is run*/
/*This is a function that tells the browser to execute the code below once the entire page has loaded */
jQuery(document).ready(function () {
  /*If you open up the Google Chrome Developer console you can see the log.*/
  /*If you see the following message "Jquery Loaded", you have verified that jQuery is correctly loaded on your page */
  console.log("Jquery loaded");

  /*When the drip form is submitted we prevent the default submt, and run the following script to get the URL Params*/
  jQuery("form[data-drip-embedded-form='"+dripFormId+"']").submit(function(e)
  {
    e.preventDefault();
    /*Loop through each field in the form */
      jQuery("form[data-drip-embedded-form='"+dripFormId+"'] :input").each(function()
      {
        var nameAttributeString = jQuery(this).attr("name");
        /*We ignore the name and email fields*/
        /*If you wish to ignore more fields, simply add {&& nameAttributeString!="fields[otheFieldHere]"}*/
        if(nameAttributeString!=null && nameAttributeString!="fields[email]" && nameAttributeString.toLowerCase() != "fields[full_name]" && nameAttributeString.toLowerCase()!= "fields[name]" && nameAttributeString.toLowerCase()!= "fields[first_name]")
        {
          var urlParam = nameAttributeString.replace("fields[","").replace("]","");
          var fieldValue = getUrlParameter(urlParam);
          if(fieldValue!="not_set")
          {
            jQuery(this).val(fieldValue);
          }
        }
    });
    jQuery(this).unbind('submit').submit();
});
});

/*The following function gets the url Parameter from the URL Bar.*/
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
    return "not_set";
