<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
    
      <div class="q-py-lg q-px-xl">

        <q-item-section avatar>
          <q-icon
            name="account_circle" 
            size="xl"
          />
          </q-item-section>

        <q-input
        class="new-suggestion" 
        bottom-slots 
        v-model="newSuggestionContent" 
        label="O que você quer assistir?" 
        counter
        autogrow 
        maxlength="100" 
        :dense="dense">
          
          <template v-slot:after>
            <q-btn 
            @click="addNewSuggestion"
            color="primary" 
            label="Enviar"
            :disable="!newSuggestionContent" 
            />
          </template>
        </q-input>
      </div>

      <q-separator size="10px" color="grey-3" class="divider"/>
      
      <q-list separator>
        <q-item clickable v-ripple v-for="suggestion in suggestions"
        :key="suggestion.date"
        class="q-py-lg">
          <q-item-section avatar top>
            <q-icon 
              name="account_circle" 
              size="xl"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1">
              <strong>Lucas </strong>
              <span class="text-grey-7 text-body1">@user</span>
            </q-item-label>
            <q-item-label>
              {{suggestion.content}}
            </q-item-label>
            <div class="row q-mt-xs" >
              <q-btn flat round color="grey" icon="thumb_up" size='md'/>
              <q-btn flat round color="grey" icon="notifications" size='md'/>
              <q-btn flat round color="grey" icon="thumb_down" size='md'/>
              <q-btn @click="deleteSuggestion(suggestion)" flat round color="grey" icon="delete" size='md'/>
            </div>
          </q-item-section>

        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data () {
    return {
      newSuggestionContent: '',
      suggestions: [
        {
          content: 'De Volta para o Futuro - parte II',
          date: 1667091300426
        },
        {
          content: '#Alive',
          date: 1667091300426
        },
        {
          content: 'Harry Potter e a Pedra Filosofal',
          date: 1667091300426
        }]
      }
    },
  methods: {
    addNewSuggestion() {
      let newSuggestion = {
        content: this.newSuggestionContent,
        date: Date.now(),
      }
      this.suggestions.push(newSuggestion)
      this.newSuggestionContent = ''
    },
    deleteSuggestion(suggestion) {
      let dateToDelete = suggestion.date
      let index = this.suggestions.findIndex(suggestion => suggestion.date === dateToDelete)
      this.suggestions.splice(index, 1)
    }
  },
}
)
</script>

<style lang="sass">
.new-suggestion
  textarea
   font-size: 19px
   line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
