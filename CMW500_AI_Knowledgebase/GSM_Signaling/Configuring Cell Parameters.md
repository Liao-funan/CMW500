# Configuring Cell Parameters

Module: GSM Signaling
Source: c9cd4ab029744984.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Cell Parameters
Configuring Cell Parameters
// *****************************************************************************
// General settings: Define number of AGCH data blocks reserved for AGCH access,
// set interval between two paging requests, tell mobile to determine channel
// numbers in the GSM 1800 band.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:BSAGblksres 0
CONFigure:GSM:SIGN:CELL:BSPamfrms 2
CONFigure:GSM:SIGN:CELL:BINDicator G18
// *****************************************************************************
// CS settings: Tell mobile to perform a location update whenever it is
// switched on, don't allow DTX.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:LUPDate ALWays
CONFigure:GSM:SIGN:CELL:DTX OFF
// *****************************************************************************
// Set paging mode, max retransmissions, MS identity for
// paging, initial power reduction, cell baring, permitted network
// color code and possible channel numbers within the GSM cell.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:PMODe NPAG
CONFigure:GSM:SIGN:CELL:MRETrans 7
CONFigure:GSM:SIGN:CELL:IPReduction 1
CONFigure:GSM:SIGN:CELL:IPReduction ON
CONFigure:GSM:SIGN:CELL:CBARring OFF
CONFigure:GSM:SIGN:CELL:PMIDentity TMSI
CONFigure:GSM:SIGN:CELL:NCC:PERMitted 10
CONFigure:GSM:SIGN:CELL:CDEScription 102,1011,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,
    OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,
    OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,
    OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF
// *****************************************************************************
// Enable enhanced MS measurement reports for CS connections.
// Accept the first mobile originating CS call request. Establish CS
// call and query the connection error.
// *****************************************************************************
CONFigure:GSM:SIGN:RREPort:CSWitched:EMReport:ENABle ON
CONFigure:GSM:SIGN:CELL:CSWitched:CREQuest ACC
SENSe:GSM:SIGN:CELL:CERRor?
// *****************************************************************************
// PS settings: Select channel type used by mobile to determine received signal
// strength and quality, accept PDP context activation attempts from the MS,
// specify signal level filter period for power control and BEP period.
// Ignore the first mobile originating PS call request, accept it after
// the first burst. Establish PS call and query the connection error.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:PSWitched:PCMChannel BCCH
CONFigure:GSM:SIGN:CELL:PSWitched:PDPContext ACCept
CONFigure:GSM:SIGN:CELL:PSWitched:TAVGtw 3
CONFigure:GSM:SIGN:CELL:PSWitched:BPERiod 1
CONFigure:GSM:SIGN:CELL:PSWitched:CREQuest IGN,AA1
SENSe:GSM:SIGN:CELL:PSWitched:CERRor?
Top