# Configuring General CS Connection Settings

Module: GSM Signaling
Source: ccfb8d60e7ac4931.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring General CS Connection Settings
Configuring General CS Connection Settings
// *****************************************************************************
// Set the timeslot for circuit switched calls;
// (optionally) set the uplink slot for GSM measurement applications.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:TSLot 3
CONFigure:GSM:SIGN:MSLot:UL 3
// *****************************************************************************
// Select the AMR narrowband half-rate GMSK codec for voice calls and use
// subchannel 1.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:TMODe ANHG
CONFigure:GSM:SIGN:CONNection:CSWitched:HRSubchannel 1
// *****************************************************************************
// Select echo as data source, set echo delay.
//
// Alternatively select PRBS 2E9-1 as data source.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:DSOurce ECHO
CONFigure:GSM:SIGN:CONNection:CSWitched:EDELay 10
CONFigure:GSM:SIGN:CONNection:CSWitched:DSOurce PR9
// *****************************************************************************
// Enable DL DTX and set the level of the DTX and SID frames.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:DTX:DL ON, -20, -10
// *****************************************************************************
// Select normal CS call release.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:CRELease NREL
// *****************************************************************************
// Enable a TCH burst-by-burst loop that is re-closed after channel change.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:LOOP C
CONFigure:GSM:SIGN:CONNection:CSWitched:LREClose ON
// *****************************************************************************
// Set the caller Id.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:CID 00498941290
// *****************************************************************************
// Configure late traffic channel assignment (off-air call setup).
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:TCHassign LATE
Top