document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const tooltip = document.createElement('p');
        tooltip.innerText = e.target.dataset.tooltip;
        tooltip.classList.add('tooltip');
        console.log("ok..");
        buttons = document.querySelectorAll('button');
        for (const button of buttons) {
            if(button === e.target){

                //      left
                const buttonLeft = button.getBoundingClientRect().left;
                tooltip.style.left = buttonLeft + 'px';

                //      top
                const p = document.querySelector('p');
                const parHeight = parseInt( document.defaultView.getComputedStyle(p, '').getPropertyValue('height'));
                const parMargin = parseInt(document.defaultView.getComputedStyle(p, '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(p, '').getPropertyValue('margin-bottom'));
                const bodyMarginTop = parseInt(document.defaultView.getComputedStyle(document.body, '').getPropertyValue('margin-top'));
                const tooltipTop = parHeight+parMargin -bodyMarginTop -5 +  'px'
                tooltip.style.top = tooltipTop;
                
                //      correction
                // const tooltipHeight = tooltip.getBoundingClientRect().height;
                // console.log(tooltipHeight + ', ' + tooltipTop);
                // if (tooltipHeight > tooltipTop){
                //     tooltip.style.top = null;
                // const parMarginTop = parseInt(document.defaultView.getComputedStyle(p, '').getPropertyValue('margin-top'));
                // const buttonHeight = button.getBoundingClientRect().height;
                // const upperHeight = parHeight+parMarginTop + bodyMarginTop + buttonHeight;
                // const bodyHeight = document.body.getBoundingClientRect().height;
                
                // const tooltipBottom = bodyHeight - upperHeight + 'px';
                // tooltip.style.bottom = tooltipBottom;
                // }
                document.body.append(tooltip);
            }
        }
    }
})

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const tooltip = document.querySelector('.tooltip');
        tooltip.remove();
        
    }
        
});