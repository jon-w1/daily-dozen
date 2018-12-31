$(document).ready(function() {
    var database = firebase.database();

    database.ref('foods').on('child_added', function(snapshot) {
        var item = snapshot.val();
        var html = $("#foodItemTemplate")[0].outerHTML;
        html = html.replace("[label]", item.label);

        var $newItem = $(html);
        $newItem.removeAttr("id")
            .appendTo(".js-summary-section")
            .show();

        var $checkbox = $newItem.find(".btn-group");
        for (var i=1; i<item.servings;i++) {
            $checkbox.clone().insertAfter($checkbox);
        }
    });
});