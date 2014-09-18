var WorkExperience = {
    BlueNile: {name: "Blue Nile", desc: "Front-end dev for market-leading eCommerce brand.", url: "http://www.bluenile.com/"},
    Expeditors: {name: "Expeditors", desc: "Internal tools design and development. Sorry, NDA. But here's their website:", url: "http://expeditors.com/"},
    Avue: {name: "Avue Technologies", desc: "Front-end dev and design for enterprise web app. (Plus lots of SaaS tools, but under strict NDA.)", url: "https://www.avuecentral.com/casting/aiportal/control/mainmenu"},
    Pierce: {name: "Pierce College", desc: "Large site redesign.", url: "http://www.pierce.ctc.edu/"}
};


$(document).ready(function () {
    var weSelector = $('#work-experience-selector');
    var optionTemplate = $('#work-experience-selector .template');
    var option = optionTemplate.clone().removeClass('template default');
    var $weIframeWrapper = $('#work-experience-iframe-wrapper');
    var $weIframe = $('#work-experience-iframe-wrapper > iframe');

    $weIframe.bind('load', function () {
        $weIframeWrapper.removeClass('iframe-wait');
    });

    //populate the drop-down
    for (key in WorkExperience) {
        weSelector.append(option.clone().val(key).text(WorkExperience[key].name));
    }

    //display selected work experience
    weSelector.change(function (e) {
        var we = WorkExperience[$(this).val()];

        $weIframeWrapper.addClass('iframe-wait');
        $('option.default').attr('disabled', 'disabled');

        $('#work-experience-info h2').text(we.name);
        $('#work-experience-info p').text(we.desc);
        $weIframe.attr('src', we.url);

        $('#work-experience-showcase').removeClass('hidden');
    });
});