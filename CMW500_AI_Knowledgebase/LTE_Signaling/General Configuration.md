# General Configuration

Module: LTE Signaling
Source: 18791811a3ef485f.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
General Configuration
The LTE signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:LTE:SIGN:...
.
After a 
*RST
, the DL signal is switched off.
To activate the DL signal, use 
SOURce:LTE:SIGN:CELL:STATe ON
.
Query the cell state using 
SOURce:LTE:SIGN:CELL:STATe:ALL?
. The result 
ON,ADJ
 indicates that the DL signal is available.
To initiate a connection setup, use 
CALL:LTE:SIGN:PSWitched:ACTion CONNect
.
To query the connection state, use 
FETCh:LTE:SIGN:PSWitched:STATe?
.
Contents
Initialization
Selecting a Scenario
Specifying General Settings
Configuring Operating Bands and Channels
Configuring Internal Fading
Configuring DL Power Levels
Configuring UL Power Control for Call Setup
Configuring Physical Cell Setup
Configuring Neighbor Cells and Reselection
Configuring Other Network Settings
Configuring eMTC Settings
Configuring LAA Settings
Configuring General Connection Settings Part 1
Configuring General Connection Settings Part 2
Configuring HARQ
Configuring MIMO Settings
Configuring Connected DRX
Configuring Extended DRX
Configuring RMCs
Configuring User-Defined Channels
Configuring TTI-Based User-Defined Channels
Configuring CQI DL Channels
Configuring SPS
Configuring CQI Reporting
Configuring Measurement Reports
Configuring Message Monitoring
Configuring the Cell Broadcast Service
Attaching the UE and Activating SCCs
Configuring the I/Q Settings
Setting Up a Test Mode Connection
Connecting/Releasing Dedicated Bearers
Querying UE Measurement Report Contents
Querying UE Information
Querying UE Capability Report Contents
Performing an Intra-RAT Handover
Performing an Inter-RAT Handover
Performing a Handover to Another Instrument
Sending / Receiving a Short Message
Sending Date and Time Information to the UE
Modifying Parameters for an Established Connection
Top