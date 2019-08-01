# Code Snippets
Here I will add useful snippets from upcoming topics.

## Single file component
::: tip
Define this template as a vscode snippet. It makes your life so much easier.

[How to setup snippets in vscode](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
:::

Template Structure Single file components with Typescript
``` js
<template>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component({
    name: 'Name',
})
export default class Name extends Vue {

}
</script>

<style scoped lang="scss">
    
</style>
```

## Counter
Small example how we can call a method

<counter/>

### Vue JS Code
```js
<template>
    <div>
        <h2>{{counter}}</h2>
        <a class="button" @click="increase">Increase</a>
    </div>
</template>

<script lang="ts">
export default {
    data () {
        return {
            counter: 0,
        }
    },

    methods: {
        increase() {
            this.counter += 1;
        }
    }
}
</script>

<style scoped lang="scss">
</style>
```

### Vue Typescript Code

```typescript
<template>
    <div>
        <h2>{{value}}</h2>
        <a class="button" @click="increase()">Increase</a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'Counter',
})
export default class Counter extends Vue {

    private value: number = 0;

    private increase() {
        this.value += 1;
    }
}
</script>

<style scoped lang="scss">
</style>
```