// CustomTooltipPlugin.js

export const customTooltipPlugin = {
    id: 'customTooltip',
    beforeRender: function (chart, args, options) {
        if (options.enabled && chart.tooltip && chart.tooltip._model) {
            const tooltip = chart.tooltip;
            tooltip._model.backgroundColor = options.backgroundColor;
            tooltip._model.titleFontColor = options.titleColor;
            tooltip._model.bodyFontColor = options.bodyColor;
            tooltip._model.borderColor = options.borderColor;
            tooltip._model.borderWidth = options.borderWidth;
            tooltip._model.cornerRadius = options.cornerRadius;
            tooltip._model.padding = options.padding;
        }
    },
    callbacks: {
        title: function (tooltipItem, data) {
            // Return an empty string to remove the title
            return '';
        },
        label: function (context) {
            // Customize the label as needed based on the context
            const label = context.label || '';
            return label;
        },
    },
};
