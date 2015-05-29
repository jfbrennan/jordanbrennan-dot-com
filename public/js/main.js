(function(){
    var workExperience = JFB.content.workExperience,
        $delegate = $(document);

    $(document).ready(function () {
        var $weIframeWrapper = $('#work-experience-iframe-wrapper'),
            weIframeSelector = "#work-experience-iframe",
            $weInfo = $('#work-experience-info');

        // Show the selected work experience
        $delegate.on('change', "#work-experience-selector", changeWorkExperience);

        // Remove the loading message
        $delegate.on('load', weIframeSelector, function () {
            $weIframeWrapper.removeClass('iframe-wait');
        });

    });

    function changeWorkExperience() {
        var exp = workExperience[this.value];

        $weIframeWrapper.addClass('iframe-wait');
        $(weIframeSelector).attr('src', exp.url);
        $('option.default').attr('disabled', 'disabled');

        $weInfo.find('h2').text(exp.name);
        $weInfo.find('p').text(exp.desc);

        $('#work-experience-showcase').removeClass('hidden');
    }

})();
