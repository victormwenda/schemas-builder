/**
 * Created by victor on 11/29/2016.
 */
document.getElementById('btn-build-schemas').addEventListener('click', onClickBuildSchemas, false);

function onClickBuildSchemas() {
    var databaseHost = $('#input-database-host').val();
    var databaseName = $('#input-database-name').val();
    var databaseUser = $('#input-database-user').val();
    var userPassword = $('#input-database-user').val();

    if (isFormValid(databaseHost, databaseName, databaseUser)) {
        var request_params = "database-host=" + databaseHost + "&database-name=" + databaseName
            + "&database-user=" + databaseUser + "&user-password=" + userPassword;

        sendPOSTHttpRequest(BUILD_SCHEMAS_URL, request_params, INTENT_BUILD_SCHEMAS);
    }

}

/**
 * Called when the http request was successful
 * @param request_intent
 * @param xhr
 * @param response
 */
function onSuccessHttpRequest(request_intent, xhr, response) {

}

/**
 * Called when the http request fails
 * @param request_intent
 * @param xhr
 */
function onFailedHttpRequest(request_intent, xhr) {
 document.getElementById("main-content").innerHTML = xhr.responseText;
}

/**
 * Checks if database connection  form input form is valid
 * @param databaseHost
 * @param databaseName
 * @param databaseUser
 */
function isFormValid(databaseHost, databaseName, databaseUser) {
    var formValid = true;

    if (databaseHost == "") {
        formValid = false;
        document.getElementById('input-database-host').style.borderColor = "#FF0000";
    } else {
        document.getElementById('input-database-host').style.borderColor = "#BEBEBE";
    }
    if (databaseName == "") {
        formValid = false;
        document.getElementById('input-database-name').style.borderColor = "#FF0000";
    } else {
        document.getElementById('input-database-name').style.borderColor = "#BEBEBE";
    }
    if (databaseUser == "") {
        formValid = false;
        document.getElementById('input-database-user').style.borderColor = "#FF0000";
    } else {
        document.getElementById('input-database-user').style.borderColor = "#BEBEBE";
    }
    return formValid;
}