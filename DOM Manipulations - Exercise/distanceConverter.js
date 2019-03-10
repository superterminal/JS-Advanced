function attachEventsListeners() {

    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    $('#convert').on('click', () => {
        let $inputDistance = +$('#inputDistance').val();

        let $outputDistance = $('#outputDistance');
    
        let $inputUnits = $('#inputUnits').val();
    
        let $outputUnits = $('#outputUnits').val();
    
        $outputDistance.attr('disabled', 'true');
    
        $outputDistance.val($inputDistance * units[$inputUnits] / units[$outputUnits]);
    });
}

