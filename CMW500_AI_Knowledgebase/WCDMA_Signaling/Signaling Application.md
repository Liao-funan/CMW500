# Signaling Application

Module: WCDMA Signaling
Source: fec8153bc8874bd0.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
Signaling Application
The WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:...
.
After a 
*RST
, the DL signal is switched off.
To activate the DL signal use 
SOURce:WCDMa:SIGN:CELL:STATe ON
.
Query the cell state using 
SOURce:WCDMa:SIGN:CELL:STATe:ALL?
. The result 
ON,ADJ
 indicates that the DL signal is available.
To initiate a connection setup in the CS domain use 
CALL:WCDMa:SIGN:CSWitched:ACTion CONNect
.
Depending on the settings, it can also initiate a connection setup in the PS domain.
To initiate a connection setup in the PS domain after the CS connection has been established, use 
CALL:WCDMa:SIGN:PSWitched:ACTion CONNect
.
To query the connection states use 
FETCh:WCDMa:SIGN:CSWitched:STATe?
 and 
FETCh:WCDMa:SIGN:PSWitched:STATe?
.
To switch on dedicated downlink channels for reduced signaling, use 
CALL:WCDMa:SIGN:RSIGnaling:ACTion ON
.
To query the reduced signaling state, use 
FETCh:WCDMa:SIGN:RSIGnaling:STATe?
.
The following sections describe how to configure the signaling application. Some of the listed configuration commands are not relevant for reduced signaling, but can nevertheless be executed before the reduced signaling mode is enabled.
The subsequent sections describe how to use signaling application, for example:
How to switch on the cell signal and UE
How to set up a CS or PS connection
How to switch on dedicated DL channels for reduced signaling
These sections distinguish between signaling and reduced signaling mode. Some examples for actions possible after connection setup are also given.
Contents
Specifying General Settings
Configuring Internal Fading
Configuring Physical Channel DL Settings
Configuring Physical Channel UL Settings
Configuring Connection Types
Configuring Network Settings
Configuring HSDPA Settings
Configuring HSUPA Settings
Configuring and Executing CPC
Configuring UE Measurement Report Settings
Configuring Message Monitoring
Switching On the Cell Signal and the UE (Signaling)
Switching On the Cell Signal (Reduced Signaling)
Configuring the I/Q Settings
Sending / Receiving a Short Message (Signaling)
Sending a Cell Broadcast Message
Sending Date and Time Information to the UE
Setting Up a CS Connection (Signaling)
Setting Up an Audio CS Connection
Setting Up an HSPA Connection (Signaling)
Setting Up a Dual Carrier HSPA Connection (Signaling)
Setting Up a Reduced Signaling Connection
Configuring and Executing a TPC Setup
Retrieving Information Provided by the UE (Signaling)
Performing an Inter-RAT Handover
Performing a Handover to Another Instrument
Performing a Neighbor Cell Measurement with CM
Top