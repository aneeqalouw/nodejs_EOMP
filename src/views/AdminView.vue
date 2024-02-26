<template>
    <div class="container-fluid vh-100" style="background-color: black;">
        <h2>Admin</h2>
        <br><br>
        <h3>Users</h3>
            <table class="table table-bordered">
                 <tr>
                    <th>userID</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>sex</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                </tr>
                <tr>
                    <tbody></tbody>
                </tr>
            </table>

        
        <br><br>
        <h3>Products</h3>
        <table class="table table-bordered">
            <tr>
                <thead>
                    <th>prodID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>