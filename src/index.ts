import Vue from 'vue';
import IntroCard from './components/IntroCard/IntroCard.vue';
import SimilarColorCard from './components/SimilarColorCard/SimilarColorCard.vue';
import SortColorsRequest from './usecases/SortColors/SortColorsRequest';
import UseCaseFactory from './usecases/UseCaseFactory';

const v = new Vue({
    components: {
        IntroCard,
        SimilarColorCard,
    },
    computed: {
        similarColors() {
            const parsedInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.name);
            if (!parsedInput) {
                return [];
            }
            const red: number = parseInt(parsedInput[1], 16);
            const green: number = parseInt(parsedInput[2], 16);
            const blue: number = parseInt(parsedInput[3], 16);

            const sortColorsUC = UseCaseFactory.newSortColorsUseCase();
            const requestModel = new SortColorsRequest(red, green, blue);
            const responseModel = sortColorsUC.sortColors(requestModel);
            return responseModel.getThreeNearestColors();
        },
    },
    data() {
        return {
            name: '',
        };
    },
    el: '#app',
    template: `
    <div class="app">
        <h1>CSS Color Name Finder</h1>
        <IntroCard v-if="similarColors.length === 0"></IntroCard>
        <label>Pick a color: <input v-model="name" type="color"></label>
        <div v-if="similarColors.length > 0">
        <h2>Colors close to {{name}}:</h2>
        <SimilarColorCard
            v-for="color in similarColors"
            v-bind:key="color[0]"
            v-bind:colorName="color[0]"
            v-bind:distance="color[1]"
        ></SimilarColorCard>
        </div>
    </div>`,
});
