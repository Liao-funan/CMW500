# Sending  Receiving a Short Message (Signaling)

Module: WCDMA Signaling
Source: 059bc57ff5fd44a0.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Sending / Receiving a Short Message (Signaling)
Sending / Receiving a Short Message (Signaling)
// ***************************************************************************** 
// Configure test loop behavior, large SMS handling and delay time. 
// Specify the message text to be sent to the UE in 7 bit ASCII format.
// Set protocol identifier, TP user data header and a SMS source.
// Alternatively specify the message text in binary format.
// Select data coding according to message class 0, specify 
// SMSC and the originating subscriber addresses.
// Select a time source and configure date and time for service
// center time stamp. Send the message. Query the sent status.
// *****************************************************************************
CONFigure:WCDMa:SIGN:SMS:KTLoop OFF
CONFigure:WCDMa:SIGN:SMS:OUTGoing:LHANdling TRUN
CONFigure:WCDMa:SIGN:SMS:OUTGoing:RMCDelay 3
CONFigure:WCDMa:SIGN:SMS:OUTGoing:INTernal "Testing SMS 012!.#\*%+-/()<>?=;@$,"
CONFigure:WCDMa:SIGN:SMS:OUTGoing:DCODing BIT7
CONFigure:WCDMa:SIGN:SMS:OUTGoing:PIDentifier 0
CONFigure:WCDMa:SIGN:SMS:OUTGoing:UDHeader  #H56
CONFigure:WCDMa:SIGN:SMS:OUTGoing:MESHandling INT
CONFigure:WCDMa:SIGN:SMS:OUTGoing:BINary #HFFA156ABDC15646879
CONFigure:WCDMa:SIGN:SMS:OUTGoing:DCODing BIT8
CONFigure:WCDMa:SIGN:SMS:OUTGoing:CGRoup DCMClass
CONFigure:WCDMa:SIGN:SMS:OUTGoing:MCLass CL0
CONFigure:WCDMa:SIGN:SMS:OUTGoing:OADDress 00498941290
CONFigure:WCDMa:SIGN:SMS:OUTGoing:OSADdress 0049123456
CONFigure:WCDMa:SIGN:SMS:OUTGoing:SCTStamp:TSOurce DATE
CONFigure:WCDMa:SIGN:SMS:OUTGoing:SCTStamp:DATE 24,10,2012
CONFigure:WCDMa:SIGN:SMS:OUTGoing:SCTStamp:TIME 12,40,30
CALL:WCDMa:SIGN:CSWitched:ACTion SSMS
SENSe:WCDMa:SIGN:SMS:OUTGoing:INFO:LMSent?
// ***************************************************************************** 
// Configure SMS from a file: specify file, check the content,
// set a SMS file as a data source, send the message. 
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:SMS:OUTGoing:FILE 'rx_001.sms'
CONFigure:WCDMa:SIGN:SMS:OUTGoing:FILE:INFO?
CONFigure:WCDMa:SIGN:SMS:OUTGoing:MESHandling FILE
CALL:WCDMa:SIGN:CSWitched:ACTion SSMS
// ***************************************************************************** 
// Reset parameters related to an already received SMS message.
// Wait until message has been received from the UE.
// Evaluate the text and length of the received message.
// ***************************************************************************** 
CLEan:WCDMa:SIGN:SMS:INComing:INFO:MTEXt
WAITKEY >Send short message from UE<
WHILE SENSe:WCDMa:SIGN:SMS:INFO:LRMessage:RFLag? <> "OFF"
SENSe:WCDMa:SIGN:INComing:INFO:MTEXt?
SENSe:WCDMa:SIGN:SMS:INComing:INFO:MLENgth?
// ***************************************************************************** 
// Evaluate the text and length of the received message from a SMS file.
// *****************************************************************************
CONFigure:WCDMa:SIGN:SMS:INComing:FILE 'rx_001.sms'
CONFigure:WCDMa:SIGN:SMS:INComing:FILE:INFO?
Top