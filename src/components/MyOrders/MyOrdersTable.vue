  <template>
  <div class="orders">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Order Id </vs-th>
          <vs-th> Car Name </vs-th>
          <vs-th> Pick Up Location </vs-th>
          <vs-th> Drop Off Location </vs-th>
          <vs-th> Pick Up Date </vs-th>
          <vs-th> Price </vs-th>
          <vs-th> Status </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr v-for="order of orders" :data="order">
          <vs-td>
            {{ "#" + order.id }}
          </vs-td>
          <vs-td>
            Mercedes
          </vs-td>
          <vs-td>
            {{ order.origin }}
          </vs-td>
          <vs-td>
            {{ order.destination }}
          </vs-td>
          <vs-td>
            {{ order.Departure_Date }}
          </vs-td>
          <vs-td>
            $400
          </vs-td>
          <vs-td >
            <div :style="{ backgroundColor: '#B59410', color: 'white', borderRadius: '5px', padding: '5px', textAlign: 'center' }">
              {{ order.status }}

            </div>
          </vs-td>
        </vs-tr>
      </template>
      <template #footer>
        <vs-pagination
        color="success"
          v-model:current-page="page"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 15]"
          :total="orders.length"
        />
      </template>
    </vs-table>
  </div>
</template>
  
<script>
import { getPage } from 'vuesax-alpha';

export default {
  props: ['status', 'orders'],
  data() {
    return {
      
    }
  }
};
</script>

  
<style scoped>
  .orders {
    width: 951px;
    padding: 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  p {
    font-size: 20px;
    font-weight: 800;
  }
</style>
  