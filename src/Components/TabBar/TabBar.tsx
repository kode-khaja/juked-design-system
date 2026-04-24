interface TabBarProps {
    active?: string,
    onChange?: (id: string) => void
}

interface TabItems {
    label: string,
    id: string
}

const tabs: TabItems[]= [
    { label: 'Home', id: 'home' },
    { label: 'Search', id: 'search' },
    { label: 'Log', id: 'log' },
    { label: 'Social', id: 'social' },
    { label: 'Profile', id: 'profile' }
]

export default function TabBar({ active = 'home', onChange }: TabBarProps) {
    return (
        <nav className="tab-bar">
            {tabs.map((tab) => 
                (
                <button key={tab.id} 
                className={`tab-item ${active === tab.id ? 'tab-item--active' : ''}`}
                onClick={() => onChange?.(tab.id)}
                >
                    <div className="tab-icon" />
                    <span className="tab-label">{tab.label}</span>
                </button>
                ))
            }
        </nav>
    )
}