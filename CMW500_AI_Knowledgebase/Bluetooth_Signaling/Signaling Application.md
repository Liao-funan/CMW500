# Signaling Application

Module: Bluetooth Signaling
Source: f0e09183c8684c02.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
Signaling Application
The "Bluetooth Signaling" application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:BLUetooth:SIGN:...
After a 
*RST
, the DL signal is switched off.
To activate the DL signal use 
SOURce:BLUetooth:SIGN:STATe ON
To query the main state, use 
FETCh:BLUetooth:SIGN:CONNection:STATe:ALL?
The result 
ON,SBY
 indicates that the Bluetooth signal is available.
To find discoverable Bluetooth devices, use 
CALL:BLUetooth:SIGN:CONNection:ACTion INQuire
To connect to a discovered device, use 
CALL:BLUetooth:SIGN:CONNection:ACTion CONNect
To connect in test mode to a discovered device, use 
CALL:BLUetooth:SIGN:CONNection:ACTion TMConnect
To query the connection state, use 
FETCh:BLUetooth:SIGN:CONNection:STATe?
After all configuration commands (
CONFigure:BLUetooth:SIGN:...
), it is recommended to execute 
*OPC?
. This command guarantees that the configuration command is finished before performing other actions. Alternatively you can also execute the query form of a command (
CONFigure:BLUetooth:SIGN:...?
)
The following sections describe how to configure the signaling application.
The subsequent sections describe how to switch on the master signal and the EUT, how to set up a connection or a test connection. Some examples for actions  possible after connection setup are also given.
Contents
Initialization and Basic Configuration
Switch On Bluetooth Signaling
Inquire or Manually Specify EUT
Configure Paging
Retrieve EUT Information and Capabilities
Configure USB Interface
Retrieve USB Information
Configure Dirty Transmitter
Configure Test Mode
Audio Echo Mode
Configure Audio Profile
Top