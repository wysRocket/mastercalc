
  
  Vue.component('summary-quotation-work-item', {
    template: '\
    <tr>\
      <td scope="col" class="test-left"> {{name}} </td>\
      <td scope="col" class="text-right">{{ formatPrice(total) }}</td>\
    </tr>\
    ',
    props: ['name',  'total']
  })
  
  Vue.component('summary-quotation-work-group', {
    template: '\
        <tbody>\
          <tr>\
            <th colspan=\"2\" class=\"text-left\">\
              {{ groupTitle }}\
            </th>\
          </tr>\
          <summary-quotation-work-item\
            v-for="(item, index) in items"\
            v-bind:name=item.name\
            v-bind:total=item.total\
          >\
          </summary-quotation-work-item>\
          <tr>\
            <th scope="col" class="test-left"> Итого {{ groupTitle }}:  </th>\
            <th scope="col" class="text-right">{{ formatPrice(getTotal) }}</th>\
          </tr>\
        </tbody>\
    ',
    props: ['groupTitle', 'items'],
    computed: {
      getTotal(){
        return this.items.reduce((a,b) => a+b['total'], 0)
      }
    }
  })
  
  Vue.component('summary-quotation-table', {
      template: '\
    <div>\
    <h4>Итоговая смета.</h4>\
      <table class="table table-borderless">\
      <thead class="mastercalc-background">\
        <tr>\
         <th scope="col">Работы</th>\
         <th scope="col" class="text-right">Стоимость</th>\
        </tr>\
        </thead>\
          <summary-quotation-work-group\
            v-for="(item, index) in items"\
            v-bind:groupTitle="item.groupTitle"\
            v-bind:items="item.items"\
          >\
          </summary-quotation-work-group>\
          <tr>\
            <th scope="col" class="test-left"> Итого Работы:  </th>\
            <th scope="col" class="text-right">{{ formatPrice(getTotal) }}</th>\
          </tr>\
      </table>\
    </div>\
        ',
        props: ['items'], 
        computed: {
          getTotal(){
              return this.items.reduce((a,b) => a+b.items.reduce((a,b) =>  a+b['total'], 0), 0)  
          }
        }
  })
  
  
  Vue.component('summary-quotation-materials-item', {
    template: '\
    <tr>\
      <td scope="col" class="test-left"> {{name}} </td>\
      <td scope="col" class="text-right">{{ formatPrice(total) }}</td>\
    </tr>\
    ',
    props: ['name',  'total']
  })
  
  Vue.component('summary-materials-table', {
      template: '\
    <div>\
      <table class="table table-borderless">\
      <thead class="mastercalc-background">\
        <tr>\
         <th scope="col">Материалы</th>\
         <th scope="col" class="text-right">Стоимость</th>\
        </tr>\
        </thead>\
        \
          <summary-quotation-materials-item\
            v-for="(item, index) in items"\
            v-bind:name="item.name"\
            v-bind:total="item.total"\
          >\
          </summary-quotation-materials-item>\
          <tr>\
            <th scope="col" class="test-left"> Итого Материалы:  </th>\
            <th scope="col" class="text-right">{{ formatPrice(getTotal) }}</th>\
          </tr>\
      </table>\
    </div>\
        ',
        props: ['items'],
        computed: {
          getTotal(){
            return this.items.reduce((a,b) => a + b['total'], 0);
          }
        }
  })
  
  Vue.component('material-items', {
    template: '\
      <li class="table-row">\
       <div class="col e-col-1"><a target="_blank" v-bind:href="url">{{ name }}</a></div>\
       <div class="col e-col-2">{{ unit }}</div>\
       <div class="col e-col-3">{{ qt }}</div>\
       <div class="col e-col-4">{{ formatPrice(price) }}</div>\
       <div class="col e-col-5">{{ formatPrice(total) }}</div>\
      </li>\
    ',
    props: ['id', 'name', 'unit', 'qt', 'price', 'total', 'url']
  })
  
  Vue.component('supplier-materials',{
    template: '\
   <div class="card card-grey">\
      <div class="card-header " >\
          <button class=\"btn btn-link col e-col-1\" type=\"button\" data-toggle=\"collapse\" v-bind:data-target="el" aria-expanded=\"true\" v-bind:aria-controls="id">\
            {{ suppliername }} - {{ formatPrice(proposalTotal) }}\
          </button>\
        \
      </div>\
      <div v-bind:id="id" class=\"collapse show\" v-bind:aria-labelledby="id" data-parent=\"#accordionExample\">\
        <div class=\"card-body\">\
            <ul class="responsive-table">\
              <li\
                is="material-items"\
                v-for="(item, index) in items"\
                v-bind:id="item.supplier_material_id"\
                v-bind:name="item.name"\
                v-bind:unit="item.unit"\
                v-bind:qt="item.qt"\
                v-bind:price="item.price"\
                v-bind:total="item.total"\
                v-bind:url="item.url"\
              ></li>\
            </ul>\
        </div>\
      </div>\
    </div>\
    ',
    props: ['suppliername', 'id', 'el', 'items', 'rowid', 'index'], 
    computed: {
      id(){
        return "supplier-row-id" + this.rowid + this.index;
      },
      el(){
        return "#supplier-row-id" + this.rowid + this.index;
      },
      proposalTotal() {
        return this.items.reduce((a,b) => a + b['total'], 0);
      }
    }
  })
  
     
  
  Vue.component('material-row', {
    template: '\
         <tbody>\
          <tr data-toggle="collapse" v-bind:data-target="elementIdLink" class="accordion-toggle">\
            <td scope="col" class="text-left" > {{ itemName }} </td>\
            <td scope="col" class="text-right" > {{ unit }} </td>\
            <td scope="col" class="text-right" > {{ qt }}</td>\
            <td scope="col" class="text-right" > Новая Линия</td>\
            <td scope="col" class="text-right" > {{ qt }}</td>\
            <td scope="col" class="text-right" >{{ formatPrice(price) }} </td>\
            <td scope="col" class="text-right" >{{ formatPrice(total) }} </td>\
            <td scope="col" class="text-right" > <button type="button" class="btn btn-link" v-if="supplierslist.length > 0">Другие предложения</button></td>\
          </tr>\
          <tr>\
              <td colspan="6" class="hiddenRow">\
              <div class="accordian-body collapse" v-bind:id="elementId">\
                <div id="suppliers" class="accordion">\
                    <supplier-materials-cards\
                                    v-for="(item, index) in supplierslist"\
                                    v-bind:id="getId(item.supplier_id)"\
                                    v-bind:suppliername="item.supplier_name"\
                                    v-bind:el="_elementId(item.supplier_id)"\
                                    v-bind:items= "item.materials"\
                                    v-bind:index="index"\
                    >\
                    </supplier-materials-cards>\
                </div>\
              </div>\
              </td>\
          </tr>\
        </tbody>\
    ',
    props: ['itemName', 'itemURL', 'unit', 'qt', 'price', 'total', 'index', 'elementId', 'elementIdLink', 'supplierslist'],
    computed: {
      elementId(){
        return "material-row-id" + this.$parent.index + "-" + this.index;
      },
      elementIdLink(){
        return "#material-row-id" + this.$parent.index + "-" + this.index;
      }
    },
    methods: {
          _elementId: function(id) {
              var result = '';
              result = '#s' + id;
              return result;
          },
          getId: function(id) {
              var result = '';
              result = 's' + id;
              return result;
          },
    }
  
  })
  
  Vue.component('materials-table', {
    template: '\
    <div>\
    <!--h4>{{ title }}. Материалы</h4-->\
      <table class="table table-borderless">\
      <thead class="mastercalc-background">\
        <tr>\
         <th scope="col">Материалы</th>\
         <th scope="col" class="text-right">Ед. изм.</th>\
         <th scope="col" class="text-right">Необходимое к-во</th>\
         <th scope="col" class="text-right">Лучшее предложение</th>\
         <th scope="col" class="text-right">К-во</th>\
         <th scope="col" class="text-right">Цена (грн)</th>\
         <th scope="col" class="text-right">Стоимость (грн)</th>\
         <th scope="col" class="text-right">&nbsp;</th>\
        </tr>\
      </thead>\
        <material-row\
          v-for="(item, index) in rows"\
          v-bind:itemName="item.name"\
          v-bind:unit="item.unit"\
          v-bind:qt="item.qt"\
          v-bind:price="item.price"\
          v-bind:total="item.total"\
          v-bind:index="index"\
          v-bind:supplierslist="item.supplier_materials"\
        >\
        </material-row>\
      <tfoot>\
      <tr>\
      <th colspan=\"2\">Итого по материалам:</th>\
      <th class=\"text-right\">  {{ formatPrice(getQuotationMaterialsTotal()) }} </th>\
      </tr>\
      </tfoot>\
      </table>\
     </div>\
    ',
    props: ['title', 'materialsCostTotal', 'rows', 'index'],
    methods: {
      getQuotationMaterialsTotal: function(){
        var result = 0;
        this.rows.forEach(function(item){
          result += item.total;
        })
        return result;
      }
    }
  })