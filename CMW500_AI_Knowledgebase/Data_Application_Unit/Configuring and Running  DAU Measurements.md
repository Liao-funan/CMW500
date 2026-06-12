# Configuring and Running  DAU Measurements

Module: Data Application Unit
Source: 936a40f0f08247d6.htm

## 原始指令文档说明
Data Application Unit
 > 
General Description
 > 
Configuring and Running  DAU Measurements
Configuring and Running DAU Measurements
As a prerequisite for any measurements, you must prepare the physical test setup and configure the DAU network settings according to your test setup (see 
"Test Setup"
 and 
"Adapting the DAU IP Configuration"
).
The configuration of the DAU network settings must be complete before switching on the downlink signal and establishing a connection to the DUT.
DAU measurements require option R&S CMW-KM050. All measurements are accessible via the tabs of the "Data Application Measurements" dialog.
For a detailed description of all parameters and results, see 
"DAU Measurements GUI Reference"
.
Performing an E2E data transfer test with a signaling application
Configure the signaling application as desired.
Usually, you must enable E2E tests in the signaling application. Example: in the LTE signaling application, set parameter "Connection Type" to "Data Application".
Use the signaling application to establish a connection to the DUT.
Find out the IP address of the DUT. You need this information for configuration of most DAU measurements.
Some signaling applications provide the assigned IP address in their main view. If you have connected a PC to the DUT, you can use the PC to retrieve the information. At a PC with Windows operating system, use the command 
IPconfig
.
Open the "Data Application Measurements" dialog.
For detailed steps, see 
"Opening the "Data Application Measurements" dialog"
.
At the top of the GUI, select the used signaling application via the parameter "Select RAN".
The expected maximum throughput at the physical layer is displayed for information. It results from the current signaling settings.
Configure and start a DAU measurement, for example "Ping" or "Iperf".
For most measurements, you must enter the IP address of the DUT to select the IP connection that you want to analyze.
See also 
"Configuring and starting a DAU measurement"
.
Performing a U-plane test with a protocol test application
The following procedure assumes that the protocol test establishes a connection to the DUT at IP level.
Configure and start the protocol test in the usual way. There are no specific settings required for cooperation with the DAU.
Check the IP address of the DUT. You can, for example, check the message log files created by the protocol test.
Open the "Data Application Measurements" dialog.
For detailed steps, see 
"Opening the "Data Application Measurements" dialog"
.
Configure and start a DAU measurement, for example "Ping" or "IPerf".
For most measurements, you must enter the IP address of the DUT to select the IP connection that you want to analyze.
See also 
"Configuring and starting a DAU measurement"
.
Protocol tests can also integrate DAU measurements into their test sequence. In that case, the protocol test controls the DAU via the so-called CDAU interface to configure the measurement settings and retrieve the measurement results.
While the CDAU interface is used, the GUI of the DAU is hidden in a similar way as during a remote control session with SCPI commands. When the GUI is displayed again, the settings valid before the CDAU session are restored automatically and the displayed results are reset.
Opening the "Data Application Measurements" dialog
Press [MEASURE] to open the "Measurement Controller" dialog.
Enable "Data Appl. > Measurements"
Press "Data Meas" on the task bar at the bottom.
The "Data Application Measurements" dialog opens. The "Overview" tab provides a summary of the measurement states.
Configuring and starting a DAU measurement
Select the corresponding tab, for example, "Ping".
Configure the settings available directly on the tab or accessible via the "Config" hotkey.
Select the topmost softkey, for example "Ping". Press ON/OFF to start the measurement.
The measurement results are provided in the same tab.
Top