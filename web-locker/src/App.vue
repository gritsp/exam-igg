<template>
	<v-app >
		<v-main class="grey lighten-3">
			
			<!-- <h2 style="text-align: center;">Locker</h2> -->
			<v-container style="margin-top: 0.5vh">
				<v-sheet max-height="97vh" rounded="lg">
					<v-container class="grey lighten-3">						
						<v-row >
							<v-col cols="8" >
								<v-container class="white" rounded="lg">
									<v-row>
										<!-- size s -->
										<v-col cols="4">
											<!-- <v-card outlined height="100%" style="display:flex; flex-direction:colum;"> -->
												<v-container rounded="lg" class="amber accent-1">
													<v-row>
														<v-col><h3 style="text-align:center;">Size: S</h3></v-col>
													</v-row>
													<v-row v-for="(item,index) in lockerData" :key="index">
														<v-col v-if="item.size=='S'">
															<v-card outlined height="100%" style="display:flex; flex-direction:colum;">
																<v-container >
																	
																		<v-card-title class="justify-center">#{{item._id}}</v-card-title>
																		<v-card-text style="text-align:center">Time: {{item.time}}</v-card-text>
																		<v-card-actions class="justify-center">
																			<v-btn outlined text v-if="item.status" @click="chooseLocker(item),onChoose=true">
																				Choose
																			</v-btn>
																			<v-btn disabled outlined text v-else>
																				Not available
																			</v-btn>
																		</v-card-actions>
																</v-container>	
															</v-card>
															

														</v-col>
													</v-row>
												</v-container>
											<!-- </v-card> -->
										</v-col>
										<!-- size m -->
										<v-col cols="4">
											<!-- <v-card outlined height="100%" style="display:flex; flex-direction:colum;"> -->
												<v-container rounded="lg" class="orange accent-1">
													<v-row>
														<v-col><h3 style="text-align:center;">Size: M</h3></v-col>
													</v-row>
													<v-row v-for="(item,index) in lockerData" :key="index">
														<v-col v-if="item.size=='M'">
															<v-card outlined height="100%" style="display:flex; flex-direction:colum;">
																<v-container >
																	
																		<v-card-title class="justify-center">#{{item._id}}</v-card-title>
																		<v-card-text style="text-align:center">Time: {{item.time}}</v-card-text>
																		<v-card-actions class="justify-center">
																			<v-btn outlined text v-if="item.status" @click="chooseLocker(item),onChoose=true">
																				Choose
																			</v-btn>
																			<v-btn disabled outlined text v-else>
																				Not available
																			</v-btn>
																		</v-card-actions>
																</v-container>	
															</v-card>
															

														</v-col>
													</v-row>
												</v-container>
											<!-- </v-card> -->
										</v-col>
										<!-- size L -->
										<v-col cols="4">
											<!-- <v-card outlined height="100%" style="display:flex; flex-direction:colum;"> -->
												<v-container rounded="lg" class="deep-orange accent-1">
													<v-row>
														<v-col><h3 style="text-align:center;">Size: L</h3></v-col>
													</v-row>
													<v-row v-for="(item,index) in lockerData" :key="index">
														<v-col v-if="item.size=='L'">
															<v-card outlined height="100%" style="display:flex; flex-direction:colum;">
																<v-container >
																	
																		<v-card-title class="justify-center">#{{item._id}}</v-card-title>
																		<v-card-text style="text-align:center">Time: {{item.time}}</v-card-text>
																		<v-card-actions class="justify-center">
																			<v-btn outlined text v-if="item.status" @click="initData(),chooseLocker(item),onChoose=true">
																				Choose
																			</v-btn>
																			<v-btn disabled outlined text v-else>
																				Not available
																			</v-btn>
																		</v-card-actions>
																</v-container>	
															</v-card>
															

														</v-col>
													</v-row>
												</v-container>
											<!-- </v-card> -->
										</v-col>										
									</v-row>
								</v-container>
							</v-col>
							<v-col cols="4">
								<v-container  class="white" rounded="lg">
									<v-row>
										<v-col>
											<v-container>
												<v-row>
													<v-col>
														<v-card outlined>
															<v-container>												
																<v-card-text style="text-align:right">
																	<div v-if="onChoose==true">
																		<div>Locker number #{{showLocker._id}}</div>
																		<div>Size: {{showLocker.size}} </div>
																		<div v-if="time!=0">
																			<div >Time: {{time}} minute</div>																			
																		</div>
																		<div v-if="charge==-1">Please choose time more than 60 minute</div>
																		<div v-else>Charge: {{charge}}</div><br>
																		<div v-if="cash!=0">Cash: {{cash}}</div>
																		<div v-if="change>0"> Change: {{change}}</div>
																		<div v-if="change<0">Please insert more cash</div>
																	</div>

																</v-card-text>
															</v-container>
														</v-card>
													</v-col>
												</v-row>
												<v-row>
													<v-col>
														<v-row>
															<v-col>
																<v-text-field v-model="time" label="Choose the time you want to use (minute)" required type="number" @input="calCharge(time,showLocker),calCash(0)"></v-text-field>
															</v-col>
														</v-row>
													</v-col>
												</v-row>
												<v-row>
													<v-col>
														<v-row>
															<v-col style="text-align:center">
																Insert Cash
															</v-col>
														</v-row>
														<v-row style="text-align:center;">
															<v-col>
																<v-btn elevation="0" fab color="amber accent-1" @click="calCash(1)">
																	1฿
																</v-btn>
															</v-col>
															<v-col>
																<v-btn  elevation="0" fab color="amber accent-2" @click="calCash(2)">
																	2฿
																</v-btn>
															</v-col>
															<v-col>
																<v-btn  elevation="0" fab color="amber accent-3" @click="calCash(5)">
																	5฿
																</v-btn>
															</v-col>
															<v-col>
																<v-btn  elevation="0" fab color="amber accent-4" @click="calCash(10)">
																	10฿
																</v-btn>
															</v-col>
														</v-row>
														<v-row>
															<v-col>
																<v-btn color="green accent-1" elevation="0" @click="calCash(20)">
																	20฿
																</v-btn>
															</v-col>
															<v-col>
																<v-btn color="light-blue accent-1" elevation="0" @click="calCash(50)">
																	50฿
																</v-btn>
															</v-col>
															<v-col>
																<v-btn color="red accent-1" elevation="0" @click="calCash(100)">
																	100฿
																</v-btn>
															</v-col>
															<v-col>
																<v-btn color="purple accent-1" elevation="0" @click="calCash(500)">
																	500฿
																</v-btn>
															</v-col>
															<v-col>
																<v-btn color="brown lighten-3" elevation="0" @click="calCash(1000)">
																	1000฿
																</v-btn>
															</v-col>
														</v-row>
													</v-col>
												</v-row><br><br>
												<v-row>
													<v-col>
														<div >
															<v-btn v-if="(change>=0)&&(onChoose)&&cash>0" block x-large elevation="0" color="success" outlined @click="putData(showLocker,time),alert=!alert">Confirm</v-btn>
															<v-btn v-else disabled block x-large elevation="0" color="success" outlined >Confirm</v-btn>
															
														</div>
														
													</v-col>
													
													<v-col>
														<v-btn block x-large elevation="0" color="error" outlined @click="initData()">Cancle</v-btn>
													</v-col>
												</v-row>
											</v-container>
										</v-col>
									</v-row>
								</v-container>
							</v-col>
						</v-row>
					</v-container>
				</v-sheet>
			</v-container>
		</v-main>
		
	</v-app>

