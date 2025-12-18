// Sistema de rastreamento de clicks e eventos
type TrackingEvent = {
  event: string;
  element: string;
  timestamp: number;
  page: string;
  sessionId: string;
};

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('mamae_zen_session');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('mamae_zen_session', sessionId);
  }
  return sessionId;
};

const getStoredEvents = (): TrackingEvent[] => {
  const stored = localStorage.getItem('mamae_zen_events');
  return stored ? JSON.parse(stored) : [];
};

const storeEvent = (event: TrackingEvent) => {
  const events = getStoredEvents();
  events.push(event);
  localStorage.setItem('mamae_zen_events', JSON.stringify(events.slice(-100))); // Keep last 100
};

export const trackClick = (element: string) => {
  const event: TrackingEvent = {
    event: 'click',
    element,
    timestamp: Date.now(),
    page: window.location.pathname,
    sessionId: getSessionId()
  };
  
  storeEvent(event);
  console.log('[Tracking] Click:', element);
};

export const trackPageView = (page: string) => {
  const event: TrackingEvent = {
    event: 'pageview',
    element: 'page',
    timestamp: Date.now(),
    page,
    sessionId: getSessionId()
  };
  
  storeEvent(event);
  console.log('[Tracking] Page View:', page);
};

export const trackScroll = (section: string) => {
  const event: TrackingEvent = {
    event: 'scroll',
    element: section,
    timestamp: Date.now(),
    page: window.location.pathname,
    sessionId: getSessionId()
  };
  
  storeEvent(event);
};

export const getTrackingData = () => {
  return {
    sessionId: getSessionId(),
    events: getStoredEvents(),
    totalClicks: getStoredEvents().filter(e => e.event === 'click').length
  };
};
