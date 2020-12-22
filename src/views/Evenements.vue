<template>
  <v-container fluid>
    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>
          <h3 class="font-weight-bold">Passage à Rennes le 23/01/2021</h3>
        </div>
      </template>
      <v-radio value="Film 1">
        <template v-slot:label>
          <div>
            Film 1
          </div>
        </template>
      </v-radio>
      <v-radio value="Film 2">
        <template v-slot:label>
          <div>
            Film 2
          </div>
        </template>
      </v-radio>
      <v-radio value="Film 3">
        <template v-slot:label>
          <div>
            Film 3
          </div>
        </template>
      </v-radio>
      <v-radio value="Film 4">
        <template v-slot:label>
          <div>
            Film 4
          </div>
        </template>
      </v-radio>
      <v-radio value="Film 5">
        <template v-slot:label>
          <div>
            Film 5
          </div>
        </template>
      </v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
export default {};
</script>