</template>

<script>
import axios from "axios";

export default {
	name: "locker",
	data () {
		return {
			url:"http://127.0.0.1:3000/api/locker/",
			lockerData: [],
			time:0,			
			showLocker:[],
			onChoose: false,
			charge:0,
			cash:0,
			change:0
		}
	},
	sockets: {
        connect: function () {
            console.log('socket connected')
        },
		toUser: function(data){
			this.getLockerDB()
			console.log(data)
		}
    },
	methods: {
		// checkLocker: function () {
		// 	this.lockerStatus[0]=false
		// 	console.log(this.lockerStatus)
		// },
		initData: function (){
			this.time = 0
			this.onChoose = false
			this.charge = 0
			this.cash = 0
			this.change = 0
		},
		getLockerDB: function (){
			axios.get(this.url).then( result => {
				this.lockerData = result.data.data
				// console.log(this.lockerData)
			})
		},
		chooseLocker: function(item) {
			this.showLocker = item
			// console.log(this.showLocker)
		},
		calCharge: function(time,locker){
			if (locker.size=="S"){
				if (time-60==0){
					this.charge = 50
				}
				else if (time-60>0){
					this.charge = (time-60)*25+50
				}
				else{
					this.charge=-1
				}
			}
			else if (locker.size=="M"){
				if (time-60==0){
					this.charge = 100
				}
				else if (time-60>0){
					this.charge = (time-60)*50+100
				}
				else{
					this.charge=-1
				}
			}
			else if (locker.size=="L"){
				if (time==60){
					this.charge = 200
				}
				else if (time>60){
					this.charge = (time-60)*100+200
				}
				else{
					this.charge=-1
				}
			}
		},
		calCash: function(cash){
			this.cash+=cash
			this.change = this.cash-this.charge
		},
		reRender: function (){
			this.$router.go(0)
		},
		putData: function(item,time){
			// console.log(item)
			// this.lockerStatus[item._id-1] = 
			axios.put(this.url+item._id,{				
				status:false,
				time:time
			})
			.then(res => {
				this.$socket.emit('toServer', item);
				console.log(res)
				
			});
			this.initData()
			// axios.get(this.url).then( result => {
			// 	this.lockerData = result.data.data
			// 	// console.log(this.lockerData)
			// })
		},
		checkSocket: function(){
			this.$socket.emit('toServer', "hello5");
		}		
		// pingServer() {
		// // Send the "pingServer" event to the server.
		// 	this.$socket.emit('pingServer', 'PING!')
		// }
	},
	// created() {
	// 	this.getLockerDB();
	// },
	mounted (){
		// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
		
		this.getLockerDB();
		
	}
}
</script>

<style>
div {
  font-family: "Kanit", sans-serif;
}
</style>