# General Configuration

Module: NBIoT Signaling
Source: 7965a4345c4f4b46.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
General Configuration
The NB-IoT signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:NIOT:SIGN:...
.
After a 
*RST
, the DL signal is switched off.
To activate the DL signal, use 
SOURce:NIOT:SIGN:CELL:STATe ON
.
Query the cell state using 
SOURce:NIOT:SIGN:CELL:STATe:ALL?
. The result 
ON,ADJ
 indicates that the DL signal is available.
To initiate a connection setup, let the UE attach.
For details, see 
"Setting Up  a Connection"
.
Contents
Initialization
Configuring the Signal Paths
Specifying General Settings
Configuring Operating Bands and Channels
Configuring DL Power Levels
Configuring UL Power Settings
Configuring Physical Cell Setup
Configuring Network Settings
Configuring General Connection Settings
Configuring UL RMCs
Configuring DL RMCs
Configuring User-Defined Channels
Setting Up a Connection
Querying UE Information
Querying UE Capability Report Contents
Top