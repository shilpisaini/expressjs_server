var customers = {
				customer1: {
					id: 1,
					firstname: "Shilpi",
					lastname: "Saini",
					age: 26
				},
				customer2: {
					id: 2,
					firstname: "Ankita",
					lastname: "Saini",
					age: 21
				},
				customer3: {
					id: 3,
					firstname: "Dheeraj",
					lastname: "Saini",
					age: 19
				},
				customer4: {
					id: 4,
					firstname: "Saroj",
					lastname: "Saini",
					age: 50
				}
			}

			exports.create = function(req, res) {
				// find the largest ID
				let arr = Object.keys( customers ).map(function ( key ) { return customers[key].id; });
				let newId = Math.max.apply( null, arr ) + 1;
				
				let newCustomer = req.body;
				newCustomer.id = newId;
				customers["customer" + newId] = newCustomer;
				res.json(newCustomer);
			};
			 
			exports.findAll = function(req, res) {
				res.json(Object.values(customers));  
			};
			 
			exports.findOne = function(req, res) {
				let customer = customers["customer" + req.params.id];
				res.json(customer);
			};
			 
			exports.update = function(req, res) {
				let updatedCustomer = req.body; 
				customers["customer" + updatedCustomer.id] = updatedCustomer;
				res.json({msg: "Customer Updated Successfully!"});
			};
			 
			exports.delete = function(req, res) {
				delete customers["customer" + req.params.id];
				res.json({msg: "Customer Deleted Successfully!"});
			};
