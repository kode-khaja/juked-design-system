interface TopNavProps {
  /** The title displayed in the center of the nav */
  title: string
  /** Callback fired when the back button is clicked */
  onBack?: () => void
  /** Callback fired when the action button is clicked */
  onAction?: () => void
}

export default function TopNav({title, onBack, onAction}: TopNavProps) {
    return (
        <header className="top-nav">
            <button className="top-nav-btn" onClick={onBack}>
                <div className="top-nav-icon" />
            </button>
            <span className="top-nav-title">{title}</span>
           <button className="top-nav-btn" onClick={onAction}>
            <div className="top-nav-icon" />
           </button>
        </header>
    )
}