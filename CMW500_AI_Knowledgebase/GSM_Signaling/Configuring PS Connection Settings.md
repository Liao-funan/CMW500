# Configuring PS Connection Settings

Module: GSM Signaling
Source: 7d6e020c1aa94dfe.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring PS Connection Settings
Configuring PS Connection Settings
// *****************************************************************************
// Enable packet switched domain, EGPRS technology, dual transfer
// mode, dual carrier mode, and automatic slot configuration. 
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:PSDomain ON
CONFigure:GSM:SIGN:CELL:NSUPport EGPRs
CONFigure:GSM:SIGN:CELL:DTMode ON
CONFigure:GSM:SIGN:CONNection:PSWitched:DLDCarrier:ENABle ON
CONFigure:GSM:SIGN:CONNection:DSConfig ON
// *****************************************************************************
// Select "Test Mode B" (PRBS test data looped back at MS) as service mode,
// enable incremental redundancy, select a pseudo-random bit sequence,
// no extended dynamic allocation, the number of PDUs,
// the slot offset for the loopback data and the burst type for CTRL_ACK
// messages, set BEP period to 10 and data corruption rate to 10 percent.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:SERVice TMB
CONFigure:GSM:SIGN:CONNection:PSWitched:IREDundancy ON
CONFigure:GSM:SIGN:CONNection:PSWitched:DSOurce PR9
CONFigure:GSM:SIGN:CONNection:PSWitched:EDALlocation OFF
CONFigure:GSM:SIGN:CONNection:PSWitched:NOPDus 4095
CONFigure:GSM:SIGN:CONNection:PSWitched:SOFFset 0
CONFigure:GSM:SIGN:CONNection:PSWitched:CATYpe NBURsts
CONFigure:GSM:SIGN:CONNection:PSWitched:BPERiod2 10
CONFigure:GSM:SIGN:CONNection:PSWitched:BDCRate 10
// *****************************************************************************
//  Select EGPRS as transmission scheme.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:TLEVel EGPRS
// *****************************************************************************
// Select MCS-1 as UL coding scheme.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:CSCHeme:UL MC1
// *****************************************************************************
// Diasable automatic slot configuration.
// Use slots 1 and 2 for the uplink and slots 4, 5, 6 and 7 for the downlink.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:ASConfig OFF
CONF:GSM:SIGN:CONN:PSWitched:SCONfig:ENABle:UL OFF,ON,ON,OFF,OFF,OFF,OFF,OFF
CONF:GSM:SIGN:CONN:PSWitched:SCONfig:ENABle:DL:CARR OFF,OFF,OFF,OFF,ON,ON,ON,ON
// *****************************************************************************
// Configure the power in all uplink and downlink slots.
// *****************************************************************************
CONF:GSM:SIGN:CONN:PSWitched:SCONfig:GAMMa:UL 13,13,13,13,13,13,13,13
CONF:GSM:SIGN:CONN:PSWitched:SCONfig:LEVel:DL:CARRier -5,-5,-5,-5,-5,-5,-5,-5
// *****************************************************************************
// Configure the coding schemes on the downlink.
// *****************************************************************************
CONF:GSM:SIGN:CONN:PSW:SCON:CSCHeme:DL:CARRier MC1,MC1,MC1,MC1,MC1,MC1,MC1,MC1
// *****************************************************************************
// Set USF duty cycle to 25 %.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:SCONfig:UDCYcle:DL 25,25, 
    25,25,25,25,25,25
// *****************************************************************************
// Query the resulting maximum RLC throughput.
// *****************************************************************************
SENSe:GSM:SIGN:CONNection:ETHRoughput:DL?
SENSe:GSM:SIGN:CONNection:ETHRoughput:UL?
// *****************************************************************************
// Configure downlink power control: enable it, select P0, PR mode and
// PR field values.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:DPControl:ENABle ON
CONFigure:GSM:SIGN:CONNection:PSWitched:DPControl:P DB12
CONFigure:GSM:SIGN:CONNection:PSWitched:DPControl:PMODe PMA
CONFigure:GSM:SIGN:CONNection:PSWitched:DPControl:PFIeld DB7
// *****************************************************************************
// Disable the filler dummy data blocks.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:ASRDblocks OFF
Top