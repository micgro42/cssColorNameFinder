<template>
    <div class="similarColorCard">
        <div class="similarColorCard__header">
            <h3>{{ colorName }}</h3> <p>Distance: {{ roundedDistance }}</p>
        </div>
        <div
                class="similarColorCard__colorArea"
                :style="'background-color: ' + colorName"
        ></div>
    </div>
</template>

<script lang="ts">

interface SimilarColorCardThis {
    distance: number;
    colorName: string;
    roundedDistance: () => number
}

export default {
    props: {
        colorName: {
            type: String,
            required: true,
        },
        distance: {
            type: Number,
            required: true,
        },
    },
    computed: {
        roundedDistance() {
            return Math.round((this as SimilarColorCardThis).distance);
        }
    }
};
</script>

<style scoped lang="scss">
    .similarColorCard {
        margin-top: 1rem;
        padding: 1rem;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        background-color: white;
    }

    .similarColorCard__header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .similarColorCard__colorArea {
        min-height: 10vh;
        border: 1px solid grey;
    }
</style>
