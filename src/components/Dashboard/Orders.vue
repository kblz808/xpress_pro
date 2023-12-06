<template>
    <div class="orders">
        <p>My Orders</p>
        <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th> Order Id </vs-th>
                    <vs-th> Car Name </vs-th>
                    <vs-th> Pick Up Location </vs-th>
                    <vs-th> Drop Off Location </vs-th>
                    <vs-th> Sightseeing Location </vs-th>
                    <vs-th> Pick Up Date </vs-th>
                    <vs-th> Status </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr v-for="(user, i) in orders" :key="i" :data="user">
                <vs-td>
                    {{ "#" + user.id }}
                </vs-td>
                <vs-td>
                    {{ user.car_name }}
                </vs-td>
                <vs-td>
                    {{ user.pickup_location }}
                </vs-td>
                    <vs-td>
                    {{ user.dropoff_location }}
                </vs-td>
                <vs-td>
                    {{ user.sightseeing }}
                </vs-td>
                <vs-td>
                    {{ user.pickup_date }}
                </vs-td>
                <vs-td>
                    {{ user.price }}
                </vs-td>
                <vs-td>
                    {{ user.status }}
                </vs-td>
                </vs-tr>
            </template>
        </vs-table>

    </div>
</template>

<style scoped>
    .orders{
        width: 951px;
        /* height: 387px; */
        padding: 30px;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    p{
        font-size: 20px;
        font-weight: 800;
    }
</style>

<script>
import {ordersData} from '../../data.js'

export default {
    data() {
        return {
            orders: ordersData
        }
    }
}
</script>