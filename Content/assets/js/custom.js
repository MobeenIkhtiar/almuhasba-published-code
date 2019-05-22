//add category
$("#addcategory").click(function () {
    var categoryName = $("#categoryName").val();
    if (categoryName != "") {
        var data = { "Name": categoryName, IsActive: 1 };

        $('#category').modal('hide');
        $(".datatable-basic").DataTable().destroy();
        var dataTable = $('.datatable-basic').DataTable({
            serverside: false,
            columns: [
                { "data": 'Id' },
                { "data": 'Name' },
                { "data": 'Status' },
                { "data": 'Actions' }
            ],
            "order": [],
            "ajax": {
                url: "/Category/Add",
                data: data,
                dataSrc: function (json) {
                    var an = JSON.parse(json);
                    return an;
                },
                type: "post",
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong with database");
                }

            }
        });
    }
});
//update category modal
function updatemodal(id, name) {
   
   
    $('#updateCategoryId').val(id);
    $('#updateCategoryName').val(name);
    $('#updateModal').modal('show');
}


//update category
$("#editcategorybtn").click(function () {
   

    var categoryName = $("#updateCategoryName").val();
    var id = $("#updateCategoryId").val();
    if (categoryName != "") {
        var data = { "Name": categoryName, "Id": id, "IsActive": 1 };
        $('#editcategory').modal('hide');
        $(".datatable-basic").DataTable().destroy();
        var dataTable = $('.datatable-basic').DataTable({
            serverside: false,
            columns: [
                { "data": 'Id' },
                { "data": 'Name' },
                { "data": 'Status' },
                { "data": 'Actions' }
            ],
            "order": [],
            "ajax": {
                url: "/Category/Edit",
                data: data,
                dataSrc: function (json) {
                    var an = JSON.parse(json);
                    return an;
                },
                type: "post",
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong with database");
                }

            }
        });
   
       
    }


});
//delete category
function deleteCategory(element, categoryId) {
   
    var deletedrow = element.parentNode.parentNode.parentNode.parentNode.parentNode;
   
    // AJAX loader
  
        swal({
            title: "Delete Category",
            text: "Are You Sure You Want To Delete It?",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonColor: "#2196F3",
            showLoaderOnConfirm: true
        },
            function () {
                $(".datatable-basic").DataTable().destroy();
                var dataTable = $('.datatable-basic').DataTable({
                    serverside: false,
                    columns: [
                        { "data": 'Id' },
                        { "data": 'Name' },
                        { "data": 'Status' },
                        { "data": 'Actions' }
                    ],
                    "order": [],
                    "ajax": {
                        url: "/Category/Delete?cat=" + categoryId,
                        
                        dataSrc: function (json) {
                            swal({
                                title: "Deleted Successfully!",
                                confirmButtonColor: "#2196F3"
                            });
                            var arr = JSON.parse(json);
                            return arr;
                        },
                        type: "get",
                       
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert("Something went wrong with database");
                        }

                    }
                });
            });


}

//add Supplier
$("#addsupplier").click(function () {
   
        var data = { "First_Name": $("#supplierfirstName").val(), "Last_Name": $("#supplierlastName").val(), "Phone": $("#phone").val(), "Address": $("#address").val(), "Cnic": $("#cnic").val(), "Area": $("#area").val(), "Province": $("#province").val(), IsActive: 1 };

        $('#supplier').modal('hide');
        $(".datatable-basic").DataTable().destroy();
        var dataTable = $('.datatable-basic').DataTable({
            serverside: false,
            columns: [
                { "data": 'Id' },
                { "data": 'Name' },
                { "data": 'Phone' },
                { "data": 'Address' },
                { "data": 'CNIC' },
                { "data": 'Area' },
                { "data": 'Province' },
                { "data": 'Actions' }
            ],
            "order": [],
            "ajax": {
                url: "/Supplier/Add",
                data: data,
                dataSrc: function (json) {
                    var an = JSON.parse(json);
                    return an;
                },
                type: "post",
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong with database");
                }

            }
        });
    
});

function updatesuppliermodal(id) {
    var url = "/Supplier/GetSupplierById?id=" + id;
    var settings = {
        type: "GET",
        dataType: "json",
        url: url,
       
        success: function (response) {
            //response.data contains whatever is sent from server

            $('#eid').val(response.Id);
            $('#efirstName').val(response.First_Name);
            $('#elastName').val(response.Last_Name);
            $('#ephone').val(response.Phone);
            $('#eaddress').val(response.Address);
            $('#ecnic').val(response.Cnic);
            $('#earea').val(response.Area);
            $('#eprovince').val(response.Province);
            $('#editsupplier').modal('show');
           
        },
        error: function (err, type, httpStatus) {
            alert('error has occured');
        }
    };

    $.ajax(settings);
   
   
}
//update Supplier
$("#editsupplierbtn").click(function () {


    var data = { "Id": $('#eid').val(), "First_Name": $("#efirstName").val(), "Last_Name": $("#elastName").val(), "Phone": $("#ephone").val(), "Address": $("#eaddress").val(), "Cnic": $("#ecnic").val(), "Area": $("#earea").val(), "Province": $("#eprovince").val(), IsActive: 1 };

       
    $('#editsupplier').modal('hide');
        $(".datatable-basic").DataTable().destroy();
        var dataTable = $('.datatable-basic').DataTable({
            serverside: false,
            columns: [
                { "data": 'Id' },
                { "data": 'Name' },
                { "data": 'Phone' },
                { "data": 'Address' },
                { "data": 'CNIC' },
                { "data": 'Area' },
                { "data": 'Province' },
                { "data": 'Actions' }
            ],
            "order": [],
            "ajax": {
                url: "/Supplier/Edit",
                data: data,
                dataSrc: function (json) {
                    var an = JSON.parse(json);
                    return an;
                },
                type: "post",
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong with database");
                }

            }
        });


    


});

//delete Supplier
function deleteSupplier(id) {

    //var deletedrow = element.parentNode.parentNode.parentNode.parentNode.parentNode;

    // AJAX loader

    swal({
        title: "Delete Supplier",
        text: "Are You Sure You Want To Delete It?",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        confirmButtonColor: "#2196F3",
        showLoaderOnConfirm: true
    },
        function () {
            $(".datatable-basic").DataTable().destroy();
            var dataTable = $('.datatable-basic').DataTable({
                serverside: false,
                columns: [
                    { "data": 'Id' },
                    { "data": 'Name' },
                    { "data": 'Phone' },
                    { "data": 'Address' },
                    { "data": 'CNIC' },
                    { "data": 'Area' },
                    { "data": 'Province' },
                    { "data": 'Actions' }
                ],
                "order": [],
                "ajax": {
                    url: "/Supplier/Delete?sup=" + id,

                    dataSrc: function (json) {
                        swal({
                            title: "Deleted Successfully!",
                            confirmButtonColor: "#2196F3"
                        });
                        var arr = JSON.parse(json);
                        return arr;
                    },
                    type: "get",

                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("Something went wrong with database");
                    }

                }
            });
        });


}
