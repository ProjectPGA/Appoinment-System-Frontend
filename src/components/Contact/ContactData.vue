<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-12"><logo-app /></div>
            <div class="column is-12">
                <titles-app
                    title="titles.contact"
                    class="title-contact"
                ></titles-app>
                <ul class="info-contact">
                    <li>
                        <ol class="title-info-contact">
                            {{
                                $t('components.contact.titleSchedule')
                            }}
                        </ol>
                        <ol>
                            {{
                                $t('components.contact.textMondayToFriday')
                            }}
                        </ol>
                        <ol>
                            {{
                                $t('components.contact.textSaturday')
                            }}
                        </ol>
                    </li>
                    <li>
                        <ol class="title-info-contact">
                            {{
                                $t('components.contact.titlePhone')
                            }}
                        </ol>
                        <ol>
                            {{
                                $t('components.contact.textPhone')
                            }}
                        </ol>
                    </li>
                    <li>
                        <ol class="title-info-contact">
                            {{
                                $t('components.contact.titleAddress')
                            }}
                        </ol>
                        <ol>
                            {{
                                $t('components.contact.textAddress')
                            }}
                        </ol>
                        <ol>
                            {{
                                $t('components.contact.textCity')
                            }}
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import TitlesApp from '@/components/Home/TitlesApp.vue';

@Component({
    name: 'ContactData',
    components: {
        LogoApp,
        TitlesApp,
    },
})
export default class ContactData extends Vue {}
</script>

<style lang="scss" scoped>
.title-contact {
    padding-bottom: 15px;
}
.info-contact {
    text-align: center;
}
.title-info-contact {
    font-size: 1.5em;
    padding: 5px;
}
</style>
