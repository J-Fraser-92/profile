function addEmploymentModals(element, employment) {
    for (job in employment) {
        element.append(`
            <div class="modal fade" id="%id%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 style="display: inline-block;" class="modal-title" id="%id%-title">%company%</h3>
                            <button type="button" class="dismiss-button" data-dismiss="modal">&#10006;</button>
                        </div>
                        <div class="modal-body">
                            <img class="img-responsive" src="%image%">
                            <h4>%role%</h4>
                            Texttext texttexttext texttexttextt exttexttexttex ttexttext textte xttextte xttext text
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        `.replace("%id%", employment[job].company.replace(" ", "-").toLowerCase())
        .replace("%company%", employment[job].company)
        .replace("%role%", employment[job].role)
        .replace("%image%", employment[job].image));
    }
}

function addEducation(element, education) {
    element.append(`
        <div class="col-md-1">
          <img class="img-responsive" src="http://placehold.it/350x250">
        </div>
        <div class="col-md-11">
          <h3>University of Strathclyde</h3>
          <h4>Computer & Electronic Systems - MEng with Distinction</h4>
          <div class="row">
              <h4>Relevant modules include:</h4>
          </div>
          <div id="education-modules">
          </div>
        </div>
    `);

    for (var i = 0; i < education.length; i+=2) {
        if (!education[i+1]) {
            $("#education-modules").append(`
                <div class="row">
                    <div class="col-md-6">
                        <li>{0}</li>
                    </div>
                </div>
            `.replace("%module%", education[i]));
        } else {
            $("#education-modules").append(`
                <div class="row">
                    <div class="col-md-6">
                        <li>%module1%</li>
                    </div>
                    <div class="col-md-6">
                        <li>%module2%</li>
                    </div>
                </div>
            `.replace("%module1%", education[i]).replace("%module2%", education[i+1]));
        }
    }
}