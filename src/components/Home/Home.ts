import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export class Home extends Vue {

    changeRoute(route: string):void{
        this.$router.push(`/${route}`)
    }
}