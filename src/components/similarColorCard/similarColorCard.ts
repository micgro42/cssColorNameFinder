import './similarColorCard.scss';

export default {
    props: [
        'colorName',
        'distance',
    ],
    template: `
<div class="similarColorCard">
<div class="similarColorCard__header">
    <h3>{{ colorName }}</h3> <p>Distance: {{ Math.round(distance) }}</p>
</div>
<div
   class="similarColorCard__colorArea"
   :style="'background-color: ' + colorName"
></div>
</div>
`,
};
