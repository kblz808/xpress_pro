<template>
  <div class="orders">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Order Id </vs-th>
          <vs-th> Car Name </vs-th>
          <vs-th> Pick Up Location </vs-th>
          <vs-th> Drop Off Location </vs-th>
          <vs-th> Sightseeing Location </vs-th>
          <vs-th> Pick Up Date </vs-th>
          <vs-th> Price </vs-th>
          <vs-th> Status </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr v-for="(order, i) in getPage(filteredOrders, page, pageSize)" :key="i" :data="order">
          <vs-td>
            {{ "#" + order.id }}
          </vs-td>
          <vs-td>
            {{ order.car_name }}
          </vs-td>
          <vs-td>
            {{ order.pickup_location }}
          </vs-td>
          <vs-td>
            {{ order.dropoff_location }}
          </vs-td>
          <vs-td>
            {{ order.sightseeing }}
          </vs-td>
          <vs-td>
            {{ order.pickup_date }}
          </vs-td>
          <vs-td>
            {{ order.price }}
          </vs-td>
          <vs-td >
              <div :style="{ backgroundColor: getStatusColor(order.status), color: 'white', borderRadius: '5px', padding: '5px' }">
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
          :page-sizes="[3, 5, 7]"
          :total="filteredOrders.length"
        />
      </template>
    </vs-table>
  </div>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  import { getPage } from 'vuesax-alpha';
  import { ordersData } from '../../data.js';
  
  const page = ref(1);
  const pageSize = ref(5);
  const order = ref(ordersData);

 


  
  const getStatusColor = (status) => {
    const statusColors = {
      Scheduled: '#C5A939',
      Completed: 'limegreen',
      Cancelled: 'red',
    };
    return statusColors[status] || '#ffffff';
  };
  
  const filteredOrders = computed(() => {
    return order.value.filter((o) => o.status === o.status);
  });
  
</script>
  
<style scoped>
  .orders {
    width: 951px;
    padding: 30px;
    background-color: white;
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
  