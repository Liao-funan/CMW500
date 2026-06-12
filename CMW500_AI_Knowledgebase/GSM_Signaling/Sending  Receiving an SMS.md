# Sending  Receiving an SMS

Module: GSM Signaling
Source: 200b200e6e6d4ab7.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Sending / Receiving an SMS
Sending / Receiving an SMS
// *****************************************************************************
// Set SMS via CS domain, set originating address, general data coding,
// message class 1 and SMSC address for an outgoing SMS.
// Edit SMS text as 7 bit text.
// Alternatively edit binary SMS with 8 bit data coding, protocol ID, 
// TP user data header. Send the message and query
// the status and the number of the SMS segments.
// *****************************************************************************
CONFigure:GSM:SIGN:SMS:OUTGoing:SDOMain CS
CONFigure:GSM:SIGN:SMS:OUTGoing:OADDress "+498941290"
CONFigure:GSM:SIGN:SMS:OUTGoing:CGRoup GDC
CONFigure:GSM:SIGN:SMS:OUTGoing:MCLass CL1
CONFigure:GSM:SIGN:SMS:OUTGoing:OSADdress "12345"
CONFigure:GSM:SIGN:SMS:OUTGoing:INTernal "Hello world!"
CONFigure:GSM:SIGN:SMS:OUTGoing:DCODing BIT7
CONFigure:GSM:SIGN:SMS:OUTGoing:BINary #H5685FF45216A56B456E789
CONFigure:GSM:SIGN:SMS:OUTGoing:DCODing BIT8
CONFigure:GSM:SIGN:SMS:OUTGoing:PIDentifier #H1
CONFigure:GSM:SIGN:SMS:OUTGoing:UDHeader #H56
CALL:GSM:SIGN:CSWitched:ACTion SMS 
SENSe:GSM:SIGN:SMS:OUTGoing:INFO:LMSent?
SENSe:GSM:SIGN:SMS:OUTGoing:INFO:SEGMent?
// ***************************************************************************** 
// Select a time source and configure date and time for service
// center time stamp.
// ***************************************************************************** 
CONFigure:GSM:SIGN:SMS:OUTGoing:SCTStamp:TSOurce DATE
CONFigure:GSM:SIGN:SMS:OUTGoing:SCTStamp:DATE 24,10,2012
CONFigure:GSM:SIGN:SMS:OUTGoing:SCTStamp:TIME 12,40,30
// *****************************************************************************
// Query the state of the "message read" flag.
// *****************************************************************************
SENSe:GSM:SIGN:SMS:INFO:LRMessage:RFLag?
// *****************************************************************************
// If the query returns OFF, there is an unread message. In this case ask 
// for the message coding, length and text (for further processing).
// Query the current and total number of the SMS segments.
// *****************************************************************************
SENSe:GSM:SIGN:SMS:INComing:INFO:DCODing?
SENSe:GSM:SIGN:SMS:INComing:INFO:MLENgth?
SENSe:GSM:SIGN:SMS:INComing:INFO:MTEXt?
SENSe:GSM:SIGN:SMS:INComing:INFO:SEGMent?
// *****************************************************************************
// Clean the incoming message buffer (and reset the "message read" flag).
// *****************************************************************************
CLEan:GSM:SIGN:SMS:INComing:INFO:MTEXt
Top